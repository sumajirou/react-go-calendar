FROM golang:1.14.0

RUN go get github.com/labstack/echo/...

WORKDIR /app
COPY . /app

CMD ["go", "run", "main.go"]
