---
layout: page
title: The Mine Cart
permalink: /projects/the-mine-cart.html
author: Jason Berry
date: 2014-12-21
---

###github: [https://github.com/TheMineCart](https://github.com/TheMineCart)

The Mine Cart was a [Minecraft](https://minecraft.net/) server that I started with a couple of friends back in 2011. We wanted to create a community of players who built creations in a safe environment. This was very easy when we had a small group of friends and a private server.  However, when we decided to open the server to the public, it became very difficult to maintain that safe environment. There were already a couple of plugins available to us that would manage things like block protection, ownership information, and block removal. It was frustrating because we weren't satisfied with any of the solutions. Some were slow and others didn't offer enough protection, so I decided to create my own plugin.

Eventually, I needed to create more plugins to assist my server administrators and moderators.  This post will go into detail about each [Minecraft](https://minecraft.net/) plugin and administrative utility.

#BetterProtected
###github: [https://github.com/TheMineCart/BetterProtected](https://github.com/TheMineCart/BetterProtected)

[BetterProtected](https://github.com/TheMineCart/BetterProtected) was the first plugin I wrote. Its purpose is to give a player ownership of blocks they place in the world and to prevent other players from destroying those blocks. 

In its current state, the tech stack uses:

- Java 6
- MongoDB v2.7.3
- Gson v2.2.2
- Craftbukkit 1.3.2-R

