FROM node:alpine
COPY . /server
WORKDIR /server
RUN npm ci
EXPOSE 4000
CMD [ "npm", "start" ]