# 配置管理

## 邀请-详情

#### 接口URL
> {{url}}/configs/invite

#### 请求方式
> GET

#### 成功响应示例

```json

```
## 邀请-修改

#### 接口URL
> {{url}}/configs/invite

#### 请求方式
> PUT

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| url_rule | string |  无  |  是  | 邀请链接说明 |
|   rule   | string |  无  |  是  |   邀请说明   |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## USDT币价-详情

#### 接口URL
> {{url}}/configs/usdt/price

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 9,
        "key": "usdt_to_cny",
        "value": "11",
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 09:30:41"
    }
}
```
## USDT币价-修改

#### 接口URL
> {{url}}/configs/usdt/price

#### 请求方式
> POST

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| price | int |  无  |  是  | 币价 |
#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "id": 9,
        "key": "usdt_to_cny",
        "value": "6.2",
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 09:39:56"
    }
}
```

## 支付开关-详情

#### 接口URL
> {{url}}/configs/pay/switch

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 2,
        "key": "pay_switch",
        "value": {
            "bank": "on",
            "usdt": "on",
            "alipay": "off",
            "wechat": "off"
        },
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 06:24:01"
    }
}
```

## 支付开关-修改

#### 接口URL
> {{url}}/configs/pay/switch

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| switch | array |  无  |  是  | on:开启/off:关闭 |
#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 版本控制状态-详情

#### 接口URL
> {{url}}/configs/version

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 4,
        "key": "version",
        "value": 0,
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 06:24:01"
    }
}
```
## 版本控制状态-修改

#### 接口URL
> {{url}}/configs/version

#### 请求方式
> ANY

```json
{
    "msg": "修改版本成功",
    "code": 0,
    "data": null
}
```
## 关于-详情

#### 接口URL
> {{url}}/configs/about

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 3,
        "key": "about",
        "value": "关于我们",
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 06:24:01"
    }
}
```
## 关于-修改

#### 接口URL
> {{url}}/configs/about

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| about | string |  无  |  是  | 内容 |
#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 3,
        "key": "about",
        "value": "关于我们",
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 06:24:01"
    }
}
```
## 注册协议-详情

#### 接口URL
> {{url}}/configs/register

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,
        "key": "register",
        "value": "注册协议",
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 06:24:01"
    }
}
```
## 注册协议-修改

#### 接口URL
> {{url}}/configs/register

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| register | string |  无  |  是  | 内容 |
#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

## 收款账户信息-详情

#### 接口URL
> {{url}}/configs/account/receivable

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "bank": {
            "bank": "中国工商银行",
            "code_desc": "这是附言码说明",
            "account_name": "陕西存链科技数据有限公司",
            "account_number": "3700xxxxxxx"
        }
    }
}
```
## 收款账户信息-修改

#### 接口URL
> {{url}}/configs/account/receivable

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| account_name | string |  无  |  是  | 开户名 |
| bank | string |  无  |  是  | 开户行 |
| account_number | string |  无  |  是  | 开户号 |
| code_desc | string |  无  |  是  | 附言码说明 |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "id": 6,
        "key": "account_receivable",
        "value": {
            "bank": {
                "account_name": "开户名",
                "bank": "开户行",
                "account_number": "开户号",
                "code_desc": "这是附言码说明"
            }
        },
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 10:02:31"
    }
}
```
## 电费-详情

#### 接口URL
> {{url}}/configs/electricity

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "desc": "最低需要预付2周电费",
        "year": "0.36",
        "limit": "1000",
        "gpu_year": "0.42",
        "end_month": "10",
        "low_water": "0.38",
        "full_water": "0.23",
        "start_month": "6"
    }
}
```
## 电费-修改

#### 接口URL
> {{url}}/configs/electricity

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| year | int |  无  |  是  | 全年 |
| gpu_year | int |  无  |  是  | 显卡全年 |
| low_water | int |  无  |  是  | 枯水期 |
| full_water | int |  无  |  是  | 丰水期 |
| start_month | int |  无  |  是  | 沣水月份范围 |
| end_month | int |  无  |  是  | 沣水月份范围 |
| limit | int |  无  |  是  | 最低充值金额 |
| desc | int |  无  |  是  | 提示说明 |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "id": 6,
        "key": "account_receivable",
        "value": {
            "desc": "最低需要预付2周电费",
            "year": "0.36",
            "limit": "1000",
            "gpu_year": "0.42",
            "end_month": "10",
            "low_water": "0.38",
            "full_water": "0.23",
            "start_month": "6"
        },
        "created_at": "2021-07-28 06:24:01",
        "updated_at": "2021-07-28 10:02:31"
    }
}
```

## 转账-详情

#### 接口URL
> fil/usdt/eth/btc/xch
> {{url}}/configs/fil/transfer

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 17,
        "key": "fil_transfer",
        "value": {
            "instr": "转账说明",
            // 开关
            "switch": "on",
            // 手续费
            "fil_fee": 5,
            // 最低
            "user_min": "10",
            // 单日最多
            "user_day_limit": "100"
        },
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 06:24:02"
    }
}
```

## 转账-修改

#### 接口URL
> fil/usdt/eth/btc/xch
> {{url}}/configs/fil/transfer

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| user_min | string |  无  |  是  | 单次最低 |
| user_day_limit | string |  无  |  是  | 用户单日上限 |
| instr | string |  无  |  是  | 说明 |
| switch | string |  无  |  是  | 开关 |
| fil_fee | string |  无  |  是  | 手续费 |
#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "id": 17,
        "key": "fil_transfer",
        "value": {
            "user_min": "10",
            "user_day_limit": "100",
            "instr": "说明",
            "switch": "on",
            "fil_fee": "1"
        },
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 10:39:47"
    }
}
```

## 税点-详情

#### 接口URL
> {{url}}/configs/tax

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 22,
        "key": "tax",
        "value": {
            "bank": "6",
            "usdt": "6"
        },
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 06:24:02"
    }
}
```
## 税点-修改

#### 接口URL
> {{url}}/configs/tax

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| usdt | string |  无  |  是  | usdt税点 |
| bank | string |  无  |  是  | 人民币税点 |
#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```
## 签名-详情

#### 接口URL
> {{url}}/configs/sign

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 23,
        "key": "sign",
        "value": "saas",
        "created_at": "2021-07-28 06:24:02",
        "updated_at": "2021-07-28 06:24:02"
    }
}
```

## 签名-修改

#### 接口URL
> {{url}}/configs/sign

#### 请求方式
> ANY

|   参数   |  类型  | 默认 | 必须 |     说明     |
| :------: | :----: | :--: | :--: | :----------: |
| sign | string |  无  |  是  | 签名内容 |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```