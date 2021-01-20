# 配置管理


## 获取/修改 支付开关

`admin/configs/pay/switch`

**请求方式**

`GET` `PUT`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| switch | array |  无  |  是  | 支付开关配置 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 2,
        "key": "pay:switch",
        "value": {
            "bank": "on",
            "usdt": "on",
            "alipay": "on",
            "wechat": "on"
        },
        "created_at": "2021-01-19 17:19:01",
        "updated_at": "2021-01-19 17:19:01"
    }
}
```
## 修改提现配置

`admin/configs/withdrawal`

**请求方式**

`PUT`

**请求参数**

|        名称        |  类型  | 默认 | 必须 |              说明               |
| :----------------: | :----: | :--: | :--: | :-----------------------------: |
|       instr        | string |  无  |  是  |            提现说明             |
|      usdt_fee       | string |  无  |  是  |       usdt 提现手续费(个)        |
|      fil_fee       | string |  无  |  是  |       fil 提现手续费(个)       |
|      btc_fee       | string |  无  |  是  |       btc 提现手续费(个)       |
|      erc_fee       | string |  无  |  是  |       erc 提现手续费(个)        |
|       switch       | string |  无  |  是  |    提现开关 on-开启 off-关闭    |
|      user_min      | string |  无  |  是  |    用户最低提现额度 单位(元)    |
|   user_day_limit   | string |  无  |  是  |     用户提现日上限 单位(元)     |

**返回体**

```json
{
  "msg": "修改成功",
  "code": 0,
  "data": null
}
```
## 修改收款账户信息

`admin/configs/account/receivable`

**请求方式**

`PUT`

**请求参数**

|      名称      |  类型  | 默认 | 必须 |    说明    |
| :------------: | :----: | :--: | :--: | :--------: |
|  account_name  | string |  无  |  是  |   开户名   |
|      bank      | string |  无  |  是  |   开户行   |
| account_number | string |  无  |  是  |   开户号   |
|   code_desc    | string |  无  |  是  | 附言码说明 |
|   alipay_account    | string |  无  |  是  | 支付宝账号 |
|   alipay_name    | string |  无  |  是  | 支付宝账号名称 |
|   alipay_qrcode    | string |  无  |  是  | 支付宝收款码图片地址 |
|   wechat_qrcode    | string |  无  |  是  | 微信收款码图片地址 |

**返回体**

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "id": 10,
        "key": "account:receivable",
        "value": {
            "bank": {
                "account_name": "银行名称",
                "bank": "开户行",
                "account_number": "卡号",
                "code_desc": "附言码说明"
            },
            "alipay": {
                "acount": "支付宝账号",
                "name": "支付宝账户名称",
                "qrcode": "http://xxxxx"
            },
            "wechat": {
                "qrcode": "http://xxxxx"
            }
        },
        "created_at": "2021-01-19 17:19:01",
        "updated_at": "2021-01-20 10:37:24"
    }
}
```