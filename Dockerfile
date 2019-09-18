#select the node version of our application. The 'slim' The type of image. Since this is 'slim',
#it only downloads the minimum requirements for the OS to run this version of node that we have selected

# More options of images to build on are located at: https://hub.docker.com/_/node/
FROM node:10-slim

# Working directory on the end server where the source code will be doployed
WORKDIR /opt/applications

# The COPY command will copy the package.json files to the docker container 
COPY package*.json ./

# This RUN command is the command the container will execute to load all of the dependencies on the server
# This is why the image is able to be so lightweight because the dependencies are installed only at runtime
# npm install is what the docker container will run
RUN npm install
COPY . .

### This EXPOSE is the port on the container that will be exposed to listen on
EXPOSE 3000

# This CMD is the command to run the BlackRock application
CMD ["node","server.js"]