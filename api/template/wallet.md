# 钱包

## 钱包列表

**方式**

`GET`

**路径**

`/api/wallets`

**参数**

|   名称   |  类型  | 必须 |           说明            |
| :------: | :----: | :--: | :-----------------------: |
| currency | string |  否  | 类型:btc/dfb/eth/fil/usdt |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 9,
      "user_id": 7,
      "balance": "0.0000" /*余额*/,
      "income": "0.0000" /*已释放*/,
      "expend": "0.0000",
      "wait": "0.0000" /*待释放*/,
      "currency": "usdt",
       "info": {
       "erc": {
       "secret": "bb8f56a846174dabbf5add175c905522","address": "0xced8eb45263492d26b3d3764e5f8a021b3111b6d"
        },
         "trx": {
         "secret": "0b945d8d77b04ae5863ac6d0cccbb073", "address": "TTeRcHHJ2w3tKPrQA91ZPmT3JprVenCdzZ"
         }
         }
    }
  ]
}
```

## 钱包日志

**方式**

`GET`

**路径**

`/api/wallet/logs`

**参数**

|   名称   |  类型  | 必须 |               说明                |
| :------: | :----: | :--: | :-------------------------------: |
| currency | string |  是  | 资产类型: cny-现金 my-my fil-fil  |
|  action  | string |  否  | 收支动作: income-收入 expend-支出 |
|  limit   |  int   |  是  |         条目数量 默认 20          |
|  offset  |  int   |  是  |           偏移量 默认 0           |
|  types   | string |  否  |      流水类型: 多个用","分割      |

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 2,
      "title": "转账交易" /*标题*/,
      "user_id": 1,
      "target_user_id": 2,
      "target_id": 0,
      "amount": "1.0000" /*金额*/,
      "action": 2 /*收支动作: 1-收入/2-支出*/,
      "status": 1 /*状态:0-待完成/1-成功/2-失败*/,
      "type": "transfer:expend",
      "currency": "my" /*cny-现金/my-矿石*/,
      "extend": null,
      "created_at": "2020-05-03 14:46:49",
      "updated_at": "2020-05-03 14:46:49",
      /*目标用户信息*/
      "target_user": {
        "id": 2,
        "name": "张三",
        "avatar": null,
        "gender": 0,
        "phone": "183****4308",
        "code": "",
        "power": 0,
        "cllection_time": null,
        "market_id": 0
      }
    }
  ]
}
```

## 提币

**方式**

`POST`

**路径**

`/api/withdrawal`

**参数**

|     名称     |  类型   | 必须 |            说明            |
| :----------: | :-----: | :--: | :------------------------: |
|   currency   | string  |  是  | 资产类型: usdt/eth/btc/fil |
|     num      | numeric |  是  |          提现数量          |
| pay_password | string  |  是  |          支付密码          |

::: tip
fil 提币 currency 传参 fil
btc 提币 currency 传参 btc
ETH,USDT erc20  提币 currency 传参 erc
USDT trc20  提币 currency 传参 usdt-trx
:::

**响应**

`Status code 200`

```json
{
  "msg": "申请成功",
  "code": 0,
  "data": {
    "user_id": 1,
    "pid": "e8afa8a23c943b09ed526060b7149e82",
    "num": "100",
    "fee": "10.0000",
    "from_address": null,
    "to_address": "0x1111111111111111111111111111111111111111",
    "currency": "usdt",
    "status": 0,
    "handler_id": 0,
    "updated_at": "2020-11-24 14:36:20",
    "created_at": "2020-11-24 14:36:20",
    "id": 2
  }
}
```
