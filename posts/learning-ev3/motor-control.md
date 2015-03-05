---
layout: page
title: Driving the motors
permalink: /posts/learning-ev3/motor-control.html
author: Jason Berry
date: 2015-03-05
---

This post will focus on the EV3 Large motor and how the included software can be used to control it.  My first impression of the large motor was, "Wow! That thing seems like it would be difficult to integrate into a robot."  I can assure you that I was wrong in my first impression.  Yes it is large, but it serves as a useful foundation for the rest of the robot.  The base robot is well constructed using these motors.

![EV3 Large Motor](https://a248.e.akamai.net/cache.lego.com/images/leshop/Products/45502/45502_350x350_1_xx-xx.jpg)

Now that we're acquainted with the motor, let's dive into code...

### First Program Basics ###

![Drive one motor at half speed for one rotation](img/posts/learning-ev3/motor-control/single-motor-1-rotation.png)

This is a basic program which will drive one of the robot's motors, causing it to turn in place.  Notice the play block (containing a green triangle) and the end block (containing the red square).  These blocks denote the start and end points of the program.  If you click play and your robot is connected, then it will execute whatever blocks you have after the play block.

### The Single Motor Programming Block ###

![Single motor programming block](img/posts/learning-ev3/motor-control/single-motor-programming-block.png)

You'll notice a few symbols inside the single motor programming block:

- The ![power](img/posts/learning-ev3/motor-control/power-symbol.png "power") symbol corresponds to the motor's speed or power.  The value can be adjusted between -100 to 100.  Any negative value puts the motor into reverse.  This will come in handy for navigation and steering.
- The ![rotation](img/posts/learning-ev3/motor-control/rotation-symbol.png "rotation") symbol corresponds to the number of full rotations of the motor.  If the motor is attached to a wheel then this directly corresponds to distance that the robot will travel.  The motor block offers several types of rotation that you can choose from.  They include:
    - Off
    - On
    - On for seconds
    - On for degrees
    - On for rotations
- The ![brake](img/posts/learning-ev3/motor-control/brake-or-coast-symbol.png "brake") symbol corresponds to the actions the motor takes at the end of the block execution.  If the value is set to &#x2714; then the motor will brake after completion.  IF the value is set to &#x2716; then the motor will coast until stopped.
- The *B* in the top right of the block corresponds to the port on the EV3 Brick that the motor is plugged into.  In this case, the motor is plugged into the *B* port.

Execution of this block will only operate one motor.  This can be useful when trying to maneuver your robot around an obstacle or when your robot motor functions are independent.
 
### The Dual Motor Programming Block ###

![Dual motor programming block](img/posts/learning-ev3/motor-control/dual-motor-programming-block.png)

You'll notice that this block features two ![power](img/posts/learning-ev3/motor-control/power-symbol.png "power") symbols, one ![rotation](img/posts/learning-ev3/motor-control/rotation-symbol.png "rotation") symbol, one ![brake](img/posts/learning-ev3/motor-control/brake-or-coast-symbol.png "brake") symbol, and two *motor port* selections.  Execution of this block will operate two motors.  In this case the block operates the motors hooked up to ports *B* and *C*.

The two ![power](img/posts/learning-ev3/motor-control/power-symbol.png "power") values control the power of each motor respectively.  Differential values will cause one motor to spin faster than the other.  This will cause the robot to turn.

### A Slightly More Complex Program ###

![Travel in a square](img/posts/learning-ev3/motor-control/travel-in-a-square-pattern.png)

Executing the program above will cause the robot to travel in a square.  You'll notice that the blocks are attached by a wire.  This wire guides the program execution from the end of one block to the beginning of the next, allowing the programmer to build complex programs for the robot.