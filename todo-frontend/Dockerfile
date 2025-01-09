FROM node:20 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

ENV VITE_BACKEND_URL=http://localhost:3000/

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5000"]