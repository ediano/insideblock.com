FROM ruby:2.6-alpine

WORKDIR /app

RUN apk update \
    && apk add build-base git \
    && gem install bundler jekyll

EXPOSE 4000