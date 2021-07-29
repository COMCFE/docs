# 业绩核算

## 业绩核算订单列表

`admin/report/forms`

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
|   account   | string |  无  |  否  |        搜索关键词    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "order_total_amount": {
            "usdt_total_amount": "2175.00000000",
            "cny_total_amount": "5300.00000000",
            "close_seconds": null,
            "advance_type": 1,
            "goods_order": null
        },
        "sales_total_amount": {
            "usdt_total_amount": "0.00000000",
            "cny_total_amount": "0.00000000"
        },
        "withdrawal_total_amount": {
            "usdt_total_amount": 0,
            "cny_total_amount": 0
        },
        "items": {
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
                    "user": {
                        "id": 1,
                        "name": "测试",
                        "tel": "17760624907",
                        "certification": null
                    },
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
                    },
                    "sub_commission": null
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
                    "user": {
                        "id": 1,
                        "name": "测试",
                        "tel": "17760624907",
                        "certification": null
                    },
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
                    },
                    "sub_commission": null
                }
            ],
            "first_page_url": "http://foo.tenancy.com/admin/report/forms?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://foo.tenancy.com/admin/report/forms?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://foo.tenancy.com/admin/report/forms?page=1",
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
            "path": "http://foo.tenancy.com/admin/report/forms",
            "per_page": "20",
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```



## 导出业绩核算订单列表

`admin/orders/export/team_order`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   account   | string |  无  |  否  |        搜索关键词    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |




**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "filename": "17760624907-20210729055639-团队订单导出.xlsx"
    }
}
```
