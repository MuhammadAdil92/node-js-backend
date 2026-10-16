# Build stage
FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Production stage
FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/build ./build
COPY --from=builder /app/register-aliases.js ./register-aliases.js
COPY --from=builder /app/environments ./environments

EXPOSE 8080

ENV NODE_ENV=production

CMD ["node", "-r", "./register-aliases.js", "./build/index.js"]