# 订单管理

## 订单列表

`admin/orders`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |   是 |       每页条数       |
|   status   | int |  无  |  否  |          期数id             |
|   keywords   | string |  无  |  否  |        搜索关键词    |
|   zone   | string |  无  |  否  |        专区    |
|   pay_type   | string |  无  |  否  |       支付方式    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |
|   cate   | int |  无  |  否  |商品属性，0-资本垫付，1-自付质押，2-满存算力|
|   order_type   | int |  无  |  否  |   订单类型 0自购 1导入  |
|   market_status   | int |  无  |  否  |        市场业绩状态    |
|   sales_status   | int |  无  |  否  |   销售奖励状态    |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "data": {
            "current_page": 1,
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
                            "extend": {
                                "lock": "80",
                                "pawn": "0",
                                "frozen": "15",
                                "withdrawable": "5"
                            },
                            "gas": "0.00000000",
                            "pledge": "0.00000000",
                            "back_interest": "0.00000000",
                            "interest": "8.00",
                            "before": "10.0000",
                            "after": "20.0000",
                            "spec_id": 1,
                            "type": "fil",
                            "cate": 0,
                            "is_bonus": 1,
                            "group_id": 0,
                            "sort": 0,
                            "created_at": "2021-07-28 07:02:10",
                            "updated_at": "2021-07-28 07:23:31",
                            "issue_status": 0
                        }
                    },
                    "user": {
                        "id": 1,
                        "name": "测试",
                        "avatar": null,
                        "phone": "17760624907",
                        "email": "",
                        "code": "0CGLAS",
                        "agency_id": 0,
                        "fix_agency_id": 0,
                        "currency_address": null,
                        "withdrawal": null,
                        "bonus_status": 0,
                        "sales_status": 0,
                        "state": 0,
                        "is_delete": 0,
                        "created_at": "2021-07-29 02:24:41",
                        "updated_at": "2021-07-29 02:24:41",
                        "certification": null
                    },
                    "admin": {
                        "id": 1,
                        "name": "超级管理员"
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
                            "extend": {
                                "lock": "80",
                                "pawn": "0",
                                "frozen": "15",
                                "withdrawable": "5"
                            },
                            "gas": "0.00000000",
                            "pledge": "0.00000000",
                            "back_interest": "0.00000000",
                            "interest": "8.00",
                            "before": "10.0000",
                            "after": "20.0000",
                            "spec_id": 1,
                            "type": "fil",
                            "cate": 0,
                            "is_bonus": 1,
                            "group_id": 0,
                            "sort": 0,
                            "created_at": "2021-07-28 07:02:10",
                            "updated_at": "2021-07-28 07:23:31",
                            "issue_status": 0
                        }
                    },
                    "user": {
                        "id": 1,
                        "name": "测试",
                        "avatar": null,
                        "phone": "17760624907",
                        "email": "",
                        "code": "0CGLAS",
                        "agency_id": 0,
                        "fix_agency_id": 0,
                        "currency_address": null,
                        "withdrawal": null,
                        "bonus_status": 0,
                        "sales_status": 0,
                        "state": 0,
                        "is_delete": 0,
                        "created_at": "2021-07-29 02:24:41",
                        "updated_at": "2021-07-29 02:24:41",
                        "certification": null
                    },
                    "admin": {
                        "id": 1,
                        "name": "超级管理员"
                    }
                }
            ],
            "first_page_url": "http://foo.tenancy.com/admin/orders?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://foo.tenancy.com/admin/orders?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://foo.tenancy.com/admin/orders?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next &raquo;",
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://foo.tenancy.com/admin/orders",
            "per_page": 15,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        },
        "wait_count": 0
    }
}
```

## 确认订单

`admin/orders`/{order}/confirm

**请求方式**

`PATCH`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```



## 关闭订单

`admin/orders/{order}/close`

**请求方式**

`PATCH`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   reason   | string |  无  |  是  |                关闭原因            |


**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 订单挖矿状态更新

`admin/orders/{order}/complete`

**请求方式**

`PATCH`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 根据期数ID统计矿体T量

`admin/orders/count/spec`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   period_id   | int |  无  |  是  |          期数id             |
|   currency   | int |  无  |  是  |              矿机类型               |


**SUCCESS 返回体**

```json

```


## 批量修改订单期数

`admin/orders/update/period`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   pid   | int |  无  |  是  |          期数id             |
|   ids   | array |  无  |  是  |              商品订单ids               |


**SUCCESS 返回体**

```json

```


## 导出订单列表

`admin/orders/export/order`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   status   | int |  无  |  否  |          期数id             |
|   keywords   | string |  无  |  否  |        搜索关键词    |
|   zone   | string |  无  |  否  |        专区    |
|   pay_type   | string |  无  |  否  |       支付方式    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |
|   cate   | int |  无  |  否  |商品属性，0-资本垫付，1-自付质押，2-满存算力|
|   order_type   | int |  无  |  否  |   订单类型 0自购 1导入  |
|   market_status   | int |  无  |  否  |        市场业绩状态    |
|   sales_status   | int |  无  |  否  |   销售奖励状态    |



**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "filename": "20210729025805-订单导出.xlsx"
    }
}
```


## 导入订单

`admin/orders/import`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   account   | int |  无  |  是  |          期数id             |
|   num   | string |  无  |  是  |      数量    |
|   goods_id   | string |  无  |  是  |        专区    |
|   pay_type   | string |  无  |  是  |       支付方式    |
|   market_status   | int |  无  |  是  |      有无市场业绩    |
|   sales_status   | int |  无  |  是  |   有无销售奖励    |



**SUCCESS 返回体**

```json
{
    "msg": "导入成功",
    "code": 0,
    "data": ""
}
```


## 订单设备详情

`admin/orders/equipment`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   order_id   | int |  无  |  是  |          订单id             |


**SUCCESS 返回体**

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
        "dig_start_time": null,
        "dig_end_time": null,
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
        "status": 2,
        "pay_time": "2021-07-29 02:33:43",
        "confirm_time": "2021-07-29 02:33:43",
        "close_time": null,
        "recovery": 0,
        "recovery_num": "0.0000",
        "admin_id": 1,
        "is_delete": 0,
        "created_at": "2021-07-29 02:33:43",
        "updated_at": "2021-07-29 02:33:43",
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
            "use_pledge": 0,
            "use_gas": 0,
            "pledge": "0.00000000",
            "gas": "0.00000000",
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
            "updated_at": "2021-07-29 02:33:43"
        }
    }
}
```



## 归还流水

`admin/orders/return_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 导出归还流水

`admin/orders/export/return_log`

**请求方式**

`GET`

**请求参数**


**SUCCESS 返回体**

```json

```


## 挖矿流水

`admin/orders/miner_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 导出挖矿流水

`admin/orders/export/miner_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```


## 奖励流水

`admin/orders/sales_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 导出奖励流水

`admin/orders/export/sales_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 利息流水

`admin/orders/interest_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 导出利息流水

`admin/orders/export/interest_log`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**


**SUCCESS 返回体**

```json

```

## 补发借贷

`admin/orders/borrow/{id}`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   order_id   | int |  无  |  是  |   订单id  |
|   pledge   | int |  无  |  是  |        质押    |
|   gas   | int |  无  |  是  |   gas    |

**SUCCESS 返回体**

```json
{
    "msg": "补发成功",
    "code": 0,
    "data": null
}
```
