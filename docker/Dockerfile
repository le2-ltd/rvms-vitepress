ARG IMAGE_MIRROR
ARG IMAGE_PREFIX

FROM ${IMAGE_MIRROR:-${IMAGE_PREFIX}}node:alpine AS builder

ARG APK_REPOSITORY
ARG NPM_REGISTRY

RUN if [ -n "$APK_REPOSITORY" ]; then \
        sed -i \
            -e "s|https://dl-cdn.alpinelinux.org/alpine|$APK_REPOSITORY|g" \
            -e "s|http://dl-cdn.alpinelinux.org/alpine|$APK_REPOSITORY|g" \
            /etc/apk/repositories; \
    fi

RUN apk add --no-cache git ca-certificates;

RUN if [ -n "$NPM_REGISTRY" ]; then \
        npm config set registry "$NPM_REGISTRY"; \
    fi

WORKDIR /app

COPY package.json package-lock.json .npmrc ./

RUN --mount=type=cache,id=rvms-npm,target=/root/.npm \
    npm ci

COPY . .

RUN npm run docs:build

FROM ${IMAGE_MIRROR:-${IMAGE_PREFIX}}nginx:latest

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html
