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


#I have Photos List
photos = load('ordered_photo_list')
print(photos)
#save('ordered_photo_list',[])

#Let us try to display photo

#epd values
epd = epd_driver.EPD()
width = epd.width
height = epd.height

#Directory Values
viddir = os.path.join(os.path.dirname(os.path.realpath("public")), "public", "Videos")
photodir = os.path.join(os.path.dirname(os.path.realpath("public")), "public", "Photos")

print(viddir)
print(photodir)
print(width)
print(height)

while 1:
    print(epd)
    #epd init
    epd.init()

    #Pick Image
    #currentImage = os.path.join(photodir, "test.jpg")

    #print(currentImage)
    #print(os.path.isfile(currentImage))

    #Process Image
    #generate_frame_from_image(currentImage, "/dev/shm/frame.bmp")

    #Open Processed Image
    #pil_im = Image.open("/dev/shm/frame.bmp")

    # display the image
    #epd.display(epd.getbuffer(pil_im))

    #print("yay")

    #epd.sleep()
    #time.sleep(10)

    #print("done")

    #sys.exit()