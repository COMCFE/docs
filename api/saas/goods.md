# 商品

## 商品列表

`api/goods`

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
|   cate_id   | int |  无  |  否  |        分类id    |

#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "测试fil商品啦啦啦",
            "images": null,
            "zone": "fil",
            "cate_id": 1,
            "period_id": 1,
            "years": 365,
            "cate": 0,
            "gass_fee": "1.00000000",
            "mortgage": "1.00000000",
            "stock": 9994,
            "spec": "2.00000000",
            "price": "5000.00000000",
            "sort": 1000,
            "purchase_notes": "啦啦啦啦啦啦",
            "business_description": "吧啦吧啦吧啦",
            "market_status": 1,
            "storage_price": "4000.00000000",
            "discount_status": 0,
            "discount_start_time": null,
            "discount_end_time": null,
            "discount_price": "0.00000000",
            "limit_status": 1,
            "limit_num": 100,
            "power_type": 0,
            "electric_degree": "0",
            "agreement": null,
            "extend": {
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
            "sales_num": 0,
            "sales_usdt": "0.00000000",
            "sales_cny": "0.00000000",
            "is_delete": 0,
            "created_at": "2021-07-28 08:06:50",
            "updated_at": "2021-07-29 08:43:15",
            "period": {
                "id": 1,
                "name": "test2323",
                "issue_status": 0
            }
        }
    ]
}
```

## 商品详情

`api/goods/{goods}`

#### 请求方式

`DELETE`

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
        "id": 1,
        "name": "测试fil商品啦啦啦",
        "images": null,
        "zone": "fil",
        "cate_id": 1,
        "period_id": 1,
        "years": 365,
        "cate": 0,
        "gass_fee": "1.00000000",
        "mortgage": "1.00000000",
        "stock": 9994,
        "spec": "2.00000000",
        "price": "5000.00000000",
        "sort": 1000,
        "purchase_notes": "啦啦啦啦啦啦",
        "business_description": "吧啦吧啦吧啦",
        "market_status": 1,
        "storage_price": "4000.00000000",
        "discount_status": 0,
        "discount_start_time": null,
        "discount_end_time": null,
        "discount_price": "0.00000000",
        "limit_status": 1,
        "limit_num": 100,
        "power_type": 0,
        "electric_degree": "0",
        "agreement": null,
        "extend": {
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
        "sales_num": 0,
        "sales_usdt": "0.00000000",
        "sales_cny": "0.00000000",
        "is_delete": 0,
        "created_at": "2021-07-28 08:06:50",
        "updated_at": "2021-07-29 08:43:15",
        "period": {
            "id": 1,
            "name": "test2323",
            "issue_status": 0
        }
    }
}
```



## 电费价格信息

`api/electrics`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "desc": "最低需要预付2周电费",
        "year": "0.36",
        "limit": "1000",
        "gpu_year": "0.42",
        "end_month": "10",
        "low_water": "0.38",
        "full_water": "0.23",
        "start_month": "6"
    }
}
```

## 专区列表

`api/electrics`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "fil",
            "sort": 0,
            "is_hide": 0
        }
    ]
}
```

