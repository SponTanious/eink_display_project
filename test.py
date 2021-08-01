#!/usr/bin/python3
# -*- coding:utf-8 -*-

import os
import time
import sys
import signal
import ffmpeg
from PIL import Image
from sqlitedict import SqliteDict

# Ensure this is the correct import for your particular screen
from waveshare_epd import epd7in5_V2 as epd_driver

#Change Variable from 'public to 'build' when deploying
storageFolder='build'

#Handle Exit
def exithandler(signum, frame):
    try:
        epd_driver.epdconfig.module_exit()
    finally:
        sys.exit()

#On Termination Signal
signal.signal(signal.SIGTERM, exithandler)
#On Interrupt from keyboard (CTRL + C)
signal.signal(signal.SIGINT, exithandler)

#Storage
def save(key, value, cache_file="api/cache.sqlite3"):
    try:
        with SqliteDict(cache_file) as mydict:
            mydict[key] = value # Using dict[key] to store
            mydict.commit() # Need to commit() to actually flush the data
    except Exception as ex:
        print("Error during storing data (Possibly unsupported):", ex)
 
def load(key, cache_file="api/cache.sqlite3"):
    try:
        with SqliteDict(cache_file) as mydict:
            value = mydict[key] # No need to use commit(), since we are only loading data!
        return value
    except Exception as ex:
        return None

#FFMPEG FUNCTIONS
def generate_frame_from_image(in_filename, out_filename):
    (
        ffmpeg
        .input(in_filename)
        .filter("scale", "iw*sar", "ih")
        .filter("scale", width, height, force_original_aspect_ratio=1)
        .filter("pad", width, height, -1, -1)
        .output(out_filename, vframes=1)
        .overwrite_output()
        .run(capture_stdout=True, capture_stderr=True)
    )

def generate_frame_from_video(in_filename, out_filename, time):
    (
        ffmpeg
        .input(in_filename, ss=time)
        .filter("scale", "iw*sar", "ih")
        .filter("scale", width, height, force_original_aspect_ratio=1)
        .filter("pad", width, height, -1, -1)
        .output(out_filename, vframes=1)
        .overwrite_output()
        .run(capture_stdout=True, capture_stderr=True)
    )

#epd values
epd = epd_driver.EPD()
width = epd.width
height = epd.height

#Directory Values
viddir = os.path.join(os.path.dirname(os.path.realpath(storageFolder)), storageFolder, "Videos")
photodir = os.path.join(os.path.dirname(os.path.realpath(storageFolder)), storageFolder, "Photos")

print(width)
print(height)

listLocation = 0

while 1:
    if 1: #Photo Mode

        print(epd)

        #epd init
        epd.init()

        #Load Image Order
        photos = load('ordered_photo_list')

        print(photos)
        print(photos == [] or photos == None)

        #Check for empty list
        if photos == [] or photos == None:
            #Reset position if need be
            if listLocation >= len(photos):
                listLocation = 0

            #Select Image
            print(photos[listLocation])
            currentImage = os.path.join(photodir, photos[listLocation])
            print(currentImage)
            print(os.path.isfile(currentImage))

            #Check if image exists
            if os.path.isfile(currentImage):
                #Process Image
                generate_frame_from_image(currentImage, "/dev/shm/frame.bmp")

            #Open Processed Image
            pil_im = Image.open("/dev/shm/frame.bmp")

            # display the image
            epd.display(epd.getbuffer(pil_im))

            listLocation += 1

            #Sleep for specified time between pictures secs
            epd.sleep()

            #Frame rate
            time.sleep(load('frame_rate'))
        
        #List is empty
        else:
            #Sleep for 1 mins
            epd.sleep()
            time.sleep(60)

    else: #Video Mode
        epd.init()

        currentVideo = os.path.join(photodir, "test.jpg")

        epd.sleep()
        time.sleep(10)
