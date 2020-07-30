FROM node:12.6.0-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:front
EXPOSE 8080
CMD ["node", "server/index.js"]