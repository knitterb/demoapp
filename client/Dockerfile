FROM node
WORKDIR /app
COPY client.js ./
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["node", "client.js"]