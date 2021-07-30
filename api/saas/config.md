# 启动配置项

## 列表

#### 接口URL
> {{url}}/cate

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "invite": {
            "rule": "邀请说明",
            "url_rule": "邀请链接说明",
            "invite_url": "foo.saas.me/register"
        },
        // 支付开关
        "pay_switch": {
            "bank": "on",
            "usdt": "on",
            "alipay": "off",
            "wechat": "off"
        },
        "about": "关于我们",
        "version": 1,
        "account_receivable": {
            "bank": {
                "bank": "开户行",
                "code_desc": "这是附言码说明",
                "account_name": "开户名",
                "account_number": "开户号"
            }
        },
        "contact": {
            "qq": "qq111",
            "wechat": "wechat"
        },
        "electricity": {
            "desc": "最低需要预付2周电费",
            // 全年电费
            "year": "0.36",
            "limit": "1000",
            // 全年显卡电费
            "gpu_year": "0.42",
            "end_month": "10",
            // 枯水电价
            "low_water": "0.38",
            // 沣水电价
            "full_water": "0.23",
            "start_month": "6"
        },
        "fil_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "fil_fee": "10",
            "user_min": "100",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "btc_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "btc_fee": "10",
            "user_min": "100",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "eth_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "erc_fee": "10",
            "user_min": "100",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "usdt_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "user_min": "100",
            "usdt_erc_fee": "0",
            "usdt_trx_fee": "0",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "xch_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "xch_fee": "0",
            "user_min": "100",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "cny_withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "cny_fee": "0",
            "user_min": "100",
            "user_day_limit": "1000",
            "terrace_day_limit": "10000"
        },
        "btc_transfer": {
            "instr": "转账说明",
            "switch": "on",
            "btc_fee": 5,
            "user_min": "10",
            "user_day_limit": "100"
        },
        "fil_transfer": {
            "instr": "说明",
            "switch": "on",
            "fil_fee": "1",
            "user_min": "10",
            "user_day_limit": "100"
        },
        "eth_transfer": {
            "instr": "转账说明",
            "switch": "on",
            "eth_fee": 5,
            "user_min": "10",
            "user_day_limit": "100"
        },
        "usdt_transfer": {
            "instr": "转账说明",
            "switch": "on",
            "user_min": "10",
            "usdt_erc_fee": "0",
            "usdt_trx_fee": "0",
            "user_day_limit": "100"
        },
        "xch_transfer": {
            "instr": "转账说明",
            "switch": "on",
            "xch_fee": 5,
            "user_min": "10",
            "user_day_limit": "100"
        },
        "cny_transfer": {
            "instr": "转账说明",
            "switch": "on",
            "cny_fee": "5",
            "user_min": "100",
            "user_day_limit": "1000"
        },
        // 税点
        "tax": {
            // 现金
            "bank": "1",
            // usdt
            "usdt": "1"
        },
        // 设计风格
        "design_style": {
            "app_name": "风格名称",
            "rgb_color": "5847e1",
            "start_logo": "启动logo.png",
            "inside_logo": "外部logo.png",
            "invite_logo": "邀请logo.png",
            "template_id": "模板id"
        },
        "cdn_domain": null,
        "purchase_protocol": "http://localhost/purchase/protocol",
        "hosting_protocol": "http://localhost/hosting/protocol"
    }
}
```