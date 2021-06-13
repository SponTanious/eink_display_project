# eInk Display Project
I installed this on a base install of Raspberry Pi OS lite (formally Raspbian). If you use some other method some of this libraries may already exist but this is assuming you have a fresh OS.

## Hardware
- 7.5inch Black and White e-ink display [link](https://www.waveshare.com/7.5inch-e-Paper-HAT.htm)
- Raspberry Pi Zero W
- SD card
- Photo Frame

## Software Installation
On the Raspberry Pi:

0. Make sure SPI is enabled
   * Run `sudo raspi-config`
   * Navigate to `Interface Options` > `SPI`
   * Select `<Finish>` to exit. Reboot if prompted.
1. Set up environment
   * Update package sources: `sudo apt update`
   * Make sure git is installed: `sudo apt install git`
   * Make sure pip is installed: `sudo apt install python3-pip`
2. Install Waveshare e-paper drivers
   * `pip3 install git+https://github.com/waveshare/e-Paper.git#egg=waveshare-epd&subdirectory=RaspberryPi_JetsonNano/python`
3. Make sure dependencies are installed
   * `sudo apt install ffmpeg`
   * `pip3 install ffmpeg-python`
   * `pip3 install pillow`
   * `pip3 install ConfigArgParse`
   * `pip3 install git+https://github.com/robweber/omni-epd.git#egg=omni-epd`
   * `pip3 install sqlitedict`
   * `pip3 install `
4. Clone this repo
   * `git clone https://github.com/SponTanious/eink_display_project`
   * Navigate to 
   * Copy the default configuration file: 
5. Test it out
   * 

   
## Running as a service
