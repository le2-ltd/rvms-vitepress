# Markdown 扩展示例

```mermaid
flowchart TD
  %% 顶层：用户端 / 后台服务 / 门店端
  subgraph User[客户/移动端]
    U1[浏览车辆/筛选]
    U2[登录/注册]
    U3[填写租期与取/还车门店]
    U4[提交订单]
    U5[到店取车]
    U6[用车/续租/异常]
    U7[还车]
    U8[评价/发票]
  end

  subgraph Services[后台服务]
    S1[身份与证照认证<br/>身份证/驾照OCR]
    S2[风控与授信]
    S3[库存与车辆调度]
    S4[订单服务]
    S5[支付与预授权]
    S6[通知/短信/站内信]
    S7[计费与结算]
    S8[CRM/营销]
    S9[理赔/违章处理]
  end

  subgraph Store[门店/运营端]
    M1[车辆准备/锁车]
    M2[交车验车/签合同]
    M3[还车验车/核价]
    M4[清洁/保养/维修]
  end

  %% 用户下单链路
  U1 --> U2 --> U3 --> U4
  U4 --> S1 --> S2
  S2 -- 通过 --> S5
  S2 -- 不通过/需补充资料 --> U4

  S5 -- 预授权/支付成功 --> S4
  S5 -- 失败 --> U4

  S4 --> S3
  S3 -- 锁定库存/分配车辆 --> M1

  %% 取车
  U5 --> M2 --> S4
  S4 -- 状态: 已取车 --> U6

  %% 在租期内事件
  U6 -- 正常用车/续租 --> S4
  U6 -- 事故/违章 --> S9 --> S7

  %% 还车与结算
  U7 --> M3 --> S7 --> S5
  S5 -- 扣款/退款(释放余款) --> U7
  S7 --> S4
  S4 -- 完成 --> U8

  %% 车辆回库
  M3 --> M4 --> S3

  %% 触达与营销
  S6 --> U2
  S8 --> U1

```

本页演示 VitePress 内置的部分 Markdown 扩展能力，便于在文档中插入流程图、代码高亮以及提示容器等元素。

```mermaid
flowchart TD
  Start --> Stop
```

```mermaid
graph LR
  A[开始] --> B{条件}
  B -- 是 --> C[结果 1]
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

## 代码高亮

VitePress 基于 [Shiki](https://github.com/shikijs/shiki) 提供丰富的代码高亮，并支持标记行号、行高亮等特性：

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

## 自定义提示容器

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

## 更多

想了解全部扩展语法，可参考官方文档的[Markdown 指南](https://vitepress.dev/guide/markdown)。
