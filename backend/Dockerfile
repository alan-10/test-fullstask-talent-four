FROM node:10-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# RUN npm run build

# Start the server using the production build
CMD [ "node", "src/app.js" ]