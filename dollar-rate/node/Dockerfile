FROM node:lts-alpine

# ENV NODE_PORT=5000

WORKDIR /dollar-rate/nodejs/

COPY package.json /dollar-rate/nodejs/

RUN npm install

# RUN npm install express mongoose body-parser cors

# RUN npm install express mssql

RUN npm install mongodb

# RUN npm install express mongoose

RUN npm install express cors

RUN npm install node-cron 

RUN npm install axios

COPY . /dollar-rate/nodejs/

EXPOSE 8000

CMD [ "npm", "start" ]
