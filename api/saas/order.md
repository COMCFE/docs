# 订单

## 矿机订单列表

`api/orders`

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
|   zone   | string |  无  |  否  |        专区    |

#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 5,
            "order_no": "G53571627526792083",
            "user_id": 1,
            "num": 2,
            "pay_price": "2175.00000000",
            "total_price": "10000.00000000",
            "usdt_price": "6.3500",
            "pay_type": "usdt",
            "credential": null,
            "tax": "6.00000000",
            "tax_fee": "600.00000000",
            "market_status": 1,
            "sales_status": 1,
            "dig_remnant_days": 365,
            "dig_total_days": 365,
            "dig_start_time": null,
            "dig_end_time": null,
            "total_output": "0",
            "yesterday_output": "0",
            "bank_info": null,
            "remark": "后台导入订单",
            "reason": null,
            "order_cate": 0,
            "order_type": 1,
            "status": 2,
            "pay_time": "2021-07-29 02:46:32",
            "confirm_time": "2021-07-29 02:46:32",
            "close_time": null,
            "recovery": 0,
            "recovery_num": "0.0000",
            "admin_id": 1,
            "is_delete": 0,
            "created_at": "2021-07-29 02:46:32",
            "updated_at": "2021-07-29 02:46:32",
            "close_seconds": null,
            "advance_type": 1,
            "goods_order": {
                "id": 2,
                "goods_id": 1,
                "order_id": 5,
                "user_id": 1,
                "name": "测试fil商品啦啦啦",
                "price": "5000.0000",
                "image": null,
                "zone": "fil",
                "spec": 2,
                "years": 365,
                "market_status": 1,
                "storage_price": "4000.00000000",
                "discount_status": 0,
                "discount_start_time": null,
                "discount_end_time": null,
                "discount_price": "0.00000000",
                "electric_degree": "0",
                "power_type": 0,
                "extend": {
                    "cate": 0,
                    "cycle": "10",
                    "intro": null,
                    "power": "1",
                    "operate": "20",
                    "cycle_status": "1",
                    "daily_output": "20",
                    "intro_status": "0",
                    "market_price": "4500",
                    "power_status": "1",
                    "operate_status": "1",
                    "daily_output_status": "1",
                    "market_price_status": "1"
                },
                "period_id": 1,
                "created_at": "2021-07-29 02:46:32",
                "updated_at": "2021-07-29 02:46:32",
                "period": {
                    "id": 1,
                    "name": "test2323",
                    "interest": "8.00",
                    "spec_id": 1,
                    "issue_status": 0
                }
            }
        },
        {
            "id": 4,
            "order_no": "G49141627526023663",
            "user_id": 1,
            "num": 1,
            "pay_price": "5300.00000000",
            "total_price": "5000.00000000",
            "usdt_price": "6.3500",
            "pay_type": "bank",
            "credential": null,
            "tax": "6.00000000",
            "tax_fee": "300.00000000",
            "market_status": 1,
            "sales_status": 1,
            "dig_remnant_days": 365,
            "dig_total_days": 365,
            "dig_start_time": "2021-07-29 03:00:23",
            "dig_end_time": "2022-07-29 03:00:23",
            "total_output": "0",
            "yesterday_output": "0",
            "bank_info": {
                "bank": "中国工商银行",
                "account_name": "陕西存链科技数据有限公司",
                "account_number": "3700xxxxxxx"
            },
            "remark": "后台导入订单",
            "reason": null,
            "order_cate": 0,
            "order_type": 1,
            "status": 3,
            "pay_time": "2021-07-29 02:33:43",
            "confirm_time": "2021-07-29 02:33:43",
            "close_time": null,
            "recovery": 0,
            "recovery_num": "0.0000",
            "admin_id": 1,
            "is_delete": 0,
            "created_at": "2021-07-29 02:33:43",
            "updated_at": "2021-07-29 03:00:23",
            "close_seconds": null,
            "advance_type": 1,
            "goods_order": {
                "id": 1,
                "goods_id": 1,
                "order_id": 4,
                "user_id": 1,
                "name": "测试fil商品啦啦啦",
                "price": "5000.0000",
                "image": null,
                "zone": "fil",
                "spec": 2,
                "years": 365,
                "market_status": 1,
                "storage_price": "4000.00000000",
                "discount_status": 0,
                "discount_start_time": null,
                "discount_end_time": null,
                "discount_price": "0.00000000",
                "electric_degree": "0",
                "power_type": 0,
                "extend": {
                    "cate": 0,
                    "cycle": "10",
                    "intro": null,
                    "power": "1",
                    "operate": "20",
                    "cycle_status": "1",
                    "daily_output": "20",
                    "intro_status": "0",
                    "market_price": "4500",
                    "power_status": "1",
                    "operate_status": "1",
                    "daily_output_status": "1",
                    "market_price_status": "1"
                },
                "period_id": 1,
                "created_at": "2021-07-29 02:33:43",
                "updated_at": "2021-07-29 02:33:43",
                "period": {
                    "id": 1,
                    "name": "test2323",
                    "interest": "8.00",
                    "spec_id": 1,
                    "issue_status": 0
                }
            }
        }
    ]
}
```

## 用户订单详情

`api/orders/{order}`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 4,
        "order_no": "G49141627526023663",
        "user_id": 1,
        "num": 1,
        "pay_price": "5300.00000000",
        "total_price": "5000.00000000",
        "usdt_price": "6.3500",
        "pay_type": "bank",
        "credential": null,
        "tax": "6.00000000",
        "tax_fee": "300.00000000",
        "market_status": 1,
        "sales_status": 1,
        "dig_remnant_days": 365,
        "dig_total_days": 365,
        "dig_start_time": "2021-07-29 03:00:23",
        "dig_end_time": "2022-07-29 03:00:23",
        "total_output": "0",
        "yesterday_output": "0",
        "bank_info": {
            "bank": "中国工商银行",
            "account_name": "陕西存链科技数据有限公司",
            "account_number": "3700xxxxxxx"
        },
        "remark": "后台导入订单",
        "reason": null,
        "order_cate": 0,
        "order_type": 1,
        "status": 3,
        "pay_time": "2021-07-29 02:33:43",
        "confirm_time": "2021-07-29 02:33:43",
        "close_time": null,
        "recovery": 0,
        "recovery_num": "0.0000",
        "admin_id": 1,
        "is_delete": 0,
        "created_at": "2021-07-29 02:33:43",
        "updated_at": "2021-07-29 03:00:23",
        "close_seconds": null,
        "advance_type": 1,
        "goods_order": {
            "id": 1,
            "goods_id": 1,
            "order_id": 4,
            "user_id": 1,
            "name": "测试fil商品啦啦啦",
            "price": "5000.0000",
            "image": null,
            "zone": "fil",
            "spec": 2,
            "years": 365,
            "market_status": 1,
            "storage_price": "4000.00000000",
            "discount_status": 0,
            "discount_start_time": null,
            "discount_end_time": null,
            "discount_price": "0.00000000",
            "electric_degree": "0",
            "power_type": 0,
            "extend": {
                "cate": 0,
                "cycle": "10",
                "intro": null,
                "power": "1",
                "operate": "20",
                "cycle_status": "1",
                "daily_output": "20",
                "intro_status": "0",
                "market_price": "4500",
                "power_status": "1",
                "operate_status": "1",
                "daily_output_status": "1",
                "market_price_status": "1"
            },
            "period_id": 1,
            "created_at": "2021-07-29 02:33:43",
            "updated_at": "2021-07-29 02:33:43",
            "period": {
                "id": 1,
                "name": "test2323",
                "interest": "8.00",
                "spec_id": 1,
                "issue_status": 0
            }
        }
    }
}
```



