# 预存电费

## 电费包余额

**方式**

`GET`

无

**路径**

`/api/electric`

**响应**

`Status code 200`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "wallet": {
            "id": 65,
            "user_id": 13,
            "balance": "0.00000000",
            "income": "0.00000000",
            "expend": "0.00000000",
            "wait": "0.0000",
            "currency": "dfb"
        },
        "days": 0
    }
}
```


## 电费充值列表

`api/electric/list`

**请求方式**

`get`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| limit  | int |  20  |  是  | 分页条数 |
| offset |  int   |  0  |  是  |        分页步长         |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 13,
            "order_no": "EL56961613787884473", // 订单号
            "code": null,
            "amount": 100,                    // 充值金额
            "pay_type": "bank",               // 支付方式：bank:银行卡 Alipay：支付宝  wechat：微信  USDT
            "pay_price": "100.0000",         // 支付金额
            "usdt_price": "0.0000",
            "bank_info": {
                "bank": "工商银行",
                "account_name": "百度公司",
                "account_number": "132132132132"
            },
            "credential": "1000",           // 凭证地址
            "reason": null,                // 审核备注
            "remark": null,                // 订单备注
            "pay_time": "2021-02-20 10:30:16", // 支付时间
            "confirm_time": null,             // 确认时间
            "close_time": null,              // 订单关闭时间
            "status": 1,             // 0:待支付 1：已支付（待确认） 2：已确认 3：驳回 4：取消
            "admin_id": 0,
            "created_at": "2021-02-20 10:24:44", // 订单创建时间
            "updated_at": "2021-02-20 10:30:16",// 订单关闭时间
            "close_seconds": null,// 支付倒计时
            "admin": null
        }
    ]
}
```

## 扣费流水

`api/electric/miner`

**请求方式**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| limit  | int |  20  |  是  | 分页条数 |
| offset |  int   |  0  |  是  |        分页步长         |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": []
}
```

## 电费充值

`api/electric/recharge`

**请求方式**

`POST`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| amount |  int   |  无  |  是  |       充值金额        |
| pay_type |  string   |  无  |  是  |      支付方式：usdt,alipay,wechat,bank      |
| pay_password |  string   |  无  |  是  |      支付方式：usdt 时必传      |

**返回体**

```json
{
    "msg": "购买成功",
    "code": 0,
    "data": {
        "id": 1
    }
}
```

## 电费充值说明

`api/electric/desc`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "limit": 100,
        "desc": "这个是说明"
    }
}
```

## 电费充值提交凭证

**方式**

`POST`

**路径**

`api/electric/{electricOrder}/submit`

**请求参数**

|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| credential | string  |  无   |  是  |  凭证地址  |

**响应**

`Status code 200`

**返回体**
```json
{
    "msg": "提交成功",
    "code": 0,
    "data": null
}
```
## 关闭电费充值订单

> status == 0 可关闭

**方式**

`POST`

**参数**

none

**路径**

`/api/electric/{electricOrder}/close`

**响应**

`Status code 200`

```json
{
  "msg": "关闭成功",
  "code": 0,
  "data": null
}
```
