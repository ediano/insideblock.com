FROM node:lts-alpine

WORKDIR /app

RUN apk update && apk add git bash \
    && npm i -g vercel

EXPOSE 4000