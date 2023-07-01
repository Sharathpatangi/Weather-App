FROM node

WORKDIR /app

COPY ./package.json ./package.json
COPY ./server.js ./server.js

RUN npm install  

EXPOSE 5000

CMD ["node","server.js"]