# 我的设备

## 设备列表

**路径**
` /equipments `

**方式**

GET
|  名称  | 类型 | 默认 | 必须 |   说明   |
| :----: | :--: | :--: | :--: | :------: |
| zone | string  |  无   |  否  |  分类名称：IPFS:fil/ETH:eth/BTC:btc  |
| offset | int  |  0   |  是  |  偏移量  |
| limit  | int  |  15  |  是  | 每页条数 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "orders": [
            {
                "id": 1,
                "num": 1,//购买数
                "status": 3,//状态 2-已确认(部署中)/3-挖矿中/4-已结束
                "recovery": 0,//是否回本0:未回本 1:回本
                "total_output": "0",//累计产出
                "yesterday_output": "0",//昨日产出
                "total_price": "344400.0000",//订单总价
                "goods_order": {
                    "order_id": 1,
                    "spec_num": 168,//规格数
                    "period_id": 5,
                    "spec_id": 1,
                    "period": {
                        "id": 5,
                        "name": "20210201-283T"//期数
                    },
                    "spec": {
                        "id": 1,
                        "name": "64G"//规格
                    }
                },
                "assets": {
                    "order_id": 1,
                    "fz_num": "100.80000000",//封装数
                    "total_ming": "268.80000000"//挖矿总数
                }
            }
        ],
        "total": "504"//设备总数
    }
}
```
## 设备详情

**路径**
` /equipment/{order} `

**方式**

GET

**响应**

`Status code 200`

```json
  {
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "order_no": "G35481614822220453",
        "user_id": 2,
        "num": 1,
        "pay_price": "53312.6934",
        "total_price": "344400.0000",
        "pay_type": "usdt",
        "credential": null,
        "usdt_price": "6.46",
        "coupon_amount": "0.0000",
        "electric_remnant_days": 0,
        "electric_total_days": 0,
        "dig_remnant_days": 0,
        "dig_total_days": 0,
        "dig_start_time": "2021-03-04 09:43:44",
        "dig_end_time": "2031-03-04 09:43:44",
        "total_output": "268.8",
        "yesterday_output": "268.80000000",
        "status": 3,
        "recovery": 0,
        "reason": null,
        "bank_info": null,
        "remark": null,
        "admin_id": 1,
        "pay_time": "2021-03-04 09:43:40",
        "confirm_time": "2021-03-04 09:43:40",
        "created_at": "2021-03-04 09:43:40",
        "updated_at": "2021-03-04 09:43:49",
        "order_cate": 1,
        "order_type": 1,
        "return_pledge": "14.11200000",
        "return_gas": "33.60000000",
        "wait_gas": "0.00000000",
        "wait_pledge": "53.08800000",//
        "close_seconds": null,
        "goods_order": {
            "id": 1,
            "goods_id": 1,
            "order_id": 1,
            "user_id": 2,
            "name": "168T/永久IPFS算力机",
            "price": "344400.0000",
            "image": "1611713695134ggwaw6yc66m.png",
            "zone": "fil",
            "spec": {
                "id": 1,
                "name": "2222"
            },
            "years": 0,
            "rate": "年产出为预估值，会根据全网算力变化而变化",
            "rate_desc": "134.4",
            "power": 0,
            "daily_output": "0.00000000",
            "electric_price": null,
            "electric_degree": "0",
            "custody_rate": "2",
            "electric_days": 0,
            "power_type": 0,
            "before": "20.0000",
            "after": "0.0000",
            "period_id": 5,
            "type": "common",
            "created_at": "2021-03-04 09:43:40",
            "updated_at": "2021-03-04 09:43:40",
            "spec_id": 1,
            "period": {
                "id": 5,
                "name": "20210201-283T"
            }
        },
        "assets": {
            "id": 1,
            "order_id": 1,
            "total_ming": "268.80000000",//挖矿总数
            "available": "13.44000000",//可用数量
            "lock": "201.60000000",//锁仓数量
            "frozen": "0.00000000",//冻结数量
            "pawn": "0.00000000",//抵押数量
            "fz_num": "100.80000000",//封装数
            "pledge": "67.20000000",//使用质押币数量
            "gas": "33.60000000",//Gas消耗数量
            "return_pledge": "14.11200000",//已归还质押币数量
            "return_gas": "33.60000000",//已归还Gas消耗数量
            "created_at": "2021-03-04 09:43:49",
            "updated_at": "2021-03-04 11:00:34"
        },
		//归还明细
         "return_log": [
            {
                "id": 1,
                "order_id": 1,
                "pledge": "14.11200000",//质押币
                "gas": "33.60000000",//gas
                "interest": "6.0480",//利息6%
                "created_at": "2021-03-04 09:46:00",
                "updated_at": "2021-03-04 09:46:00"
            }
        ]
    }
}
```

## 资产明细

**路径**

 ` orders/miner_log/{order_id} `

**方式**

GET

**参数**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|action |否  |string |收入 income,支出 expend   |
|type |否  |string | ``` 锁仓 fil:lock , 可用 fil:available,抵押'fil:pawn',挖矿 miner:release   ``` |
|offset |否  |int |  |
|limit |否  |int |  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "title": "挖矿分发",
            "user_id": 2,
            "target_user_id": 0,
            "target_id": 1,
            "amount": "268.80000000",//挖矿数
            "action": 1,
            "status": 1,
            "currency": "fil",
            "type": "miner:release",
            "extend": {
                "fz_num": "100.80000000"//封装数
            },
            "created_at": "2021-03-04 15:24:57",
            "updated_at": "2021-03-04 15:24:57"
        }
    ]
}
```

## 锁仓线性释放

**路径**

` orders/linear_release/{order_id} `

**方式**

GET

**参数**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|offset |否  |int |  |
|limit |否  |int |  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "  "logs": [
            {
                "amount": "201.60000000",//金额
                "created_at": "2021-03-04 15:24:57"//创建时间
            }
        ],
        "already": "1.12000000",// 已释放(FIL)
        "total": "201.60000000"//累计收益(FIL)
    }
}

```
