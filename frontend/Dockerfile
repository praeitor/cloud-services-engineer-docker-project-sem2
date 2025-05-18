FROM node:20-alpine AS builder

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk update && \
    apk upgrade && \
    apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
ENV VUE_APP_PUBLIC_PATH=/
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80