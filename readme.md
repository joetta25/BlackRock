# Project Title

BlackRock Task project.

## Getting Started - Initial Set up

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

See project notes and requirements in Google Doc.


### Installing

1. Clone repository
2. From project root run
```
npm install
```
```
npm run dev
```
3. Project will now be running on localhost on specified port.


## Deployment

1. Ensure Docker is installed and Running
2. Create a Docker image with an identifiable tag/title
``` 
docker build -t BlackRock:v1 .

# or

docker build -t [yourusername]/blackrock .

#blackrock is lowercase because Docker will yell at you if it isn't
```
### This tag value should be incremented to depict distict versions of the application

3. Check the list of images
```
docker images
```
4. Run Docker Container
```
docker run -p 80:3000 <IMAGE_ID_FROM#3>
```
### Docker will run with port 3000 exposed on the container and mapping to port 80 locally

5. The application will be avaiable via the browser at http://localhost

6. Open another terminal window and run the following commands
```
# in order to list all running containers
docker ps

# stop docker
docker stop

```



## Built With
(dependencies worth noting)

* [ParcelJS](https://parceljs.org) - a web application bundler
* [CreateReactApp](https://create-react-app.dev/) - for creating single-page React Applications
* [Redux](https://redux.js.org/) - state container for JavaScript Apps
* [ExpressJS](https://expressjs.com/) - minimalist web framework for NodeJS
* [Docker](https://www.docker.com/) - securely build, share, and run modern applications anywhere

