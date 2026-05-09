import { defineConfig } from "vitepress";
import { existsSync, readFileSync } from "node:fs";

import { MermaidMarkdown, MermaidPlugin } from "vitepress-plugin-mermaid";

const siteUrl = "https://rvms.le2.fun";
const siteName = "智行租赁";
const defaultDescription =
  "智行租赁是面向汽车租赁公司的数字化运营系统，统一管理车辆、司机、客户、订单、合同、财务、风控、消息提醒与图片留痕，帮助门店、车管、财务和管理层高效协同。";
const siteKeywords =
  "汽车租赁系统,租车管理系统,汽车租赁管理软件,车队管理系统,租赁订单管理,车辆管理系统,租车财务管理,违章年检管理,智行租赁";
const noindexPages = new Set(["api-examples.md", "markdown-examples.md"]);

function getPagePath(relativePath) {
  if (!relativePath || relativePath === "index.md") return "/";
  return `/${relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, ".html")}`;
}

function readEnvValue(mode, name) {
  const envPath = new URL(`../.env.${mode}`, import.meta.url);

  if (!existsSync(envPath)) return "";

  const line = readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((item) => item.trim().startsWith(`${name}=`));

  if (!line) return "";

  return line
    .slice(line.indexOf("=") + 1)
    .trim()
    .replace(/^['"]|['"]$/g, "");
}

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
  const demoUrl = process.env.VITE_DEMO_URL || readEnvValue(mode, "VITE_DEMO_URL");

  return {
  lang: "zh-CN",
  markdown: {
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  srcDir: "docs",
  title: siteName,
  titleTemplate: `:title | ${siteName}`,
  description: defaultDescription,
  head: [
    ["meta", { name: "keywords", content: siteKeywords }],
    ["meta", { name: "author", content: "成都雷耳兔科技有限公司" }],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#111827",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
  ],
  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.filter(({ url }) => {
        return (
          !url.endsWith("api-examples.html") &&
          !url.endsWith("markdown-examples.html")
        );
      });
    },
  },
  transformHead({ pageData, title, description }) {
    const pageUrl = `${siteUrl}${getPagePath(pageData.relativePath)}`;
    const robots = noindexPages.has(pageData.relativePath)
      ? "noindex,nofollow"
      : "index,follow";
    const pageTitle =
      title || `${siteName} - 懂业务的汽车租赁数字化运营中枢`;
    const pageDescription = description || defaultDescription;

    return [
      ["link", { rel: "canonical", href: pageUrl }],
      ["meta", { name: "robots", content: robots }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:locale", content: "zh_CN" }],
      ["meta", { property: "og:site_name", content: siteName }],
      ["meta", { property: "og:title", content: pageTitle }],
      ["meta", { property: "og:description", content: pageDescription }],
      ["meta", { property: "og:url", content: pageUrl }],
      ["meta", { property: "og:image", content: `${siteUrl}/logo.png` }],
      ["meta", { name: "twitter:card", content: "summary" }],
      ["meta", { name: "twitter:title", content: pageTitle }],
      ["meta", { name: "twitter:description", content: pageDescription }],
      ["meta", { name: "twitter:image", content: `${siteUrl}/logo.png` }],
    ];
  },
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
      { text: "演示站点", link: demoUrl },
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
          // {
          //   text: "版本介绍",
          //   link: "/overview/version-introduction",
          // },
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
          {
            text: "换车",
            link: "/basic-workflow/car-change",
          },
          {
            text: "续租",
            link: "/basic-workflow/renewal",
          },
          {
            text: "临时换车",
            link: "/basic-workflow/tmp-replace",
          },
          {
            text: "违章转移",
            link: "/basic-workflow/violation-transfer",
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
    define: {
      "import.meta.env.VITE_DEMO_URL": JSON.stringify(demoUrl),
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ["mermaid"], // 只预构建 mermaid
    },
    ssr: {
      noExternal: ["mermaid"],
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    server: {
      port: 3000, // 你想要的端口号
      host: "0.0.0.0", // 如果需要对局域网开放，也可以加上 host
    },
  },
  };
});
