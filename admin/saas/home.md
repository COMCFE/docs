# 首页

## 首页数据

#### 接口URL
> {{url}}/home

#### 请求方式
> GET

#### 成功响应示例

```json
{
    // 常用操作
    "common": {
        // 待审核订单
        "order": 0,
        // 提币待审核
        "withdrawal": 0,
        // 提现待审核
        "cnyWithdrawal": 0,
        // 电费待审核
        "electric": 0,
        // 认证待审核
        "certification": 0,
        // 转账待审核
        "transfer": 0,
        // 反馈待审核
        "feedback": 0
    },
    // 数据统计
    "statistics": {
        "0": {
            "id": 1,
            "key": "user",
            "value": {
                "total": 3,
                "today_increase": 3,
                "yesterday_increase": "0"
            },
            "created_at": null,
            "updated_at": "2021-07-28 06:53:39"
        },
        // 消费用户
        "spend_user": {
            "total": 0,
            "yesterday_increase": 0
        }
    },
    // 平台资产：除fil都只有total
    "asset": {
        // xch
        // btc
        // eth
        // 现金资产
        "cny": {
            "total": 0
        },
        // fil资产
        "fil": {
            "total": 18,
            // 冻结
            "frozen": 0,
            // 锁仓
            "lock": 0,
            // 抵押
            "pawn": 0,
            // 可用
            "withdrawable": 28
        }
        
    },
    // 用户充提报表信息
    "wallet": {
        "recharge_total": "2000.00000000",
        "recharge": [
            {
                "amount": "1000.00000000",
                "created_at": "2021-07-29 00:00:00"
            }
        ],
        "withdrawal_total": "100.00000000",
        "withdrawal": []
    },
    // 电费报表
    "electric": {
        "electric_bank_total": 0,
        "electric_bank": [],
        "electric_usdt_total": 0,
        "electric_usdt": []
    },
    // 用户提现
    "cny_withdrawal": {
        "total": "100.00",
        "info": [
            {
                "amount": "100.00",
                "created_at": "2021-07-29 00:00:00"
            }
        ]
    }
}
```
## 用户充提币数据缓存

#### 接口URL
> {{url}}/home/wallet_logs

#### 请求方式
> GET

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   currency    | string |  无  |  是  | 专区类型 |
|   start_time    | string |  无  |  是  | 开始时间 |
| end_time | array  |  无  |  是  | 结束时间 |
| page  | array  |  无  |  是  | 页数 |
| limit  | array  |  无  |  是  | 数量 |
#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        // 总金额
        "recharge_total": "2000.00000000",
        "recharge": [
            {
                // 金额
                "amount": "1000.00000000",
                // 日期
                "created_at": "2021-07-29 00:00:00"
            },
            {
                "amount": "1000.00000000",
                "created_at": "2021-04-19 00:00:00"
            }
        ],
        "withdrawal_total": "100.00000000",
        "withdrawal": [
            {
                "amount": "100.00000000",
                "created_at": "2021-04-26 00:00:00"
            }
        ]
    }
}
```

## 电费充值-缓存

#### 接口URL
> {{url}}/home/electric

#### 请求方式
> GET

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   start_time    | string |  无  |  是  | 开始时间 |
| end_time | array  |  无  |  是  | 结束时间 |
| page  | array  |  无  |  是  | 页数 |
| limit  | array  |  无  |  是  | 数量 |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "electric_bank_total": 0,
        "electric_bank": [],
        "electric_usdt_total": 0,
        "electric_usdt": []
    }
}
```
## 用户提现-缓存

#### 接口URL
> {{url}}/home/cny_withdrawal

#### 请求方式
> GET

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   start_time    | string |  无  |  是  | 开始时间 |
| end_time | array  |  无  |  是  | 结束时间 |
| page  | array  |  无  |  是  | 页数 |
| limit  | array  |  无  |  是  | 数量 |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        // 总金额
        "total": "100.00",
        "info": [
            {
                // 金额
                "amount": "100.00",
                // 日期
                "created_at": "2021-07-29 00:00:00"
            }
        ]
    }
}
```