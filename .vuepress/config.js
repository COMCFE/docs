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
      // "/api/saas/": getSaasSApiSider("SaaS品牌商移动端", "规范"),
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
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    ["@vuepress/back-to-top", true],
    ["@vuepress/notification", true]
  ]
};
// 链优品APP接口文档
function getLypinAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "user",
        "code",
        "goods",
        "poster",
        "consignees",
        "order",
        "base",
        "help",
        "message",
        "yz-auth",
        "wallet",
        "discounts",
        "ad",
        "application",
        "version",
        "task",
        "certification",
        "file",
        "share",
        "ore",
        "juhe",
        "bind-apps",
        "tbk",
        "project-goods",
        "withdrawal",
        "tbk-wallet",
        "tbk-member",
        "tbk-performance",
        "weiyi",
        "tbk-gift",
        "tbk-home",
        "hdk",
        "duomai"
      ]
    }
  ];
}

// 链优品后台接口文档
function getLypAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "upload",
        "goods",
        "goods-cate",
        "administrator",
        "roles",
        "currency",
        "discount",
        "sms",
        "system",
        "order",
        "goods_orders",
        "help",
        "task",
        "feedback",
        "ad",
        "express",
        "withdraw",
        "statistics",
        "message",
        "user",
        "poster",
        "special",
        "youzan",
        "merchant",
        "config",
        "item",
        "app-version",
        "certification",
        "ore",
        "recharge",
        "coupon",
        "token",
        "tbk-favorites",
        "tbk-member",
        "cash-withdrawal",
        "tbk-wallet",
        "tbk-cate",
        "tbk-gift",
        "tbk-gift-order",
        "tbk-column",
        "duomai"
      ]
    }
  ];
}

// 链优品商户接口文档
function getLypMerchantSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "merchant",
        "common",
        "login",
        "order",
        "wallet",
        "withdraw",
        "yzOrder"
      ]
    }
  ];
}

// web端 sidebar
function getWebSider(title1, introduction1, title2, introduction2) {
  return [
    {
      title: title1,
      collapsable: true,
      children: [["", introduction1], "pc-demo"]
    },
    {
      title: title2,
      collapsable: true,
      children: [["", introduction2], "h5-demo"]
    }
  ];
}

// Imeet APP接口文档
function getImeetAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "base",
        "user",
        "attachment",
        "code",
        "tag",
        "friend",
        "task",
        "dynamic",
        "ads",
        "collect",
        "shielding",
        "recommend",
        "count",
        "wallet",
        "report",
        "notice",
        "certification",
        "search",
        "group",
        "helper",
        "star",
        "about",
        "version",
        "plaza-task",
        "ore",
        "share-image",
        "config",
        "news",
        "bonus",
        "activity",
        "waithdrawal"
      ]
    }
  ];
}

// Imeet 后台接口文档
function getImeetAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "user",
        "tag-cate",
        "topic-tag",
        "user-tag",
        "ad",
        "admin",
        "authority",
        "certification",
        "login",
        "poster",
        "role",
        "version",
        "config"
      ]
    }
  ];
}

// Achat APP接口文档
function getAchatAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "certification",
        "code",
        "ore",
        "group",
        "withdrawal",
        "config",
        "xuansuan"
      ]
    }
  ];
}

// Achat admin接口文档
function getAchatAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "certification",
        "withdrawal",
        "config",
        "xianyu",
        "xuansuan"
      ]
    }
  ];
}

// 存链科技APP
function getSchainAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "conf",
        "upload",
        "user",
        "code",
        "task",
        "cer",
        "assets",
        "goods",
        "order",
        "market",
        "msg",
        "ore",
        "power",
        "version",
        "news",
        "share",
        "fil-wallet"
      ]
    }
  ];
}

// 存链科技Admin
function getSchainAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "goods",
        "order",
        "wallet",
        "admin",
        "login",
        "authority",
        "role",
        "certification",
        "ore",
        "config",
        "feedback",
        "verification-code",
        "message",
        "task",
        "user",
        "one-key",
        "withdraw",
        "agency",
        "version",
        "news",
        "news-cates",
        "sensitives",
        "share",
        "form",
        "fil-issue",
        "fil-with"
      ]
    }
  ];
}

// 科创科技APP
function getKcStoreAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "conf",
        "upload",
        "user",
        "code",
        "task",
        "shop",
        "cer",
        "assets",
        "goods",
        "address",
        "order",
        "market",
        "msg",
        "ore",
        "power",
        "version",
        "ad",
        "bind-apps"
      ]
    }
  ];
}

// 科创商城Admin
function getKcStoreAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "ore",
        "order",
        "goods",
        "user",
        "merchant",
        "config",
        "onekey",
        "ad",
        "version",
        "admin",
        "feedback",
        "code",
        "task",
        "image",
        "message",
        "certification",
        "authority",
        "role",
        "goods-cate"
      ]
    }
  ];
}

