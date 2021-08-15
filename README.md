# eInk Display Project

I started this project to create an eink display for my mates who recently got married to hold their wedding photos.

<img alt="eink display" src="https://github.com/SponTanious/eink_display_project/blob/master/Picture%20frame.jpg" width="50%" height="50%">

## Plan
I want to give this project to my friends as a gift. Which means that it needs to be user friendly.
My plan is to have a front-end that will allow them to upload files directly to the pi. Allowing them to configure thier 
display however they want. There will be two modes: Slow-movie mode and Picture mode. 

## Basic Usage
Once the requirements are in place (See [Install](https://github.com/SponTanious/eink_display_project/blob/master/INSTALL.md) document) The display can then be configured from the website hosted on the raspberrypi. You can access it using the domain name, http://raspberrypi or by finding the ip address of the pi from your gateway. Raspberry pi will need to know the SSID name and password before you will be able to access it.

There 3 main functions to the website.
* Picture settings
* Upload and Delete Pictures
* Reorder images

![eInk Display](https://github.com/SponTanious/eink_display_project/blob/master/website.png?raw=true){:height="50%" width="50%"}

## What I learnt
I wanted to use this project to teach my self how to build a frontend and a backend for a website. 
I learnt how to use REACT and Flask, and built my project from scratch using both frameworks.
I had also never used pyhton services before.

Alot of what I learnt was nescessary to make the device usable for my friends. The frontend so that they wouldn't too ssh into the pi to make changes, services so that the program would run every time it was turned on. It was different from my previous projects where I would be able to use it but it would probably be unusable for others. 

## Credit
Inspiartion Pulled from the following links.
- https://hackaday.com/2020/08/23/e-paper-display-shows-movies-very-very-slowly/
- https://github.com/AbnormalDistributions/e_paper_weather_display
- https://github.com/robweber/vsmp-plus

Support from the following websites
- https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
- https://www.udemy.com/

