FROM node AS builder

WORKDIR /run/app/pdf-to-text

COPY package.json .

RUN mkdir node_modules

RUN npm i

FROM node

WORKDIR /run/app/pdf-to-text

COPY --from=builder /run/app/pdf-to-text/node_modules ./node_modules

COPY src/ ./src

CMD ["node", "src/server.js"]

