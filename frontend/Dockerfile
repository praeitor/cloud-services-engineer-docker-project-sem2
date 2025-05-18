FROM node:18-alpine AS builder

RUN apk update && \
    apk upgrade && \
    apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production
ENV VUE_APP_API_URL=/api

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html/momo-store
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8081