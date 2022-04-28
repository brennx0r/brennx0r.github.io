---
title: Setting up Nintendo Switch with Elgato HD60S For Twitch Streaming
date: "2021-03-31"
---

While I've been on sabbatical, I've used the time to revisit and tackle projects that I've been putting off for one reason or another. One project in that list has been to set up my Switch to Stream to Twitch using my home office desk workstation setup so that I can chat with the online community and share my Animal Crossing: New Horizons Island, based on places in Bermuda - including St. David's, Fort St. Catherine, Cupmatch pitch and fan site, the Hamilton Princess spa, and more! 

After spending a few hours looking at software options, testing them out for my needs, I ran into some traps and hazards before finally getting everything settled. With that in mind, I thought it would be useful to share the setup experience with y'all.

## My Use Case and Desired Outcomes

**VIP:**
- Switch content shared to Twitch
- Gameplay sound and commentary sound available to Twitch



**Nice to have:**
- Locally, be able to listen to the video game music AND be able to provide commentary simultaneously
- Customizable transition screens to make the Twitch experience more professional
- Sharing profile video on the stream
- Custom stats, new subs, other metadata on the stream

## Getting Started

### Hardware
- A Nintendo Switch with dock (dock is required to access HDMI output)
- An A/V capture device (this tutorial will focus specifically on the Elgato HD60S)
- a MacBook Pro

### Cabling
- One USBC cable
- One HDMI cable

... and finally: 
### Software
- A software studio solution that you can use to display the captured video and audio

In this tutorial, I will go over 2 options: **OBS and Elgato Game Capture HD**. 

Please keep in mind that this doesn't cover the full range of what's out there, and like all tech tutorials, the value of this information is going to degrade over time as new versions of software become available and compatibilty, experiences change.

## Hardware / Cabling Setup

Below is a rough outline of what that looks like.


![Hardware Setup Topology](../switch_elgato_computer_hardware_setup.png)


## OBS Setup Experience

First off, I wanted to download and install the latest version of OBS. At the time of this blog post, that version is v 27.2.4 (3/29/22). Once this version is installed, there are some other software dependencies that you must install before OBS will work properly:

- OBS Link (https://help.elgato.com/hc/en-us/articles/360031363132-OBS-Link-Setup)

BIG NOTES ON FUNCTIONALITY:

- OBS Link is not compatible with Apple Silicon Macs.
- OBS Link has a latency around ~250ms. 

While the latency might not seem like a big deal for some games (Animal Crossing or other chill puzzle games), for others (like sidescrollers, action, etc.) it means that the "feel" in response time made the games nearly unplayable. 

I tried hacking at the latency for better performance, and while there is a mode for the NDI input in OBS for "better performance" I've found it only works for about 30 seconds, then the latency increases, followed by the game sound crashing and cutting out. The only way to resolve that behavior was to entirely quit and restart OBS. In short, a very poor experience.

## Elgato Software Setup Experience 

Over on the Elgato-native software side, I installed Elgato Game Capture HD v2.11.14 (https://www.elgato.com/en/game-capture-software)

After installation, I found that it was pretty straight-forward to set up the elgato device, the sound setup, the microphone setup, as well as the set up of some custom transitions screens. The only issue I came across that I have yet to resolve is that I cannot play game sound locally when I have "Commentary" turned on - even if I want to pipe out the game audio via headphones. I should also note here that the audience experience is that they will hear both. I reckon that this is a feature of the software to avoid echo or looping issues in sound.

In an upcoming blog post, I'll delve a little deeper into the UI/UX of this application, as well as setting up the transitions screens, setting up gaming stats from Twitch, and more - stay tuned!

## 🌯 In Conclusion...

I was very pleasantly surprised by the experience in picking up and using Game Capture HD vs. OBS. While I have been an OBS user in the past, the recent software changes that required OBS Link to be installed cut the usability and functionality I need for my use cases. While I will continue to use OBS for other purposes, I recommend that if folks have the Elgato HD60S that they use Game Capture HD instead as it's easier to use and set up, doesn't have latency issues, and simply has better performance.