# Get node parent image from dockerhub 
# with version 17 and Linux Distro alpine
FROM node:17-alpine

# Specify working directory in the image
# Now, all commands will run in the WORKDIR directory
WORKDIR /app

# Copy only package.json file to the image
# This is done to check if we already built an image with the same package.json file
# Then docker can use the cashed dependencies and won't install them again
# Saves a lot of time to build an images
COPY package.json .

# RUN commands run while building the image
# Installs dependenceis for the node express app
RUN npm install

# Copy all the files to the image 
# First . means the FROM copy directory
# Second . means the TO copy directory
# The copy will work now based on the WORKDIR directory
# Copy all of the files from this directory to the root/app directory of the image 
COPY . .

# RUN commands run while building the image
# Builds the express app
RUN npm run build

# Exposes the app to the port
EXPOSE 4000

# CMD commands run at runtime when the container runs
# Builds and Runs the node express app
CMD ["npm", "run", "start"]