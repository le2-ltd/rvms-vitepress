import { defineConfig } from "vitepress";

import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  srcDir: "docs",
  title: "智行租赁",
  description: "智行租赁管理系统使用手册",
  themeConfig: {
    search: {
      provider: "local",
    },
    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "演示站点", link: "https://h5-demo.rc1.le2.ltd/" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // nav: [
    //   { text: "首页", link: "/" },
    //   { text: "GitHub", link: "https://github.com/your-repo" },
    // ],
    sidebar: [
      {
        text: "总体介绍",
        collapsible: false,
        items: [
          {
            text: "功能一览",
            link: "/overview/what-features",
          },
          {
            text: "特色功能",
            link: "/overview/featured-functions",
          },
          {
            text: "版本介绍",
            link: "/overview/version-introduction",
          },
        ],
      },

      {
        text: "基本操作",
        collapsible: false,
        items: [
          {
            text: "新公司配置",
            link: "/basic-workflow/new-company-setup",
          },
          {
            text: "租车流程",
            link: "/basic-workflow/rental-process",
          },
          {
            text: "退车流程",
            link: "/basic-workflow/return-process",
          },
        ],
      },

      {
        text: "详细操作",
        collapsible: true,
        items: [
          // { text: "配置管理", link: "/config/" },
          // { text: "员工管理", link: "/permission/" },
          // { text: "数据统计", link: "/statistics/" },
          // { text: "车辆管理", link: "/permission/role" },
          // { text: "客户管理", link: "/permission/admin" },
          // { text: "财务管理", link: "/finance/" },
          // { text: "风控管理", link: "/risk/" },
          // { text: "消息管理", link: "/delivery/" },
          // { text: "租客端微信小程序", link: "/customer-app/" },
        ],
      },

      // {
      //   text: "车辆管理",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/vehicle/" },
      //     { text: "车辆信息录入", link: "/vehicle/entry" },
      //     { text: "完整记录", link: "/vehicle/records" },
      //     { text: "租车退车流程管理", link: "/vehicle/rent-flow" },
      //     { text: "维修管理", link: "/vehicle/maintenance" },
      //     { text: "保养管理", link: "/vehicle/upkeep" },
      //     { text: "年检管理", link: "/vehicle/inspection" },
      //     { text: "保险管理", link: "/vehicle/insurance" },
      //     { text: "事故管理", link: "/vehicle/accident" },
      //   ],
      // },
      // {
      //   text: "客户管理",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/customer/" },
      //     { text: "客户信息管理", link: "/customer/info" },
      //     { text: "司机租车全记录", link: "/customer/driver-records" },
      //   ],
      // },
      // {
      //   text: "销售管理合同管理",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/sales-contract/" },
      //     { text: "订单合同管理", link: "/sales-contract/order-contract" },
      //     { text: "付款计划管理", link: "/sales-contract/payment-plan" },
      //   ],
      // },
      // {
      //   text: "财务管理",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/finance/" },
      //     { text: "收付款账务管理", link: "/finance/account" },
      //     { text: "收付款类型管理", link: "/finance/types" },
      //     { text: "收、退押金收租金", link: "/finance/deposits" },
      //   ],
      // },
      // {
      //   text: "风控管理",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/risk/" },
      //     { text: "风险一览表", link: "/risk/overview" },
      //   ],
      // },
      // {
      //   text: "租客端微信小程序",
      //   collapsible: true,
      //   items: [
      //     { text: "模块概览", link: "/weapp/" },
      //     { text: "车辆管理", link: "/weapp/weapp-vehicle" },
      //     { text: "销售管理", link: "/weapp/weapp-sales" },
      //     { text: "财务管理", link: "/weapp/weapp-finance" },
      //     { text: "风控管理", link: "/weapp/weapp-risk" },
      //   ],
      // },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],

    footer: {
      message:
        '<a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备2024116916号-3</a>',
      // 动态年份
      copyright: `Copyright © 2021-${new Date().getFullYear()} Le2.ltd 版权所有`,
    },
  },

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },

  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ["mermaid"], // 只预构建 mermaid
    },
    ssr: {
      noExternal: ["mermaid"],
    },
    server: {
      port: 3000, // 你想要的端口号
      host: "0.0.0.0", // 如果需要对局域网开放，也可以加上 host
    },
  },
});
