module.exports = {
  title: "Docs",
  base: "/docs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Docs",
      description: "ChainOne 接口文档"
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "COMCFE/docs",
    nav: require("./nav"),
    lastUpdated: "上次更新",
    searchMaxSuggestions: 10,
    sidebar: {
      // 链优品
      // "/api/lianyoupin/": getLypinAppSider("移动端", "规范"),
      // "/admin/lianyoupin/": getLypAdminSider("后台管理", "说明"),
      // "/merchant/": getLypMerchantSider("商户管理", "说明"),
      // Imeet
      // "/api/imeet/": getImeetAppSider("移动端", "规范"),
      // "/admin/imeet/": getImeetAdminSider("后台管理", "说明"),
      // AChat
      // "/api/achat/": getAchatAppSider("移动端", "规范"),
      // "/admin/achat/": getAchatAdminSider("后台管理", "说明"),
      // Schain
      // "/api/schain/": getSchainAppSider("移动端", "规范"),
      // "/admin/schain/": getSchainAdminSider("后台管理", "说明"),
      // 科创链
      // "/api/kcstore/": getKcStoreAppSider("移动端", "规范"),
      // "/admin/kcstore/": getKcStoreAdminSider("后台管理", "规范"),
      // "/merchant/kcstore/": getKcStoreMerchantSider("商户管理", "规范"),
      // 火推
      // "/api/ht/": getHtAppSider("移动端", "规范"),
      // "/admin/ht/": getHtAdminSider("后台管理", "说明"),
      // 创业吧
      // "/api/cyb/": getCybAppSider("移动端", "规范"),
      // "/admin/cyb/": getCybAdminSider("后台管理", "说明"),
      // 创业吧
      // "/api/mt/": getMtAppSider("移动端", "规范"),
      // "/admin/mt/": getMtAdminSider("后台管理", "规范"),
      // 合众
      // "/api/hz/": getHzAppSider("移动端", "规范"),
      // "/admin/hz/": getHzAdminSider("后台管理", "说明"),
      // 海马
      // "/api/hashorse/": getHashorseAppSider("移动端", "规范"),
      // "/admin/hashorse/": getHashorseAdminSider("后台管理", "说明"),
      // 人人算力
      // "/api/hashevery/": getHasheveryAppSider("移动端", "规范"),
      // "/admin/hashevery/": getHasheveryAdminSider("后台管理", "说明"),
      // 标准模板
      //"/api/template/": getTemplateAppSider("移动端", "规范"),
      //"/admin/template/": getTemplateAdminSider("后台管理", "说明"),
      // 甬力区
      // "/api/ylq/": getYlqAppSider("移动端", "规范"),
      // "/admin/ylq/": getYlqAdminSider("后台管理", "说明"),
      // 蚁创科技
      // "/api/yckj/": getYckjAppSider("移动端", "规范"),
      //saas管理后台
      "/admin/saas/": getSaasSAdminSider("SaaS品牌商管理后台", "规范"),
      "/api/saas/": getSaasSApiSider("SaaS品牌商移动端", "规范")
    }
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locales(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    ["@vuepress/back-to-top", true],
    ["@vuepress/notification", true]
  ]
};

// 标准模板
function getTemplateAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "home",
        "user",
        "ad",
        "category",
        "elec",
        "config",
        "equipment",
        "goods",
        "help",
        "invite",
        "market",
        "message",
        "news",
        "order",
        "wallet"
      ]
    }
  ];
}
// 标准模板 Admin
function getTemplateAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [["", introduction], "config", "category", "goods", "order"]
    }
  ];
}

// SaaS品牌商管理后台
function getSaasSAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "spec",
        "category",
        "period",
        "period_group",
        "goods",
        "certification",
        "cny_withdrawal",
        "config",
        "transfer",
        "users",
        "withdrawal",
        "ad",
        "admin",
        "authority",
        "code",
        "design",
        "electric_order",
        "help_center",
        "login",
        "notify",
        "order",
        "report_form",
        "role",
        "sales_log",
        "sensitives",
        "share",
        "version",
        "zone",
        "feedback",
        "home",
        "market",
        "new",
        "new_cate",
        "recharge_logs",
        "tenant",
        "message"
      ]
    }
  ];
}
// SaaS品牌商api
function getSaasSApiSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "order",
        "electric_order",
        "user",
        "feedback",
        "certification",
        "ad",
        "auth",
        "goods",
        "help",
        "home",
        "invite",
        "market",
        "transfer",
        "verification_code",
        "wallet",
        "category",
        "comment",
        "config",
        "message",
        "new",
        "withdrawal"
      ]
    }
  ];
}
