FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 3000

# 更新并安装 curl 和其他必要的工具
RUN apk update && \
    apk add --no-cache bash curl && \
    npm install

CMD ["node", "index.js"]
