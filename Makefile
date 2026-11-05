ifneq (,$(wildcard .env))
include .env
endif

APP_ENV_RESOLVED := $(or $(strip $(shell printenv APP_ENV)),$(strip $(APP_ENV)),production)
APP_ENV_ENV_FILE := .env.$(APP_ENV_RESOLVED)
ifneq (,$(wildcard $(APP_ENV_ENV_FILE)))
include $(APP_ENV_ENV_FILE)
endif

export

run-install:
	if [ -n "$$NPM_REGISTRY" ]; then npm ci --registry="$$NPM_REGISTRY"; else npm ci; fi

run-env:
	env

run-dev:
	npm run docs:dev

run-build:
	npm run docs:build
