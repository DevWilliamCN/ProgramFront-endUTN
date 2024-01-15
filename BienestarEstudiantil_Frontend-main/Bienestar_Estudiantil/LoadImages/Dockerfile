FROM node:latest
LABEL authors="jruiz"

RUN mkdir -p /apps/loadimages
WORKDIR /apps/loadimages

COPY package.json /apps/loadimages/
RUN npm i dotenv express mysql2
RUN npm i @babel/core @babel/node @babel/preset-env @babel/cli morgan nodemon -D
COPY . /apps/loadimages/

EXPOSE 3000
CMD ["npm", "run", "dev"]