ifneq (,$(wildcard .env))
include .env
endif

APP_ENV_RESOLVED := $(or $(strip $(shell printenv APP_ENV)),$(strip $(APP_ENV)),production)
APP_ENV_ENV_FILE := .env.$(APP_ENV_RESOLVED)
ifneq (,$(wildcard $(APP_ENV_ENV_FILE)))
include $(APP_ENV_ENV_FILE)
endif

export

COMPOSE_ENV_FILES := --env-file .env $(if $(wildcard $(APP_ENV_ENV_FILE)),--env-file $(APP_ENV_ENV_FILE))
DOCKER_COMPOSE := docker compose $(COMPOSE_ENV_FILES)

run-compose:
	${DOCKER_COMPOSE} down
	${DOCKER_COMPOSE} build
	${DOCKER_COMPOSE} up -d

run-install:
	if [ -n "$$NPM_REGISTRY" ]; then npm config set registry "$$NPM_REGISTRY";npm config get registry; fi
	if command -v pnpm >/dev/null 2>&1; then pnpm --version; else npm install -g pnpm; fi
	pnpm install

run-env:
	env

run-dev:
	pnpm run docs:dev

run-build:
	pnpm run docs:build