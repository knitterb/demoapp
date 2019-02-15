FROM node
WORKDIR /app
COPY server.js ./
COPY package*.json ./
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]