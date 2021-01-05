# 订单

## 订单列表

**方式**

`GET`

**参数**

|    名称    |  类型  | 必须 |                     说明                      |
| :--------: | :----: | :--: | :-------------------------------------------: |
|   type   | int |  否  | 订单状态：默认为全部   待付款：0,挖矿中： 2,已结束：3,已关闭：4            |
|   limit   | int |  否  |                   分页条数    |
|   offset   | int |  否  |                  分页步长    |

**路径**

`/api/orders`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "order_no": "47241609816640930",
            "user_id": 1,
            "goods_id": 1,
            "pay_type": "usdt",
            "total_price": "3223.00",
            "buy_num": 1,
            "specs": 1,
            "order_status": 2, // 待付款：0, 挖矿中： 2, 已结束：3, 已关闭：4 
            "is_delete": 0,
            "close_reason": null,
            "remark": "后台导入,导入者(#1/超级管理员)",
            "pay_time": "2021-01-05 11:17:20",
            "expire_time": "2021-02-05 11:17:20",  // 到期时间
            "total_mining": "0.00000000",   // 累计产出
            "yesterday_mining": "0.00000000",  // 昨日产出
            "admin_id": 0,
            "fil_level": "0",
            "created_at": "2021-01-05 11:17:20",
            "updated_at": "2021-01-05 11:17:20",
            "close_seconds": 0,
            "goods": {
                "id": 1,
                "name": "换风格",
                "description": "地方广泛大概豆腐干",
                "deduct_num": 22,
                "lease_term": 31,
                "price": "3223.00",
                "images": [
                    "Fspls1T8obq0AEbx3UurOsLwyl_u"
                ],
                "detail": "<p>防守对方<img class=\"wscnph\" src=\"http://file.ebo5ns.cn/Ftgw3tcgNgguViymsjtUoVM858xx\" /></p>",
                "sales_num": 0,
                "specs": 1,
                "power": "323.00000000",
                "sort": 0,
                "is_delete": 0,
                "created_at": "2021-01-05 10:47:10",
                "updated_at": "2021-01-05 10:47:10"
            }
        },
        {
            "id": 1,
            "order_no": "16621609816130443",
            "user_id": 1,
            "goods_id": 1,
            "pay_type": "usdt",
            "total_price": "3223.00",
            "buy_num": 1,
            "specs": 1,
            "order_status": 2,
            "is_delete": 0,
            "close_reason": null,
            "remark": "后台导入,导入者(#1/超级管理员)",
            "pay_time": "2021-01-05 11:08:50",
            "expire_time": null,
            "total_mining": "0.00000000",
            "yesterday_mining": "0.00000000",
            "admin_id": 0,
            "fil_level": "0",
            "created_at": "2021-01-05 11:08:50",
            "updated_at": "2021-01-05 11:08:50",
            "close_seconds": 0,
            "goods": {
                "id": 1,
                "name": "换风格",
                "description": "地方广泛大概豆腐干",
                "deduct_num": 22,
                "lease_term": 31,
                "price": "3223.00",
                "images": [
                    "Fspls1T8obq0AEbx3UurOsLwyl_u"
                ],
                "detail": "<p>防守对方<img class=\"wscnph\" src=\"http://file.ebo5ns.cn/Ftgw3tcgNgguViymsjtUoVM858xx\" /></p>",
                "sales_num": 0,
                "specs": 1,
                "power": "323.00000000",
                "sort": 0,
                "is_delete": 0,
                "created_at": "2021-01-05 10:47:10",
                "updated_at": "2021-01-05 10:47:10"
            }
        }
    ]
}
```

