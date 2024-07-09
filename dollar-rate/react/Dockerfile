FROM node:17-alpine

WORKDIR /dollar-rate/react/

COPY package.json /dollar-rate/react/

RUN npm install

RUN npm install react-router-dom

RUN npm install chart.js react-chartjs-2

RUN npm install @mui/material @emotion/react @emotion/styled @mui/x-charts

RUN npm install @mui/icons-material @mui/x-data-grid

RUN npm install axios

RUN npm install mathjs

RUN npm install --save-dev @testing-library/user-event

COPY . /dollar-rate/react/

CMD [ "npm", "start", "test", "host", "0.0.0.0", "port", "3000" ]
