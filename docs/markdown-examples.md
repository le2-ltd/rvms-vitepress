# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

```mermaid
flowchart TD
  Start --> Stop
```

```mermaid
graph LR
  A[开始] --> B{条件}
  B -- 是 --> C[结果 1xxxy]
  B -- 否 --> D[结果 2]

```

```mermaid
sequenceDiagram
    autonumber
    participant 处理者
    participant Redis

    %% 从队列 jobs 中阻塞弹出一条消息
    处理者->>Redis: BRPOP jobs 0
    Redis-->>处理者: 返回 <消费对象>

    Note over 处理者: 处理消费对象

    %% 将结果推入队列 results
    处理者->>Redis: LPUSH results <处理结果>
    Redis-->>处理者: OK


```

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
