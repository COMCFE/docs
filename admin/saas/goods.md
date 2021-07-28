# 商品管理

## 商品列表

`admin/goods`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |   是 |       每页条数       |
| keywords  |  string   |  无  |   否 |       搜索关键词       |
| period_id  |  int   |  无  |   否 |       期数id       |
| type  |  int   |  无  |   否 |       商品属性，0-资本垫付，1-自付质押，2-满存算力       |
| cate_id  |  int   |  无  |   否 |       分类id       |
| zone  |  string   |  无  |   否 |       专区       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "测试fil商品",
                "images": null,
                "zone": "fil",
                "cate_id": 1,
                "period_id": 1,
                "years": 365,
                "cate": 0,
                "gass_fee": "1.00000000",
                "mortgage": "1.00000000",
                "stock": 9999,
                "spec": "2.00000000",
                "price": "5000.00000000",
                "sort": 10,
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
                "updated_at": "2021-07-28 08:06:50",
                "period": {
                    "id": 1,
                    "name": "test2323",
                    "issue_status": 0
                },
                "agreements": [
                    {
                        "id": 1,
                        "title": "这是个协议",
                        "content": "这是个测试协议",
                        "intro": "协议",
                        "is_delete": 0,
                        "admin_id": 1,
                        "created_at": "2021-07-28 16:04:29",
                        "updated_at": "2021-07-28 16:04:31",
                        "pivot": {
                            "goods_id": 1,
                            "agreement_id": 1
                        }
                    }
                ]
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/goods?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/goods?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/goods?page=1",
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
        "path": "http://foo.tenancy.com/admin/goods",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 添加商品

`admin/goods`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |            商品名称                 |
|   images   | array |  无  |  否  |          商品图                 |
|   zone   | string |  无  |  是  |                专区                 |
|   period_id   | int |  无  |  是  |           期数id                 |
|   cate   | int |  无  |  是  |     商品属性，0-资本垫付，1-自付质押，2-满存算力     |
|   cate_id   | int |  无  |  是  |              分类id                 |
|   years   | int |  无  |  是  |          商品期限（天），0-永久          |
|   gass_fee   | int |  无  |  否  |            消耗gas                 |
|   mortgage   | int |  无  |  否  |            质押                 |
|   stock   | int |  无  |  是  |             库存               |
|   spec   | double |  无  |  是  |                算力                 |
|   price   | int |  无  |  是  |                价格                 |
|   sort   | int |  无  |  是  |                排序                 |
|   purchase_notes   | string |  无  |  是  |       业务说明        |
|   business_description   | string |  无  |  是  |    购买须知    |
|   power_type   | int |  无  |  否  |       电费类型：0不需要电费/1全年电费/2全年显卡电费/3丰枯转换         |
|   electric_degree   | string |  无  |  否  |                单台矿机耗电(度数/天)         |
|   market_status   | int |  无  |  是  |      是否参与市场         |
|   storage_price   | int |  无  |  否  |       存储价格         |
|   discount_status   | int |  无  |  是  |      限时优惠状态          |
|   discount_start_time   | string |  无  |  否  |限时优惠开始时间 |
|   discount_end_time   | string |  无  |  否  | 限时优惠结束时间 |
|   discount_price   | int |  无  |  否  |   限时优惠价格 |
|   limit_status   | int |  无  |  否  |   是否限购 |
|   limit_num   | int |  无  |  否  |   累计限购数量 |
|   market_price_status   | int |  无  |  否  |   是否展示划线价格 |
|   market_price   | int |  无  |  否  |   划线价格 |
|   intro_status   | int |  无  |  否  |   商品简介状态 |
|   intro   | int |  无  |  否  |   商品简介 |
|   cycle_status   | int |  无  |  否  |   回本周期状态 |
|   cycle   | string |  无  |  否  |  回本周期 |
|   daily_output_status   | int |  无  |  否  |   日产出状态 |
|   daily_output   | string |  无  |  否  |   日产出 |
|   power_status   | int |  无  |  否  |   矿机算力状态 |
|   power   | string |  无  |  否  |   矿机算力 |
|   operate_status   | int |  无  |  否  |   运营维护费状态 |
|   operate   | string |  无  |  否  |   运营维护费 |
|   agreement   | array |  无  |  是  |   协议列表 |

