---
outline: deep
---

# Runtime API 示例

本页演示 VitePress 在运行时可调用的一些常用 API，帮助你在 Markdown 与 Vue 组件中获取站点级数据。

其中最核心的 `useData()` API 可以读取当前页面的 `site`、`theme`、`page` 以及 `frontmatter`，并可同时在 `.md` 与 `.vue` 内使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## 更多

如需了解更多 API，请查阅官方文档的[完整运行时 API 列表](https://vitepress.dev/reference/runtime-api#usedata)。
