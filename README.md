# Introduction to Docker

## Overview of the Docker ecosystem: Dockerfile, Images and Containers

### Dockerfile
The blueprint to create a *Docker Image.*

### Images
The template to create *containers*.

### Containers
The running instance of an image, i.e the running application.
<br>
(Think of it as analogous to objects (containers) being created as instances of classes (images). One image can be used to spawn multiple containers
of the same process, and once that container is shut down (using *Docker Desktop* if you're on Windows.), the changes made to the data within that container will be lost.
For persistence of data, we turn to *Docker Volumes*.)

## Spinning up your own container

Try out this little snippet to run an Ubuntu instance within seconds! (We all know how much of a pain it is to set up a dual-booted OS or install a new one. This is unlike that, though!)
<br>
```
Docker pull ubuntu
Docker run -it ubuntu

```
The `-it` tag allows us to run the container in an "interactive" environment. It starts a shell session inside the container and allows us to interact with it.

## Making your first Dockerized application

Clone the contents of this repository into a local folder on your machine, or better yet, try coding it up yourself!

Once you have your application ready with the `Dockerfile` and `.dockerignore` file, `cd` into the folder (here, if you're following along, the `/src` folder.) and run the following command.
<br>

```
Docker build -t <your-username-on-Docker>/<your-app-name>:<version> .

```
The `.` specifies the path of the Dockerfile. And there! You've built your first Docker image. Now to run this image.
<br>

```
Docker run <image-ID>

```
And you have successfully run your first container... or have you? You're going to have trouble opening up your application on the `port` that you assigned it in your node application. Why is that?

## Port forwarding

The error you came across was because the `port` that we exposed in the `Dockerfile` cannot be accessed by the resources outside the container. In a way, it is the container's port. Port forwarding allows us to "map" a port from our local machine to the one on the container.
<br>

```
Docker run -p <local-port>:<container-port> <image-ID>

```
Congratulations! You have successfully created your Dockerized application! That was all for this session, but remember, this was just the tip of the Docker iceberg!


