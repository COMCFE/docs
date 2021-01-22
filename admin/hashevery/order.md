# 订单管理


## 矿机订单列表

`admin/orders`

**请求方式**

`GET`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| status  | int |  无  |  否  | 订单状态 |
| order_no |  string   |  无  |  否  |        订单编号         |
| period_id |  int   |  无  |  否  |        期数        |
|   zone    |  string   |  无   |  否  |        分区       |
|   user_keywords   |  string   |  无  |  否  |        用户ID 或者用户注册手机号        |
|   end_time   |  string   |  无  |  否  |        结束时间        |
|   start_time   |  string   |  无  |  否  |        开始时间        |
|   limit   |  string   |  无  |  否  |        分页条数        |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 4,
                "order_no": "G14271611122569467",
                "user_id": 1,
                "num": 1,
                "pay_price": "3180.0000",
                "total_price": "3180.0000",
                "pay_type": "alipay",
                "credential": null,
                "usdt_price": "6.2",
                "coupon_amount": "0.0000",
                "electric_remnant_days": 30,
                "electric_total_days": 30,
                "dig_remnant_days": 1095,
                "dig_total_days": 1095,
                "dig_start_time": null,
                "dig_end_time": null,
                "total_output": "0",
                "yesterday_output": "0",
                "status": 0,
                "recovery": 0,
                "order_cate": 0, // 0 为普通订单  1 为 永久订单
                "admin_id": 0,
                "pay_time": null,
                "created_at": "2021-01-20 14:02:49",
                "updated_at": "2021-01-20 14:02:49",
                "goods_order": {
                    "id": 3,
                    "goods_id": 1,
                    "order_id": 4,
                    "user_id": 1,
                    "name": "满存算力",
                    "price": "3180.0000",
                    "image": "http://xxxx",
                    "zone": "fil",
                    "spec": 100,
                    "years": 3,
                    "rate": "30",
                    "power": 1,
                    "daily_output": "0.012",
                    "electric_price": "0.38",
                    "electric_degree": "30",
                    "custody_rate": "30%",
                    "electric_days": 30,
                    "before": 10,
                    "after": 20,
                    "period_id": 1,
                    "type": "common",
                    "created_at": "2021-01-20 14:02:49",
                    "updated_at": "2021-01-20 14:02:49",
                    "period": {
                        "id": 1,
                        "name": "20201220",
                        "created_at": "2021-01-20 11:34:53",
                        "updated_at": "2021-01-20 11:34:55"
                    }
                },
                "user": {
                    "id": 1,
                    "name": "MT测试账号",
                    "avatar": null,
                    "phone": "13800138000",
                    "code": "0CGLAT",
                    "agency_id": 0,
                    "performance": "0.00",
                    "self_usdt": "0.0000",
                    "direct_usdt": "0.0000",
                    "self_kj_num": 0,
                    "sale_kj_num": 0,
                    "training_region": 0,
                    "fil_address": null,
                    "erc_address": null,
                    "state": 0,
                    "created_at": "2020-12-04 18:25:58",
                    "updated_at": "2021-01-20 11:52:34",
                    "btc_address": null
                }
            },
            {
                "id": 3,
                "order_no": "G84261611121656085",
                "user_id": 1,
                "num": 1,
                "pay_price": "3180.0000",
                "total_price": "3180.0000",
                "pay_type": "usdt",
                "credential": null,
                "usdt_price": "6.2",
                "coupon_amount": "0.0000",
                "electric_remnant_days": 30,
                "electric_total_days": 30,
                "dig_remnant_days": 1095,
                "dig_total_days": 1095,
                "dig_start_time": null,
                "dig_end_time": null,
                "total_output": "0",
                "yesterday_output": "0",
                "status": 2,
                "recovery": 0,
                "admin_id": 0,
                "pay_time": "2021-01-20 13:47:36",
                "created_at": "2021-01-20 13:47:36",
                "updated_at": "2021-01-20 13:47:36",
                "goods_order": {
                    "id": 2,
                    "goods_id": 1,
                    "order_id": 3,
                    "user_id": 1,
                    "name": "满存算力",
                    "price": "3180.0000",
                    "image": "http://xxxx",
                    "zone": "fil",
                    "spec": 100,
                    "years": 3,
                    "rate": "30",
                    "power": 1,
                    "daily_output": "0.012",
                    "electric_price": "0.38",
                    "electric_degree": "30",
                    "custody_rate": "30%",
                    "electric_days": 30,
                    "before": 10,
                    "after": 20,
                    "period_id": 1,
                    "type": "common",
                    "created_at": "2021-01-20 13:47:36",
                    "updated_at": "2021-01-20 13:47:36",
                    "period": {
                        "id": 1,
                        "name": "20201220",
                        "created_at": "2021-01-20 11:34:53",
                        "updated_at": "2021-01-20 11:34:55"
                    }
                },
                "user": {
                    "id": 1,
                    "name": "MT测试账号",
                    "avatar": null,
                    "phone": "13800138000",
                    "code": "0CGLAT",
                    "agency_id": 0,
                    "performance": "0.00",
                    "self_usdt": "0.0000",
                    "direct_usdt": "0.0000",
                    "self_kj_num": 0,
                    "sale_kj_num": 0,
                    "training_region": 0,
                    "fil_address": null,
                    "erc_address": null,
                    "state": 0,
                    "created_at": "2020-12-04 18:25:58",
                    "updated_at": "2021-01-20 11:52:34",
                    "btc_address": null
                }
            }
        ],
        "first_page_url": "http://hashevery.test/admin/orders?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://hashevery.test/admin/orders?page=1",
        "next_page_url": null,
        "path": "http://hashevery.test/admin/orders",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```
## 矿机电费订单列表

`admin/orders/{order}/electrics`

**请求方式**

`GET`

**请求参数**

无

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "user_id": 1,
            "order_id": 3,
            "order_no": "G84261611121656085",
            "node_order_no": "GN99811611121656091",
            "code": "6007c3f816567",
            "days": 30,
            "days_used": 0,
            "num": 1,
            "pay_type": "usdt",
            "pay_price": "342.0000",
            "total_price": "342.0000",
            "usdt_price": "6.2",
            "coupon_amount": "0.0000",
            "electric_price": "0.3800",
            "electric_amount": "0.0000",
            "bank_info": null,
            "credential": null,
            "reason": null,
            "remark": "",
            "pay_time": "2021-01-20 13:47:36",
            "confirm_time": "2021-01-20 13:47:36",
            "close_time": null,
            "status": 2,
            "admin_id": 0,
            "first": 1,
            "created_at": "2021-01-20 13:47:36",
            "updated_at": "2021-01-20 13:47:36",
            "close_seconds": null,
            "admin": null
        }
    ]
}
```
## 确认矿机订单

`admin/orders/{order}/confirm`

**请求方式**

`patch`

**请求参数**

无

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 确认矿机续电订单

`admin/orders/electric/{electricOrder}/confirm`

**请求方式**

`patch`

**请求参数**

无

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```
## 关闭矿机订单

`admin/orders/{order}/close`

**请求方式**

`patch`

**请求参数**

无

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```
## 关闭矿机续电订单

`admin/orders/electric/{electricOrder}/close`

**请求方式**

`patch`

**请求参数**

无

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 设置矿机订单为挖矿

`admin/orders/{order}/complete`

**请求方式**

`patch`

**请求参数**

无

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```