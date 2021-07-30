# 提现

## 申请

#### 接口URL
> {{url}}/withdrawal

#### 请求方式
> POST

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     num      |  int   |  是  | 提现数量 |
| pay_password | string |  是  | 支付密码 |
|   currency   | string |  是  |   币种   |

#### 成功响应示例

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": {
        "user_id": 25,
        "pid": "213e7b6f060ad1c7cc306395e695280d",
        "num": "100",
        "fee": "10",
        "from_address": "f13nmxaqljpssfucurwvijnvlzhhfpjq4x6dccjuy",
        "to_address": "f1u7ktn4qvyl3uhgt4u7mppqlm7cgp7gs766r2uta",
        "currency": "fil",
        "status": 0,
        "handler_id": 0,
        "updated_at": "2021-07-30 07:23:00",
        "created_at": "2021-07-30 07:23:00",
        "id": 12
    }
}
```

## 充值查询

#### 接口URL
> {{url}}/withdrawal/info

#### 请求方式
> POST

|     名称     |  类型  | 必须 |   说明   |
| :----------: | :----: | :--: | :------: |
|     hash      |  string   |  是  | 交易hash |
|   currency   | string |  是  |   币种   |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 5,
        "title": "充值",
        "user_id": 5,
        "target_id": 0,
        "target_type": "3",
        "amount": "1000.00000000",
        "action": 1,
        "status": 1,
        "currency": "fil",
        "type": "recharge",
        "extend": {
            "transHash": "75653a0cda4b713aaca222dc8f7652ac1977b7f51e78e40330f1833452e37975"
        },
        "created_at": "2021-04-19 10:37:38",
        "updated_at": "2021-04-19 10:37:38"
    }
}
```