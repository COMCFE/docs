# 启动配置项


## 获取 启动配置项

`api/configs`

**请求方式**

`GET`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "invite": {
            "url": "http://www.baidu.com",
            "rule": "邀请说明",
            "f_power": "100",
            "s_power": "100"
        },
        "pay:switch": {
            "bank": "on",
            "usdt": "on",
            "alipay": "on",
            "wechat": "on"
        },
        "withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "btc_fee": "10",
            "erc_fee": "10",
            "fil_fee": "10",
            "usdt_fee": "10",
            "user_min": "100",
            "user_day_limit": "1000"
        },
        "about": {
            "about": "关于"
        },
        "version": 0,
        "account:receivable": {
            "bank": {
                "bank": "中国工商银行",
                "code_desc": "这是附言码说明",
                "account_name": "陕西存链科技数据有限公司",
                "account_number": "3700xxxxxxx"
            },
            "alipay": {
                "name": "账户名称",
                "acount": "账户",
                "qrcode": "http://xxxxxx"
            },
            "wechat": {
                "qrcode": "http://xxxxx"
            }
        },
        "contact": {
            "qq": "qq111",
            "wechat": "wechat"
        },
        "cdn_domain": "http://hashevery.cellike.cn",
        "purchase_protocol": "http://hashevery.cellike.cn/purchase/protocol",
        "hosting_protocol": "http://hashevery.cellike.cn/hosting/protocol"
    }
}
```
::: tip
支付方式调整：新增微信收款码，支付宝改为收款码收款
:::

