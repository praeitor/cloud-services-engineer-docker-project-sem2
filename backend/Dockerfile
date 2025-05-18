FROM golang:1.21-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o backend-app ./cmd/api

FROM alpine:latest

RUN apk add --no-cache curl \
    && adduser -D -u 1001 appuser
USER appuser

WORKDIR /app
COPY --from=builder /app/backend-app .

EXPOSE 80
CMD ["./backend-app"]