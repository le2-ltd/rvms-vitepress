
ARG IMAGE_EXT_PREFIX

FROM ${IMAGE_EXT_PREFIX}node-alpine AS builder

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

RUN pnpm ls

COPY . .

RUN pnpm run docs:build

# RUN du -sh /app/.vitepress/dist

ARG IMAGE_PREFIX

FROM ${IMAGE_PREFIX}nginx:latest

COPY --from=builder /app/.vitepress/dist /app