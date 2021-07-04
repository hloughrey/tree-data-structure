FROM node:10.16-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules

RUN npx yarn --prod

EXPOSE 4000
CMD ["npm", "start"]