import time
from flask import Flask, request, redirect, url_for
from os import listdir, remove
from os.path import isfile, join
from sqlitedict import SqliteDict

#Change Variable from 'public to 'build' when deploying
storageFolder='build'
allowedImgExt = ['jpg', 'jpeg', 'jpe', 'jif', 'jfif', 'jfi', 'png', 'tiff', 'webp', 'tif', 'bmp']

app = Flask(__name__, static_folder='../'+storageFolder, static_url_path='/')
#app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 #16mb

#Storage
def save(key, value, cache_file="cache.sqlite3"):
    try:
        with SqliteDict(cache_file) as mydict:
            mydict[key] = value # Using dict[key] to store
            mydict.commit() # Need to commit() to actually flush the data
    except Exception as ex:
        print("Error during storing data (Possibly unsupported):", ex)
 
def load(key, cache_file="cache.sqlite3"):
    try:
        with SqliteDict(cache_file) as mydict:
            value = mydict[key] # No need to use commit(), since we are only loading data!
        return value
    except Exception as ex:
        print("Error during loading data:", ex)
        return None


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/get_ordered_photos')
def get_ordered_photos():
    photos = []
    photoNumber = 0

    if load('ordered_photo_list') != None:
        for photo in load('ordered_photo_list'):
            if isfile(join('..\\'+storageFolder+'\\Photos', photo['url'])) :
                photos.append({'value':photo['value'], 'url':photo['url']})
    else:
        for url in listdir('..\\'+storageFolder+'\\Photos'):
            if isfile(join('..\\'+storageFolder+'\\Photos', url)) and url.split('.')[-1].lower() in allowedImgExt:
                photos.append({'value':photoNumber, 'url':url})
                photoNumber+=1

    return {'photos' : photos}

@app.route('/api/give_ordered_photos', methods=['POST'])
def save_new_order():
    save('ordered_photo_list', request.json)
        
    return '', 200

@app.route('/api/delete_photo', methods=['POST'])
def delete_photo():
    deletedPhoto = request.json
    photos = load('ordered_photo_list')

    #Delete from list
    photos.remove(deletedPhoto)
    save('ordered_photo_list', photos)

    #Delete File
    if isfile('../'+storageFolder+'/Photos/'+deletedPhoto['url']):
        remove('../'+storageFolder+'/Photos/'+deletedPhoto['url'])
    
    return '', 200

@app.route('/api/upload_photo', methods=['POST'])
def upload_photo():
    #Make sure unique_Photo_ID exists
    if load('unique_Photo_ID') == None:
        save('unique_Photo_ID', 0)
    
    #Get File to upload
    uploaded_photo = request.files['file']

    if uploaded_photo.filename != '' and uploaded_photo.filename.split('.')[-1].lower() in allowedImgExt and not isfile('../'+storageFolder+'/Photos/'+uploaded_photo.filename):
        #Save photo
        uploaded_photo.save('../'+storageFolder+'/Photos/'+uploaded_photo.filename)

        #Get ordered photo List
        get_ordered_photos()
        photos = load('ordered_photo_list')

        #Get unique_Photo_ID
        value = load('unique_Photo_ID')

        #Append new photo
        photos.append({'value':value, 'url':uploaded_photo.filename})  #Can't use length will need a ID storage value

        #Save new 
        save('ordered_photo_list', photos)
        save('unique_Photo_ID', value+1)

    return redirect('http://localhost:3000/')#redirect(url_for('index'))