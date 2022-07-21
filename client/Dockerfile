# were using node.js
FROM node:latest

# creates dir in container
WORKDIR /user/src/app

# move package.json and lock too the dir
COPY ./package.json ./
COPY ./package-lock.json ./

# install all dependencies within container
RUN npm install 

# copy client to the dir in container
COPY . .

# use this port
EXPOSE 3000

ENTRYPOINT [ "npm" ]

# command to run to within container
CMD ["start"]

# give the client a couple minutes to load before viewing localhost:3000