
run-dev:
	npm config set registry https://registry.npmmirror.com
	pnpm install
	pnpm run docs:dev
