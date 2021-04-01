# 报表管理


## 提币报表

`/admin/report/withdrawal`

**请求方式**

`GET`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| limit | int |  20  |  否  | 每页条数 |
| currency | string |  fil  |  否  | 提币类型 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "list": {                 //当日提币流水
            "current_page": 1,
            "data": [
                {
                    "id": 4,
                    "user_id": 7,
                    "pid": "31bb087f4464d42a977639846f55e798",
                    "num": "100.0000",
                    "fee": "10.0000",
                    "from_address": "f1ql42wzdamq2fjesxa4ggage42xcwutnt3b552ta",
                    "to_address": "f1u7ktn4qvyl3uhgt4u7mppqlm7cgp7gs766r2uta",
                    "currency": "fil",
                    "hash": null,
                    "reason": null,
                    "status": 0,
                    "handler_id": 0,
                    "created_at": "2021-04-01 17:31:40",
                    "updated_at": "2021-03-31 18:27:45"
                },
                {
                    "id": 3,
                    "user_id": 5,
                    "pid": "aada6045269d88fe9ed10c1d328b9d35",
                    "num": "250.0000",
                    "fee": "10.0000",
                    "from_address": "f1rzmyxvtyhqumhv2sqhyozcklocttd2yanwbqsva",
                    "to_address": "f0123456789012345678901234567890123456789",
                    "currency": "fil",
                    "hash": null,
                    "reason": null,
                    "status": 0,
                    "handler_id": 0,
                    "created_at": "2021-04-01 17:31:40",
                    "updated_at": "2021-03-31 18:27:21"
                }
            ],
            "first_page_url": "http://ylq.hashark.vip/admin/report/withdrawal?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://ylq.hashark.vip/admin/report/withdrawal?page=1",
            "next_page_url": null,
            "path": "http://ylq.hashark.vip/admin/report/withdrawal",
            "per_page": 15,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        },
        "total_num": "350.0000",      //总提币数量
        "total_fee": "20.0000"        //总手续费
    }
}
```


## 互转报表

`/admin/report/transfer-accounts`

**请求方式**

`GET`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "total_num": "580.00000000",  //总互转fil
        "total_fee": "25.0000"        //总手续费
    }
}
```


## 用户报表

`/admin/report/user`

**请求方式**

