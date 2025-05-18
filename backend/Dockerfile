FROM golang:1.21-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -ldflags="-w -s" -o backend-app ./cmd/api

FROM alpine:latest

RUN apk add --no-cache \
    && addgroup -g 1001 -S appgroup \
    && adduser -u 1001 -S appuser -G appgroup

USER appuser

WORKDIR /app
COPY --from=builder /app/backend-app .

EXPOSE 8081

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=5 \
  CMD curl -f http://localhost:8081/health || exit 1

CMD ["./backend-app"]