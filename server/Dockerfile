# Dockerfiles allow a static process to occur when deploying, to ensure each step is followed as it should per each project/machine

# use this language in this container, install this if not already
FROM python:3 

# create a directory within the container
WORKDIR /app

# create an environment variable 
ENV FLASK_APP = app.py

# this allows you to change the environment from production to development
ENV FLASK_ENV = development

# copy the requirements file to the container directory 
COPY ./requirements.txt .

# run means it runs the linux command, then -r is to recursively install everything in requirements.txt to the app dir.
RUN pip install -r requirements.txt

# copy everything in this directory to app 
COPY . .

# the command used to run this file
CMD [ "python", "app.py" ]

# when making the dockerfile, be sure to delete the image and the container after every itteration. ie, dont have mutliple containers of the same image of different versions.
# docker images, docker rm image_id, docker rmi image_name

# to put image in container run, . is all in this dir 
# docker build -t image_name . 

# in order to see it on local machine run this (doesnt update with new info after page reload)
# -p is port
# syntax: docker run -p local_machine_port:container_port image_to_run

# docker run -p 8080:5000 pythonapp



# to run and continuously update the container on the page reload: 
# -v is volumes (docker volumes) -- this allows the above statement
# syntax: docker run -p local_machine_port:container_port -v $(pwd):/workDir image_to_run

# docker run -p 8080:5000 -v $(pwd):/app pythonapp