`GET`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "yesterday_num": 7,     //昨日新增数量
        "total_num": 9          //累计用户数量
    }
}
```

## 销售报表

`/admin/report/salas`

**请求方式**

`GET`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| limit | int |  20  |  否  | 每页条数 |
| pay_type | string |  usdt  |  是  | 支付方式 |
| period_id | int |  无  |  否  | 期数id |
**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "list": {         //每日销售流水
            "current_page": 1,
            "data": [
                {
                    "id": 2,
                    "order_no": "G96371617241432709",
                    "user_id": 6,
                    "num": 1,
                    "pay_price": "34.0000",
                    "total_price": "222.0000",
                    "usdt_price": "6.57",
                    "pay_type": "usdt",
                    "credential": null,
                    "electric_remnant_days": 0,
                    "electric_total_days": 0,
                    "dig_remnant_days": 365,
                    "dig_total_days": 365,
                    "dig_start_time": null,
                    "dig_end_time": null,
                    "total_output": "0",
                    "yesterday_output": "0",
                    "bank_info": null,
                    "remark": "",
                    "reason": null,
                    "order_cate": 0,
                    "order_type": 0,
                    "status": 2,
                    "pay_time": "2021-04-01 09:43:52",
                    "confirm_time": "2021-04-01 09:43:52",
                    "close_time": null,
                    "recovery": 0,
                    "admin_id": 0,
                    "created_at": "2021-04-01 09:43:52",
                    "updated_at": "2021-04-01 09:43:52",
                    "close_seconds": null,
                    "advance_type": 1,
                    "goods_order": {
                        "id": 2,
                        "goods_id": 1,
                        "order_id": 2,
                        "user_id": 6,
                        "name": "1211",
                        "price": "222.0000",
                        "image": "1617159649257i0ykpbz4n39.png",
                        "zone": "fil",
                        "spec": 1,
                        "years": 1,
                        "rate": "10",
                        "rate_desc": "10",
                        "power": 1,
                        "daily_output": "2.00000000",
                        "electric_price": null,
                        "electric_degree": "0",
                        "custody_rate": "3",
                        "electric_days": 0,
                        "extend": {
                            "cate": 1
                        },
                        "power_type": 0,
                        "before": "3.0000",
                        "after": "3.0000",
                        "period_id": 1,
                        "type": "common",
                        "created_at": "2021-04-01 09:43:52",
                        "updated_at": "2021-04-01 09:43:52",
                        "period": {
                            "id": 1,
                            "name": "20210331",
                            "extend": {
                                "lock": 20,
                                "pawn": 20,
                                "frozen": 20,
                                "security": 20,
                                "withdrawable": 20
                            },
                            "interest": "10.00",
                            "gas": "0.00000000",
                            "pledge": "0.00000000",
                            "back_interest": "0.00000000",
                            "spec_id": 2,
                            "type": "fil",
                            "created_at": "2021-03-31 11:00:22",
                            "updated_at": "2021-03-31 11:00:22",
                            "cate": 0,
                            "issue_status": 0,
                            "specs": {
                                "id": 2,
                                "name": "2000"
                            }
                        }
                    },
                    "user": {
                        "id": 6,
                        "name": "0CGLAW",
                        "avatar": null,
                        "phone": "17308065804",
                        "code": "0CGLAW",
                        "agency_id": 1,
                        "currency_address": {
                            "erc_address": "0x7bfe4a470b6de4e36b813ec3c99753c5a022a0d2"
                        },
                        "state": 0,
                        "created_at": "2021-03-31 10:55:34",
                        "updated_at": "2021-04-01 09:43:47"
                    },
                    "admin": null
                }
            ],
            "first_page_url": "http://ylq.hashark.vip/admin/report/salas?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://ylq.hashark.vip/admin/report/salas?page=1",
            "next_page_url": null,
            "path": "http://ylq.hashark.vip/admin/report/salas",
            "per_page": 15,
            "prev_page_url": null,
            "to": 1,
            "total": 1
        },
        "total_amount": "34.0000",      //平台总销售金额
        "period_yesterday_num": 0,      //昨日销售数量T
        "period_total_num": 1,          //累计销售数量T
        "period_total_amount": "34.0000"//累计销售金额
    }
}
```

## 挖矿报表

`/admin/report/mine`

**请求方式**

`GET`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| limit | int |  20  |  否  | 每页条数 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "list": {       //每日挖矿流水
            "current_page": 1,
            "data": [
                {
                    "id": 5,
                    "period_id": 1,
                    "order_count": 1,
                    "currency": "fil",
                    "amount": "20.00000000",
                    "fz_num": "2.00000000",
                    "gas": "2.00000000",
                    "pledge": "2.00000000",
                    "admin_id": 2,
                    "created_at": "2021-04-01 14:20:48",
                    "updated_at": "2021-04-01 14:20:48",
                    "period": {
                        "id": 1,
                        "name": "20210331",
                        "extend": {
                            "lock": 20,
                            "pawn": 20,
                            "frozen": 20,
                            "security": 20,
                            "withdrawable": 20
                        },
                        "interest": "10.00",
                        "gas": "2.00000000",
                        "pledge": "2.00000000",
                        "back_interest": "0.00000000",
                        "spec_id": 2,
                        "type": "fil",
                        "created_at": "2021-03-31 11:00:22",
                        "updated_at": "2021-04-01 14:20:50",
                        "cate": 0,
                        "issue_status": 1
                    },
                    "admin": {
                        "id": 2,
                        "name": "admin"
                    }
                }
            ],
            "first_page_url": "http://ylq.hashark.vip/admin/report/mine?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://ylq.hashark.vip/admin/report/mine?page=1",
            "next_page_url": null,
            "path": "http://ylq.hashark.vip/admin/report/mine",
            "per_page": 15,
            "prev_page_url": null,
            "to": 1,
            "total": 1
        },
        "total_num": "20.00000000"    //总挖矿数量
    }
}
```
