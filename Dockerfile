FROM node:20.5.0-alpine

WORKDIR /usr/app

COPY ./app ./

RUN npm cache clean --force && npm install --force-rm

EXPOSE 3004 

CMD ["npm", "run", "start:dev"]

