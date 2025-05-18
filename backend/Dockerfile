FROM golang:1.21-alpine AS builder

WORKDIR /app

COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ ./
RUN go build -o backend-app .

FROM alpine:latest

RUN adduser -D -u 1001 appuser
USER appuser

WORKDIR /app
COPY --from=builder /app/backend-app .

EXPOSE 80
CMD ["./backend-app"]