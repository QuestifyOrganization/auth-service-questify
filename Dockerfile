FROM node:20.5.0-alpine

WORKDIR /usr/app

COPY ./app ./

RUN npm install

EXPOSE 3004 

CMD ["npm", "run", "start:dev"]