## 下单

`api/orders`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   num   | int |  无  |  是  |                数量            |
|   goods_id   | int |  无  |  是  |         商品id          |
|   pay_type   | int |  无  |  是  |            支付方式            |
|   pay_password   | int |  无  |  是  |            支付密码           |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "order_id": 7
    }
}
```

## 上传凭证

`/api/orders/credential`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数
|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   order_id   | int |  无  |  是  |                订单id            |
|   credential   | string |  无  |  是  |              凭证图            |


#### SUCCESS 返回体

```json
{
    "msg": "提交成功",
    "code": 0,
    "data": null
}
```

## 用户手动关闭订单

`api/orders/{order}/close`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |



#### SUCCESS 返回体

```json
{
    "msg": "关闭成功",
    "code": 0,
    "data": null
}
```


## 订单统计信息

`/api/orders-count`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "closed": 0,
        "wait_pay": 0,
        "wait_confirm": 1,
        "completed": 2
    }
}
```


## 电费即将到期订单数量

`/api/orders/notice`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |



#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "notice": 0
    }
}
```


## 挖矿明细

`api/equipments/miner_log/{order_id}`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   action   | int |  无  |  是  |    收入 income,支出 expend    |
|   type   | string |  无  |  是  |   锁仓 fil_lock ,可用 'fil_available',抵押'fil_pawn',挖矿 miner_release |
|   limit   | string |  无  |  是  |        专区    |
|   offset   | string |  无  |  是  |       支付方式    |



#### SUCCESS 返回体

```json

