FROM node:22.0-alpine

# set working directory
WORKDIR ./docu-app

# add _/usr/src/app/node_modules/.bin_ to $PATH
ENV PATH /docu-app/node_modules/.bin:$PATH

# install app dependencies
COPY . .

RUN yarn install --production


