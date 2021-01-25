# 订单

## 矿机订单列表

**方式**

`GET`

|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| offset | int  |  0   |  是  |  偏移量  |
| limit  | int  |  15  |  是  | 每页条数 |

**路径**

`/api/orders`

**响应**

`Status code 200`

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
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
            "electric_remnant_days": 30,// 电费剩余天数
            "electric_total_days": 30, // 电费总天数
            "dig_remnant_days": 1095,// 挖矿剩余天数
            "dig_total_days": 1095,// 挖矿总天数
            "dig_start_time": null,
            "dig_end_time": null,
            "total_output": "0", // 累计产出
            "yesterday_output": "0",// 昨日产出
            "status": 2,  //   0, 待支付 1, 已支付(待商家确认) 2,  已确认(部署中) 3,  挖矿中 4,  已结束5,  已关闭 6,   欠电费
            "recovery": 0, // 是否回本
            "order_cate": 0, // 0 为普通订单  1 为 永久订单
            "admin_id": 0,
            "pay_time": null,
            "created_at": "2021-01-20 14:02:49",
            "updated_at": "2021-01-20 14:28:18",
            "goods_order": {
                "id": 3,
                "goods_id": 1,
                "order_id": 4,
                "user_id": 1,
                "name": "满存算力",
                "price": "3180.0000",
                "image": "http://xxxx",
                "zone": "eth",
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
            "electric_remnant_days": 60,
            "electric_total_days": 60,
            "dig_remnant_days": 1095,
            "dig_total_days": 1095,
            "dig_start_time": null,
            "dig_end_time": null,
            "total_output": "0",
            "yesterday_output": "0",
            "status": 2,
            "recovery": 0,
            "order_cate": 0, // 0 为普通订单  1 为 永久订单
            "admin_id": 0,
            "pay_time": "2021-01-20 13:47:36",
            "created_at": "2021-01-20 13:47:36",
            "updated_at": "2021-01-20 15:10:46",
            "goods_order": {
                "id": 2,
                "goods_id": 1,
                "order_id": 3,
                "user_id": 1,
                "name": "满存算力",
                "price": "3180.0000",
                "image": "http://xxxx",
                "zone": "eth",
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
            }
        }
    ]
}
```


## 矿机下单

`api/orders`

**请求方式**

`POST`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| num  | int |  无  |  是  | 购买数量 |
| days |  int   |  无  |  是  |        电费天数         |
| goods_id |  int   |  无  |  是  |        商品ID        |
|   pay_type    |  string   |  无   |  是  |        支付方式：usdt,bank,alipay,wechat        |
|   pay_password   |  string   |  无  |  否  |        USDT支付时为必填        |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "order_id": 3,
        "electric_id": 2
    }
}
```

## 矿机续费下单

`api/electric/orders`

**请求方式**

`POST`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| days |  int   |  无  |  是  |        电费天数         |
| order_id |  int   |  无  |  是  |        商品ID        |
|   pay_type    |  string   |  无   |  是  |        支付方式：usdt,bank,alipay,wechat        |
|   pay_password   |  string   |  无  |  否  |        USDT支付时为必填        |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "order_id": 3,
        "electric_id": 4
    }
}
```

## 上传凭证

`api/electric-orders/credential`

**请求方式**

`POST`

**请求参数**

|   名称    |  类型  | 默认 | 必须 |          说明          |
| :-------: | :----: | :--: | :--: | :--------------------: |
| buy_type |  string   |  无  |  是  |        矿机：goods 电费：electric        |
| electric_order_id |  int   |  无  |  否  |       buy_type为 electric 时必传      |
|   order_id    |  int   |  无   |  否  |        buy_type为 goods 时必传         |
|   credential   |  string   |  无  |  是  |        凭证图片地址        |

**返回体**

```json
{
    "msg": "提交成功",
    "code": 0,
    "data": null
}
```



## 电费订单列表

|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| offset | int  |  0   |  是  |  偏移量  |
| limit  | int  |  15  |  是  | 每页条数 |

**方式**

`GET`

**路径**

`/api/electric-orders/{order}`

**响应**

`Status code 200`

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
            "status": 2,   // 0:待支付 1：已支付 2：已使用 4：已过期 5：已取消
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
## 关闭矿机订单

> status == 0 可关闭

**方式**

`POST`

**参数**

none

**路径**

`/api/orders/{order}/close`

**响应**

`Status code 200`

```json
{
  "msg": "关闭成功",
  "code": 0,
  "data": null
}
```
## 关闭续电订单

> status == 0 可关闭

**方式**

`POST`

**参数**

none

**路径**

`/api/electric-orders/{electricOrder}/close`

**响应**

`Status code 200`

```json
{
  "msg": "关闭成功",
  "code": 0,
  "data": null
}
```