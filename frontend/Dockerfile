FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production \
    VUE_APP_API_URL=/api \
    NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html/momo-store

EXPOSE 8081