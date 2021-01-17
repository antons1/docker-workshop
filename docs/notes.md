## Intro

* What is the problem
    - Running in the same environment
    - Dependencies
    - Deployment
    - Documentation
* What is Docker for?
* How does it solve the problem
    - Same environment
    - Dockerfile is documentation

## How does docker work

* Isolation
* Running on the host
* Docker engine
* CLI
* Containers
* Networks
* Volumes
* Images
    - Layers
* Dockerfiles

## How do we use docker

* `docker`
* Dockerfile
    - FROM
    - COPY
    - RUN
    - EXPOSE
    - ENTRYPOINT
    - CMD
    - WORKDIR
* `docker image`
* `docker container`

## Step 1 - Containerize an app

* `git checkout 1-dockerize-existing-app`
* Regular React-app
* Can be run locally
    - `yarn install`
    - `yarn build`
    - `yarn serve`
* How to run in production?
    - Build
    - Install dependencies
    - Upload files to somewhere (webserver, S3, etc.)
* How to do it with docker?
* How to find images on docker hub
* Task: Write a Dockerfile and build an image, then run it
    - List dockerfile commands
    - List app commands
* End: Show how to do it

## Step 2 - Run several apps

* `git checkout 2-backend-and-frontend`
* One container should do one thing
* Backend for the app
* Detached mode
* `docker rm`, `docker stop`
* .dockerignore
* Multi-stage builds
* Task: Run the backend and frontend together in detached mode, and remove them
* Show them in Docker Desktop

## Step 3 - Use a prebuilt image

* `git checkout 3-with-database`
* How to run any image
* Run backend with db - fails
* Add network
* Explain DNS/service discovery
* Now we have to run three apps, and a network
* `docker-compose` to the rescue!
* What does docker compose do
* How to write a compose file
* How to run the compose file
* Task: Write a compose-file, and run all three apps together
* Show them in docker desktop

## Step 4 - Persistent storage
* `git checkout 4-volumes`
* Containers are made to run for a short time
* How to add storage?
* Volumes
* Can also be added with docker compose
* Show that
* Show all the commands that have been replaced with docker-compose

## Step 5 - Optimisation
* A lot one can do
* Security, but won't go into that here
* Quality of life (and save traffic): image space and cache
* How docker caches layers
    - Build steps in the right order
    - Dockerignore
    - Specificity
* What is included in the image
    - What is needed for build vs run
    - Multistage builds
* Task: Optimize frontend build
* Then: Show size reduction

## Step 6 - Other cool things with docker
* You can run services you need while experimenting (DB)
* You can run a dev environment
    - SH-ing into a container
    - Connecting a local folder as a volume

## Next steps
* Links to a few videos
* Docker Swarms
* Docker Stacks
* Kubernetes
* Windows/linux docker