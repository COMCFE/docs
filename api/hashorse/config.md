# 获取启动配置

## 获取配置记录

**方式**

`GET`

**参数**

无

**路径**

`api/config`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "invite": {
            "url": "http://resource.immeet.com/聚秀/register.html",
            "mode": "邀请方式",
            "rule": "邀请说明",
            "power": "100"
        },
        "order:switch": {
            "cny": "off",
            "usdt": "on"
        },
        "erc:withdrawal": {
            "fee": "10",
            "min": "30",
            "limit": "1000",
            "bind_explain": "",
            "drawal_explain": ""
        },
        "contact": {
            "qq": "111111",
            "wechat": "111111"
        },
        "mining": {
            "index": 0.21,  // 算力指数
            "total_power": 4562, // 全网总算力
            "today_mining": 235.1 // 今日产矿
        },
        "cdn_domain": "http://file.ebo5ns.cn",
        "purchase_protocol": "http://www.ebo5ns.cn/purchase/protocol",
        "hosting_protocol": "http://www.ebo5ns.cn/hosting/protocol",
        "register_protocol": "http://www.ebo5ns.cn/register/protocol"
    }
}
```
::: tip

mining 为算力商城头部数据