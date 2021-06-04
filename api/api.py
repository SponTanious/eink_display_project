import time
from flask import Flask, request, redirect, url_for
from os import listdir
from os.path import isfile, join

app = Flask(__name__, static_folder='../build', static_url_path='/')
#app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 #16mb

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/get_ordered_photos')
def get_ordered_photos():
    images = []
    #Check for file
    #if file doesn't exist make file
    #return file as list
    for image in listdir('Photos'):
        if isfile(join('Photos', image)):
            images.append(image)

    return {'images': images}

@app.route('/api/upload_photo', methods=['POST'])
def upload_image():
    uploaded_image = request.files['file']
    print(uploaded_image)
    if uploaded_image.filename != '':
        uploaded_image.save('Photos/'+uploaded_image.filename)
    return redirect(url_for('index'))