```


## 锁仓详情

`api/equipments/linear_release/{order_id}`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   limit   | string |  无  |  是  |        专区    |
|   offset   | string |  无  |  是  |       支付方式    |


#### SUCCESS 返回体

```json

```



## 设备列表

`api/equipments`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数
|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   limit   | string |  无  |  是  |        专区    |
|   offset   | string |  无  |  是  |       支付方式    |
|   zone   | string |  无  |  是  |       专区    |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "orders": [
            {
                "id": 5,
                "num": 2,
                "status": 2,
                "recovery": 0,
                "total_output": "0",
                "recovery_num": "0.0000",
                "yesterday_output": "0",
                "total_price": "10000.00000000",
                "advance_type": 1,
                "goods_order": {
                    "order_id": 5,
                    "spec_num": 2,
                    "period_id": 1,
                    "zone": "fil",
                    "extend": {
                        "cate": 0,
                        "cycle": "10",
                        "intro": null,
                        "power": "1",
                        "operate": "20",
                        "cycle_status": "1",
                        "daily_output": "20",
                        "intro_status": "0",
                        "market_price": "4500",
                        "power_status": "1",
                        "operate_status": "1",
                        "daily_output_status": "1",
                        "market_price_status": "1"
                    },
                    "period": {
                        "id": 1,
                        "name": "test2323",
                        "spec_id": 1,
                        "interest": "8.00",
                        "issue_status": 0,
                        "specs": null
                    }
                },
                "assets": {
                    "order_id": 5,
                    "fz_num": "0.00000000",
                    "total_ming": "0.00000000",
                    "interest": "0.00000000"
                }
            },
            {
                "id": 4,
                "num": 1,
                "status": 3,
                "recovery": 0,
                "total_output": "0",
                "recovery_num": "0.0000",
                "yesterday_output": "0",
                "total_price": "5000.00000000",
                "advance_type": 1,
                "goods_order": {
                    "order_id": 4,
                    "spec_num": 2,
                    "period_id": 1,
                    "zone": "fil",
                    "extend": {
                        "cate": 0,
                        "cycle": "10",
                        "intro": null,
                        "power": "1",
                        "operate": "20",
                        "cycle_status": "1",
                        "daily_output": "20",
                        "intro_status": "0",
                        "market_price": "4500",
                        "power_status": "1",
                        "operate_status": "1",
                        "daily_output_status": "1",
                        "market_price_status": "1"
                    },
                    "period": {
                        "id": 1,
                        "name": "test2323",
                        "spec_id": 1,
                        "interest": "8.00",
                        "issue_status": 0,
                        "specs": null
                    }
                },
                "assets": {
                    "order_id": 4,
                    "fz_num": "0.00000000",
                    "total_ming": "0.00000000",
                    "interest": "0.00000000"
                }
            }
        ],
        "total": "6"
    }
}
```

