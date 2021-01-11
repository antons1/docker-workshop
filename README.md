# Docker workshop

Code for a workshop introducing Docker, docker-compose, docker stacks and maybe kubernetes

## Prerequisites
The following is a list of everything you need to set up *before* the workshop. We will not have time to go through this during the workshop.

### Docker desktop
You need to have docker installed.

For Windows/MacOS:

Go [here](https://www.docker.com/get-started) for the official "getting started" documentation from Docker Inc.

You don't have to go through everything, as we will cover how to use docker in the workshop, but you need to make sure that you have installed Docker Desktop, and that you can use docker commands from your terminal. This also includes registering for [docker hub](https://hub.docker.com).

For Ubuntu:

Go [here](https://docs.docker.com/engine/install/ubuntu/) for information on how to install docker for Ubuntu. There are also guides there for Fedora, Debian and CentOS. You will not get the GUI from Docker Desktop, but that is not necessary for this workshop.

To check that everything works after setup, run `docker run hello-world` in your terminal.

### docker-compose

You also need docker-compose, install instructions for all OSs [here](https://docs.docker.com/compose/install/)

### Node/NPM/yarn

Install node from [here](https://nodejs.org/en/) for Windows/MacOS, or see instructions for Ubuntu/other distros [here](https://nodejs.org/en/download/package-manager/)

You need at least Node 10. NPM is installed along with Node.

Install yarn by running `npm i -g yarn`

Yarn is just an alternative to npm that was used when building this code, but all commands should work by replacing yarn with npm in the command if you want to use npm instead. So e.g instead of `yarn run build` you can write `npm run build`.

### Git

You need to have git installed. You can find it [here](https://git-scm.com/downloads)
