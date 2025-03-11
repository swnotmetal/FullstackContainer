
FROM node:20 as test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm ci

RUN npm run test

FROM node:20 as build

WORKDIR /usr/src/app

COPY --from=test /usr/src/app . 

RUN npm run build

ENV VITE_BACKEND_URL=http://localhost:3000/ 

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5000"]



