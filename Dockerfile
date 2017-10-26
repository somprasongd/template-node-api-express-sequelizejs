FROM node:8.8-alpine
LABEL maintainer "somprasong.damyos@gmail.com"

EXPOSE 3001

WORKDIR /node-app
COPY ./ /node-app
RUN npm install

# USER node

CMD ["npm", "start"]
