FROM node:20

WORKDIR C:\Users\Administrator\app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node" , "index.js"]