// 科创商城merchant
function getKcStoreMerchantSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "ad",
        "address",
        "assets",
        "cer",
        "code",
        "conf",
        "goods",
        "market",
        "msg",
        "order",
        "ore",
        "power",
        "shop",
        "task",
        "upload",
        "user",
        "version"
      ]
    }
  ];
}

// 火推 api
function getHtAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "conf",
        "upload",
        "user",
        "code",
        "cer",
        "assets",
        "msg",
        "version",
        "video",
        "like",
        "ad",
        "trsfemer"
      ]
    }
  ];
}

// 火推 Admin
function getHtAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "admin",
        "certification",
        "code",
        "config",
        "feedback",
        "notify",
        "version",
        "activity",
        "user",
        "video",
        "topic",
        "reward-item",
        "withdrawal",
        "ad",
        "user-role",
        "authority",
        "role"
      ]
    }
  ];
}

// 创业吧 api
function getCybAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "conf",
        "upload",
        "user",
        "code",
        "cer",
        "assets",
        "msg",
        "version",
        "bus",
        "node",
        "trade",
        "like",
        "video",
        "market",
        "task",
        "fil-wallet"
      ]
    }
  ];
}

// 创业吧 Admin
function getCybAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "admin",
        "bus",
        "certification",
        "code",
        "config",
        "feedback",
        "notify",
        "node",
        "version",
        "user",
        "withdrawal",
        "trade",
        "video",
        "reward-item",
        "order",
        "goods",
        "form",
        "agency",
        "goods",
        "task",
        "sensitives",
        "fil-issue",
        "fil-with"
      ]
    }
  ];
}

// 合众 api
function getHzAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "home",
        "ad",
        "fil-wallet",
        "wallet",
        "order"
      ]
    }
  ];
}

// 合众 Admin
function getHzAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [["", introduction], "config", "ad"]
    }
  ];
}

// 创业吧 api
function getMtAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "config",
        "user",
        "invite",
        "goods",
        "home",
        "news",
        "help",
        "ad",
        "coupon",
        "order",
        "wallet",
        "agency",
        "electricRecharge",
        "pool",
        "message"
      ]
    }
  ];
}

// mt admin
function getMtAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "goods",
        "order",
        "wallet",
        "admin",
        "login",
        "authority",
        "role",
        "config",
        "feedback",
        "verification-code",
        "message",
        "user",
        "withdraw",
        "agency",
        "version",
        "news",
        "news-cates",
        "sensitives",
        "share",
        "electric-recharges",
        "period",
        "helpCenter"
      ]
    }
  ];
}
// 海马
function getHashorseAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "credit",
        "config",
        "order"
      ]
    }
  ];
}
// 海马 Admin
function getHashorseAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [["", introduction], "config"]
    }
  ];
}
// 人人算力
function getHasheveryAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "config","category","goods","order","elec"
      ]
    }
  ];
}
// 人人算力 Admin
function getHasheveryAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [["", introduction], "config","category","goods","order"]
    }
  ];
}
// 标准模板
function getTemplateAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "home","user","ad","category","elec","config","equipment","goods","help","invite","market","message","news","order","wallet"
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
      children: [["", introduction], "config","category","goods","order"]
    }
  ];
}

// 甬力区
function getYlqAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "transferAccounts"
      ]
    }
  ];
}
// 甬力区 Admin
function getYlqAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "config","distributor","transferAccounts","report"
      ]
    }
  ];
}

// 蚁创科技
function getYckjAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "power"
      ]
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
        // "category",
        // "period",
        // "period_group",
        // "goods",
        // "certification",
        // "cny_withdrawal",
        // "config",
        // "transfer",
        // "users",
        // "withdrawal",
        // "ad",
        // "admin",
        // "authority",
        // "code",
        // "design",
        // "electric_order",
        // "help_center",
        // "login",
        // "notify",
        // "order",
        // "report_form",
        // "role",
        // "sales_log",
        // "sensitives",
        // "share",
        // "version",
        // "zone",
        // "feedback",
        // "home",
        // "market",
        // "new",
        // "new_cate",
        // "recharge_logs",
        // "tenant",
        // "message"
      ]
    }
  ];
}
// SaaS品牌商api
// function getSaasSApiSider(title, introduction) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         ["", introduction],
//         "order",
//         "electric_order",
//         "user",
//         "feedback",
//         "certification",
//         "ad",
//         "auth",
//         "goods",
//         "help",
//         "home",
//         "invite",
//         "market",
//         "transfer",
//         "verification_code",
//         "wallet",
//         "category",
//         "comment",
//         "config",
//         "message",
//         "new",
//         "withdrawal"
//       ]
//     }
//   ];
// }
