---
layout: page
title: Learning how to program with Lego Mindstorms Ev3
permalink: /posts/learning-ev3.html
author: Jason Berry
date: 2015-03-05
---

Recently I've had an impulse to learn more about an area of my discipline as a computer scientist that is new to me.  That area is where Robotics meets Artificial Intelligence.  Now... I have absolutely no real world or practical experience in either topic, but why should that stop me?  My first exposure to programming was with the old [Lego Mindstorms Invention System](http://en.wikipedia.org/wiki/Lego_Mindstorms#RCX) which was a Christmas gift from my parents.  I recall my proudest achievement was an automated rubber band shooting turret.  It was designed to sense when something got close and then let loose the dogs of war on whatever that was.  It was really simple, but a lot of fun to build.  However, now that I'm an experienced full stack software developer, I've decided that it's time to revisit one of my old hobbies to see if I can build a smarter, more useful robot.  To do so I've purchased the [Lego Mindstorms EV3 Core Set](https://shop.education.lego.com/legoed/en-US/catalog/product.jsp?productId=5003400) which has a whole bunch of new technology that I'm excited to use!

![EV3 Brick](https://a248.e.akamai.net/cache.lego.com/images/leshop/Products/45500/45500_350x350_1_xx-xx.jpg "EV3 Brick")

Lego's [EV3 Brick](https://shop.education.lego.com/legoed/en-US/catalog/product.jsp?productId=45500) contains a new host of technology that you can read about on their site.  I'm personally interested in its [Bluetooth](http://en.wikipedia.org/wiki/Bluetooth) and [Wifi](http://en.wikipedia.org/wiki/Wi-Fi) capabilities.  Unfortunately, to use wifi I will have to invest in a [Netgear Wifi dongle](http://support.netgear.com/product/wna1100) which would plug into the usb port on the side of the brick.  I don't really want to go down that road yet, so I'm going to be working with Bluetooth until I find myself limited.

Before I start experimenting with the EV3 Brick, I spent some time thinking about what kinds of problems I might want to solve.  Then I started to think about what I do at my job everyday as a full stack web developer.  I frequently have to work with APIs to make different applications or internal components of an application communicate.  This results in code that is decoupled in such a way that if you need to switch APIs or change API versions, it is as simple as dropping in a new implementation for that specific API.  What I plan to take from that line of thinking, is the concept of defining an interface in my own application which would be used to communicate with a robot.  This interface will be responsible for translating messages containing motor control commands and sensory feedback between the EV3 Brick and my application.  Once I have created this interface, it will serve as a platform to start building smarter robots and if I iterate on the idea, it might apply to more complicated robotic hardware configuration involving [Arduino](http://www.arduino.cc/) and [Raspberry Pi](http://www.raspberrypi.org/).

For ease of learning, I built the base model robot included in the instructions that come with the [EV3 Core Set](https://shop.education.lego.com/legoed/en-US/catalog/product.jsp?productId=5003400).  The build was easy and only took a few minutes.  It turns out that it's perfect when you first start learning how to program the robot using the EV3 software.  

![EV3 Core Set Robot](http://shop.legoeducation.com/Resources/Files/product-images/mindstorms-ev3/robot-educator-model-lego-mindstorms-education-ev3-45544.PNG "The base model EV3 Core Set robot")

On the road to learning how to program the EV3 Brick, I will go over the following topics:

1. [Driving the Motors](#/posts/learning-ev3/motor-control)
1. [Understanding Sensory Input](#/posts/learning-ev3/sensory-input)
1. [Loop Control](#/posts/learning-ev3/loop-control)
1. [Bluetooth Communication](#/posts/learning-ev3/bluetooth-communication)