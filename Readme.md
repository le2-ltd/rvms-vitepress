## 开发与构建

项目统一使用 npm，提交 `package-lock.json` 以固定依赖版本。

```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

也可以使用 `make run-install`、`make run-dev`、`make run-build`。
`make run-install` 会读取环境配置中的 `NPM_REGISTRY`；添加或升级依赖使用
`npm install`，并同时提交 `package.json` 和 `package-lock.json` 的变更。

Docker 使用 `docker/Dockerfile`，构建上下文为项目根目录，
通过 `npm ci` 安装构建依赖，
生成的 `.vitepress/dist` 由 Nginx 提供服务。
容器部署统一由外层 `docker-compose/compose-L2/rvms` 管理。

在项目根目录手动构建镜像：

```sh
docker build -f docker/Dockerfile -t rvms-vitepress .
```

VitePress 使用 `next` 标签，实际安装版本由 `package-lock.json` 固定；
需要跟进 `next` 版本时运行 `npm install vitepress@next --save-dev` 并提交锁文件。
现有 `vitepress-plugin-mermaid@2.0.17` 的 peer 声明仅接受 VitePress 1.x，
因此项目 `.npmrc` 设置了 `legacy-peer-deps=true`，以保留当前版本组合。
调整这两个包的版本时需要重新确认兼容性并运行构建。
支持 `allowScripts` 的 npm 版本会读取 `package.json` 中的安装脚本许可：
允许 `@parcel/watcher` 和 `esbuild`，禁用可选依赖 `fsevents` 的安装脚本。

## 参考资料

mermaid:
https://mermaid.js.org/intro/

VitePress Plugin Mermaid
https://emersonbottero.github.io/vitepress-plugin-mermaid/

https://vitepress.dev/zh/