**SUCCESS 返回体**

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "name": "测试fil商品",
        "images": null,
        "zone": "fil",
        "cate_id": "1",
        "period_id": 1,
        "years": 365,
        "cate": "0",
        "gass_fee": "1",
        "mortgage": "1",
        "stock": 9999,
        "spec": 2,
        "price": "5000",
        "sort": "10",
        "purchase_notes": "啦啦啦啦啦啦",
        "business_description": "吧啦吧啦吧啦",
        "power_type": "0",
        "electric_degree": "0",
        "market_status": "1",
        "storage_price": "4000",
        "discount_status": "0",
        "discount_start_time": null,
        "discount_end_time": null,
        "discount_price": 0,
        "limit_status": "1",
        "limit_num": "100",
        "extend": {
            "market_price_status": "1",
            "market_price": "4500",
            "intro_status": "0",
            "intro": null,
            "cycle_status": "1",
            "cycle": "10",
            "daily_output_status": "1",
            "daily_output": "20",
            "power_status": "1",
            "power": "1",
            "operate_status": "1",
            "operate": "20"
        },
        "is_delete": 0,
        "updated_at": "2021-07-28 08:16:36",
        "created_at": "2021-07-28 08:16:36",
        "id": 4
    }
}
```



## 编辑商品

`admin/goods/{goods}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |            商品名称                 |
|   images   | array |  无  |  否  |          商品图                 |
|   zone   | string |  无  |  是  |                专区                 |
|   period_id   | int |  无  |  是  |           期数id                 |
|   cate   | int |  无  |  是  |     商品属性，0-资本垫付，1-自付质押，2-满存算力     |
|   cate_id   | int |  无  |  是  |              分类id                 |
|   years   | int |  无  |  是  |          商品期限（天），0-永久          |
|   gass_fee   | int |  无  |  否  |            消耗gas                 |
|   mortgage   | int |  无  |  否  |            质押                 |
|   stock   | int |  无  |  是  |             库存               |
|   spec   | double |  无  |  是  |                算力                 |
|   price   | int |  无  |  是  |                价格                 |
|   sort   | int |  无  |  是  |                排序                 |
|   purchase_notes   | string |  无  |  是  |       业务说明        |
|   business_description   | string |  无  |  是  |    购买须知    |
|   power_type   | int |  无  |  否  |       电费类型：0不需要电费/1全年电费/2全年显卡电费/3丰枯转换         |
|   electric_degree   | string |  无  |  否  |                单台矿机耗电(度数/天)         |
|   market_status   | int |  无  |  是  |      是否参与市场         |
|   storage_price   | int |  无  |  否  |       存储价格         |
|   discount_status   | int |  无  |  是  |      限时优惠状态          |
|   discount_start_time   | string |  无  |  否  |限时优惠开始时间 |
|   discount_end_time   | string |  无  |  否  | 限时优惠结束时间 |
|   discount_price   | int |  无  |  否  |   限时优惠价格 |
|   limit_status   | int |  无  |  否  |   是否限购 |
|   limit_num   | int |  无  |  否  |   累计限购数量 |
|   market_price_status   | int |  无  |  否  |   是否展示划线价格 |
|   market_price   | int |  无  |  否  |   划线价格 |
|   intro_status   | int |  无  |  否  |   商品简介状态 |
|   intro   | int |  无  |  否  |   商品简介 |
|   cycle_status   | int |  无  |  否  |   回本周期状态 |
|   cycle   | string |  无  |  否  |  回本周期 |
|   daily_output_status   | int |  无  |  否  |   日产出状态 |
|   daily_output   | string |  无  |  否  |   日产出 |
|   power_status   | int |  无  |  否  |   矿机算力状态 |
|   power   | string |  无  |  否  |   矿机算力 |
|   operate_status   | int |  无  |  否  |   运营维护费状态 |
|   operate   | string |  无  |  否  |   运营维护费 |
|   agreement   | array |  无  |  是  |   协议列表 |

**SUCCESS 返回体**

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": {
        "id": 1,
        "name": "测试fil商品啦啦啦",
        "images": null,
        "zone": "fil",
        "cate_id": "1",
        "period_id": 1,
        "years": 365,
        "cate": "0",
        "gass_fee": "1",
        "mortgage": "1",
        "stock": 9999,
        "spec": 2,
        "price": "5000",
        "sort": "10",
        "purchase_notes": "啦啦啦啦啦啦",
        "business_description": "吧啦吧啦吧啦",
        "market_status": "1",
        "storage_price": "4000",
        "discount_status": "0",
        "discount_start_time": null,
        "discount_end_time": null,
        "discount_price": 0,
        "limit_status": "1",
        "limit_num": "100",
        "power_type": "0",
        "electric_degree": "0",
        "agreement": null,
        "extend": {
            "market_price_status": "1",
            "market_price": "4500",
            "intro_status": "0",
            "intro": null,
            "cycle_status": "1",
            "cycle": "10",
            "daily_output_status": "1",
            "daily_output": "20",
            "power_status": "1",
            "power": "1",
            "operate_status": "1",
            "operate": "20"
        },
        "sales_num": 0,
        "sales_usdt": "0.00000000",
        "sales_cny": "0.00000000",
        "is_delete": 0,
        "created_at": "2021-07-28 08:06:50",
        "updated_at": "2021-07-28 08:45:39",
        "period": {
            "id": 1,
            "name": "test2323",
            "issue_status": 0
        }
    }
}
```

## 删除商品

`admin/goods/{goods}`

**请求方式**

`DELETE`

**请求参数**

**SUCCESS 返回体**

```json
{
    "msg": "删除成功",
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
        "stock": 9999,
        "spec": "2.00000000",
        "price": "5000.00000000",
        "sort": 10,
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
        "is_delete": 1,
        "created_at": "2021-07-28 08:06:50",
        "updated_at": "2021-07-28 09:26:47",
        "period": {
            "id": 1,
            "name": "test2323",
            "issue_status": 0
        }
    }
}
```


## 设置排序

`admin/goods/{goods}`/sort

**请求方式**

`PATCH`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   sort   | int |  无  |  是  |                排序                 |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```
