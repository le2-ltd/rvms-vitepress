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
	npm config set registry https://registry.npmmirror.com
	npm install -g pnpm
	pnpm install


run-dev:
	pnpm run docs:dev