## 订单详情

`api/equipments/{order}`

#### 请求方式

`GET`
#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |


#### 请求参数


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 4,
        "order_no": "G49141627526023663",
        "user_id": 1,
        "num": 1,
        "pay_price": "5300.00000000",
        "total_price": "5000.00000000",
        "usdt_price": "6.3500",
        "pay_type": "bank",
        "credential": null,
        "tax": "6.00000000",
        "tax_fee": "300.00000000",
        "market_status": 1,
        "sales_status": 1,
        "dig_remnant_days": 365,
        "dig_total_days": 365,
        "dig_start_time": "2021-07-29 03:00:23",
        "dig_end_time": "2022-07-29 03:00:23",
        "total_output": "0",
        "yesterday_output": "0",
        "bank_info": {
            "bank": "中国工商银行",
            "account_name": "陕西存链科技数据有限公司",
            "account_number": "3700xxxxxxx"
        },
        "remark": "后台导入订单",
        "reason": null,
        "order_cate": 0,
        "order_type": 1,
        "status": 3,
        "pay_time": "2021-07-29 02:33:43",
        "confirm_time": "2021-07-29 02:33:43",
        "close_time": null,
        "recovery": 0,
        "recovery_num": "0.0000",
        "admin_id": 1,
        "is_delete": 0,
        "created_at": "2021-07-29 02:33:43",
        "updated_at": "2021-07-29 03:00:23",
        "close_seconds": null,
        "advance_type": 1,
        "goods_order": {
            "order_id": 4,
            "spec_num": 2,
            "period_id": 1,
            "zone": "fil",
            "extend": {
                "cate": 0,
                "cycle": "10",
                "intro": null,
                "power": "1",
                "operate": "20",
                "cycle_status": "1",
                "daily_output": "20",
                "intro_status": "0",
                "market_price": "4500",
                "power_status": "1",
                "operate_status": "1",
                "daily_output_status": "1",
                "market_price_status": "1"
            },
            "period": {
                "id": 1,
                "name": "test2323",
                "spec_id": 1,
                "interest": "8.00",
                "issue_status": 0,
                "specs": null
            }
        },
        "assets": {
            "id": 1,
            "order_id": 4,
            "total_ming": "0.00000000",
            "available": "0.00000000",
            "lock": "0.00000000",
            "frozen": "0.00000000",
            "pawn": "0.00000000",
            "fz_num": "0.00000000",
            "use_pledge": 10,
            "use_gas": 10,
            "pledge": "10.00000000",
            "gas": "10.00000000",
            "per_pledge": "0.00000000",
            "per_gas": "0.00000000",
            "per_frozen": "0.00000000",
            "return_pledge": "0.00000000",
            "return_gas": "0.00000000",
            "already_release": "0.00000000",
            "total_lock": "0.00000000",
            "interest": "0.00000000",
            "per_interest": "0.00000000",
            "created_at": "2021-07-29 02:33:43",
            "updated_at": "2021-07-29 03:20:08"
        }
    }
}
```


## 归还流水

`api/equipments/return_log/{order_id}`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   limit   | string |  无  |  是  |        专区    |
|   offset   | string |  无  |  是  |       支付方式    |



#### SUCCESS 返回体

```json

```

## 每日归还流水

`api/return_day_log/{order_id}`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   limit   | string |  无  |  是  |        专区    |
|   offset   | string |  无  |  是  |       支付方式    |



#### SUCCESS 返回体

```json

```

## 提前还币

`api/return_borrow`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   order_id   | string |  无  |  是  |   订单id    |
| return_type | string |  无  |  是  | 还款类型，all/pledge/gas/interest |
|   amount   | string |  无  |  是  |       还币数量    |
|   pay_password   | string |  无  |  是  |       支付密码    |



#### SUCCESS 返回体

```json
{
    "msg": "还款成功",
    "code": 0,
    "data": null
}
```

