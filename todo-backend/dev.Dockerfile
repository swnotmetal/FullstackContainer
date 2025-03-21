FROM node:20

WORKDIR  /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start", "Run", "the", "app", "in", "dev", "mode"]