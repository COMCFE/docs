# 商品

## 列表

**方式**

`GET`

**参数**

|  名称  |  类型  | 必须 |            说明            |
| :----: | :----: | :--: | :------------------------: |
| limit  |  int   |  是  |      条目数 默认为 20      |
| offset |  int   |  是  |      条目数 默认为 0       |
|  zone  | string |  是  | 专区:time-限时/btc/eth/fil |
|  cate_id  | int |  是  | 商品分类ID |

**路径**

`/api/goods`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "满存算力",
            "price": "3180.0000",
            "market_price": "4180.0000",
            "spec": 100,
            "years": 3, // 期限 0 为永久
            "stock": 298,
            "limit": 0,
            "images": [
                "http://xxxx"
            ],
            "rate": "30",
            "power": "1",
            "power_waste": "10", 
            "daily_output": "0.012",
            "cycle": "360",   // 回本周期
            "before": "10.0000",
            "after": "20.0000",
            "electric_degree": "30", 
            "custody_rate": "30%",
            "risk_description": "空腹蝴蝶谷湖订单价格杜建国交电费都看过缴费的",
            "business_description": "飞机哦和规范化分交话费尽快还你及客服",
            "period_id": 1,
            "end_time": null,
            "is_delete": 0,
            "sort": 0,
            "zone": "fil",
            "cate_id": 1,  // 商品分类ID
            "type": "common",
            "created_at": "2021-01-20 11:39:12",
            "updated_at": "2021-01-20 14:02:49",
            "end_seconds": -1,
            "period": {
                "id": 1,
                "name": "20201220"
            }
        }
    ]
}
```