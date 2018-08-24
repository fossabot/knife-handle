FROM node:alpine
COPY . /server
WORKDIR /server
ENV NODE_ENV=production
RUN npm ci
EXPOSE 4000
CMD [ "npm", "start" ]