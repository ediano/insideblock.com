FROM ruby:2.6-alpine

WORKDIR /app

COPY Gemfile* ./

RUN apk update \
    && apk add build-base git \
    && gem install bundler jekyll \
    && bundle install

EXPOSE 4000