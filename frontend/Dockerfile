FROM node:14-alpine as build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
RUN npm install axios
RUN npm install react-router-dom --save
RUN npm install bootstrap@latest
RUN npm install react-bootstrap
RUN npm install react-icons
RUN npm install react-html-parser --force
RUN npm install buffer --force
COPY . .
CMD ["npm", "run", "start"]
