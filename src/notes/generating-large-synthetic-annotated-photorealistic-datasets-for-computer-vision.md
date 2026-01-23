---
layout: layouts/post.njk
title: Generating Large, Synthetic, Annotated, & Photorealistic Datasets for Computer Vision
date: 2018-09-25
type: note
subtitle: Teaching robots with fake pics, before it was cool.
tags:
  - robotics
  - software engineering
  - the home
---
![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*QeeQJCqJfHF45aUI0zvrCg.jpeg)

I’d like to introduce you to the beta of a tool we’ve been working on at Greppy, called Greppy Metaverse (*UPDATE Feb 18, 2020:* [*Synthesis AI*](https://synthesis.ai/) *has acquired this software, so please contact them at* [*synthesis.ai*](https://synthesis.ai/)!), which assists with computer vision object recognition / semantic segmentation / instance segmentation, by making it quick and easy to generate a lot of training data for machine learning. *(Aside: Synthesis AI also love to help on your project if they can — contact them at* [https://synthesis.ai/contact/](https://synthesis.ai/contact/) *or* [*on LinkedIn*](https://www.linkedin.com/company/synthesis-ai/)*).*

If you’ve done image recognition in the past, you’ll know that the size and accuracy of your dataset is important. All of your scenes need to be annotated, too, which can mean thousands or tens-of-thousands of images. That amount of time and effort wasn’t scalable for our small team.

## Overview

So, we invented a tool that makes creating large, annotated datasets orders of magnitude easier. We hope this can be useful for AR, autonomous navigation, and robotics in general — by generating the data needed to recognize and segment all sorts of new objects.

We’ve even open-sourced our [VertuoPlus Deluxe Silver dataset](https://drive.google.com/file/d/1J4fnNh9IaXa6gkqbU93V2RmZStr8M9Bf/view?usp=sharing) with 1,000 scenes of the coffee machine, so you can play along! It’s a [6.3 GB download](https://drive.google.com/file/d/1J4fnNh9IaXa6gkqbU93V2RmZStr8M9Bf/view?usp=sharing).

To demonstrate its capabilities, I’ll bring you through a real example here at Greppy, where we needed to recognize our coffee machine and its buttons with a [Intel Realsense D435](https://click.intel.com/intelr-realsensetm-depth-camera-d435.html) depth camera. More to come in the future on *why* we want to recognize our coffee machine, but suffice it to say we’re in need of caffeine more often than not.

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*XL3b1-iN6aBuCnvUMi3tIg.png)

*Screenshot of the Greppy Metaverse website*

## In the Good-ol’ Days, We Had to Annotate By Hand!

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*OIgrsG_R7tUYxbmf9NRaiw.png)

*VGG Image Annotator tool example, courtesy of [Waleed Abdulla’s](https://www.linkedin.com/in/waleedka/) “[Splash of Color](https://engineering.matterport.com/splash-of-color-instance-segmentation-with-mask-r-cnn-and-tensorflow-7c761e238b46)”*

For most datasets in the past, annotation tasks have been done by (human) hand. As you can see on the left, this isn’t particularly interesting work, and as with all things human, it’s error-prone.

It’s also nearly impossible to accurately annotate other important information like object pose, object normals, and depth.

## Synthetic Data: a 10 year-old idea

One promising alternative to hand-labelling has been synthetically produced (read: computer generated) data. It’s an idea that’s been around for more than a decade (see this [GitHub repo linking to many such projects](https://github.com/unrealcv/synthetic-computer-vision)).

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*CMfY6KeJ_AvmDe6ykRWVjw.png)

*From [Learning Appearance in Virtual Scenarios for Pedestrian Detection, 2010](http://people.csail.mit.edu/jmarin/docs/cvpr10.pdf)*

We ran into some issues with existing projects though, because they either required programming skill to use, or didn’t output photorealistic images. We needed something that our non-programming team members could use to help efficiently generate large amounts of data to recognize new types of objects. Also, some of our objects were challenging to photorealistically produce without ray tracing ([wikipedia](https://en.wikipedia.org/wiki/Ray_tracing_(graphics))), which is a technique other existing projects didn’t use.

## Making Synthetic Data at Scale with Greppy Metaverse

To achieve the scale in number of objects we wanted, we’ve been making the Greppy Metaverse tool. For example, we can use the great pre-made CAD models from sites [3D Warehouse](https://3dwarehouse.sketchup.com/), and use the web interface to make them more photorealistic. Or, our artists can whip up a custom 3D model, but don’t have to worry about how to code.

Let’s get back to coffee. With our tool, we first upload 2 non-photorealistic CAD models of the Nespresso VertuoPlus Deluxe Silver machine we have. We actually uploaded two CAD models, because we want to recognize machine in both configurations.

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*l-P0PdovTPwLAmbMkd1X5Q.png)

*Custom-made CAD models by our team.*

Once the CAD models are uploaded, we select from pre-made, photorealistic materials and applied to each surface. One of the goals of Greppy Metaverse is to build up a repository of open-source, photorealistic materials for anyone to use (with the help of the community, ideally!). As a side note, 3D artists are typically needed to create custom materials.

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*OQ2Xm8fZ1CehwSGACqtZ0w.gif)

*Select pre-made, photorealistic materials for CAD models.*

To be able to recognize the different parts of the machine, we also need to annotate which parts of the machine we care about. The web interface provides the facility to do this, so folks who don’t know 3D modeling software can help for this annotation. No 3D artist, or programmer needed ;-)

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*e3t-nxRirK79jYRgr1HRpg.gif)

*Easily label all the parts of interest for each object.*

And then… that’s it! We automatically generate up to tens of thousands of scenes that vary in pose, number of instances of objects, camera angle, and lighting conditions. They’ll all be annotated automatically and are accurate to the pixel. Behind the scenes, the tool spins up a bunch of cloud instances with GPUs, and renders these variations across a little “renderfarm”.

Here’s an example of the RGB images from the [open-sourced VertuoPlus Deluxe Silver dataset](https://drive.google.com/open?id=1J4fnNh9IaXa6gkqbU93V2RmZStr8M9Bf):

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*OOHwPVYjbpLLlBc16nfkGA.jpeg)

*A lot of scene RGBs with various lighting conditions, camera angles, and arrangements of the object.*

For each scene, we output a few things: a monocular or stereo camera RGB picture based on the camera chosen, depth as seen by the camera, pixel-perfect annotations of all the objects and parts of objects, pose of the camera and each object, and finally, surface normals of the objects in the scene.

Let me reemphasize that **no** manual labelling was required for any of the scenes!

Example outputs for a single scene is below:

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*0VKxbwUUqjXglyFlGJYvnQ.png)

*Output examples from each scene*

## Machine Learning on the Synthetic Dataset

With the entire dataset generated, it’s straightforward to use it to train a Mask-RCNN model (there’s a good [post on the history of Mask-RCNN](https://blog.athelas.com/a-brief-history-of-cnns-in-image-segmentation-from-r-cnn-to-mask-r-cnn-34ea83205de4)). In a follow up post, we’ll open-source the code we’ve used for training 3D instance segmentation from a Greppy Metaverse dataset, using the [Matterport implementation of Mask-RCNN](https://github.com/matterport/Mask_RCNN).

In the meantime, here’s a little preview. Here’s raw capture data from the [Intel RealSense D435](https://click.intel.com/intelr-realsensetm-depth-camera-d435.html) camera, with RGB on the left, and aligned depth on the right (making up 4 channels total of RGB-D):

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*ZCNI1zORcCbeteIgKu01Jg.jpeg)

*Raw data capture from Intel RealSense D435. Yes, that’s coffee, tea, and vodka together ;-)*

For this Mask-RCNN model, we trained on the open sourced dataset with approximately 1,000 scenes. After a model trained for 30 epochs, we can see run inference on the RGB-D above. And voilà! We get an output mask at almost 100% certainty, having trained only on synthetic data.

Of course, we’ll be open-sourcing the training code as well, so you can verify for yourself.

![](/assets/images/notes/generating-large-synthetic-annotated-photorealistic-datasets-for-computer-vision/1*8ugYiu6wTHeCT0E9EuV16g.png)

Once we can identify which pixels in the image are the object of interest, we can use the Intel RealSense frame to gather depth (in meters) for the coffee machine at those pixels. Knowing the exact pixels and exact depth for the Nespresso machine will be extremely helpful for any AR, navigation planning, and robotic manipulation applications.
