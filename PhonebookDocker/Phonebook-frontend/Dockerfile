FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN npm run build

ENV VITE_BACKEND_URL=/api/

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5000"]
