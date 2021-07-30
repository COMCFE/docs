# 钱包

## 钱包记录

`api/wallets`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   currency   | string |  无  |  否  |    资产类型    |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "wallets": [
            {
                "id": 2,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "usdt"
            },
            {
                "id": 3,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "100.00000000",
                "withdrawable": "9900.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "fil"
            },
            {
                "id": 4,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "btc"
            },
            {
                "id": 5,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "eth"
            },
            {
                "id": 6,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "dfb"
            },
            {
                "id": 7,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "cny"
            },
            {
                "id": 8,
                "user_id": 1,
                "balance": "0.00000000",
                "income": "0.00000000",
                "expend": "0.00000000",
                "withdrawable": "0.00000000",
                "withdraw_ing": "0.00000000",
                "withdraw_finish": "0.00000000",
                "frozen": "0.00000000",
                "lock": "0.00000000",
                "pawn": "0.00000000",
                "info": "",
                "currency": "xch"
            }
        ],
        "total": {
            "cny": 3193196.49,
            "usdt": "491260.99846153"
        }
    }
}
```

## 用户资产流水信息

`api/wallet/logs`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| offset  |  int   |  0  |  是  |             |
| limit  |  int   |  20  |   是 |       每页条数       |
| types  |  string   |  无  |  是  |      类型       |
| action  |  string   |  无  |   是 |       收入支出，income/expend       |
|   currency   | string |  无  |  否  |        币种    |
|   zone   | string |  无  |  否  |      专区    |




#### SUCCESS 返回体

```json

```


## 现金提现

`api/wallet/withdrawal`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| type  |  string   |  无  |  是  |     提现类型        |
| pay_password  |  string   |  无  |   是 |       支付密码       |
| amount  |  string   |  无  |  是  |      金额       |
| number  |  string   |  无  |   否 |       账号       |
|   name   | string |  无  |  否  |        姓名    |
|   bank   | string |  无  |  否  |      银行信息    |




#### SUCCESS 返回体

```json
{
    "msg": "申请成功",
    "code": 0,
    "data": {
        "status": 0,
        "reason": null,
        "handler_id": 0,
        "amount": "100",
        "service_charge": "0",
        "user_id": 1,
        "account_type": "alipay",
        "account_info": {
            "number": "123456789",
            "name": "asda"
        },
        "updated_at": "2021-07-30 07:20:43",
        "created_at": "2021-07-30 07:20:43",
        "id": 1
    }
}
```

## 获取提现账户

`api/wallet/account_info`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| type  |  string   |  无  |  是  |     提现类型        |




#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "name": "asda",
        "number": "123456789"
    }
}
```

