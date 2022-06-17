FROM node:12.14-alpine
WORKDIR /app

COPY package*json ./
RUN npm install --force

COPY . .
CMD ["npm", "start"]