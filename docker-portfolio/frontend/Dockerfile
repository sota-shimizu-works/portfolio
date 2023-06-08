FROM node:16.15.0-alpine

WORKDIR /usr/src/app

RUN apk upgrade --no-cache && \
    apk add --update --no-cache \
    postgresql-client curl git