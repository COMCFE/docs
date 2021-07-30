# 首页

## 首页数据

`api/home`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "ipfs": {
            "tipset_height": "976,854",
            "total_power": "8.260",
            "active_miners": "2799",
            "block_reward": "24.6207",
            "mining_income_str_one_day": "0.0402",
            "one_day_fil_str": "345,964",
            "now_pledge_collateral": "0.1896",
            "pledge_collateral": "96,170,609",
            "one_day_messages": "1,310,955",
            "current_fil_str": "152,539,234",
            "total_account": "1142234",
            "avg_block_tipset": "30.22",
            "avg_blocks_in_tipset_str": "4.88",
            "add_power_cost": "6.55",
            "current_base_fee_str": "0.16",
            "fil_destroy_total": "27,176,418",
            "total_fil_str": "2,000,000,000",
            "flow_rate": "7.63%",
            "unit_price": "$50.47"
        },
        "eth": {
            "network_computing_power": "535.34375764124",
            "current_computing_difficulty": "6.90362661254",
            "current_currency_price": "13300.747714",
            "every_m_output_per_day": "3.07E-5"
        },
        "chia": {
            "height": "642855",
            "addressCount": "74816",
            "netspace": "31.31",
            "xchPerDay": "0.2285388657"
        },
        "real_time": [
            {
                "symbol": "FIL",
                "price_usd": "50.157",
                "percent_change_24h": "1.7",
                "volume_24h_usd": "37244950"
            },
            {
                "symbol": "BTC",
                "price_usd": "40146.6",
                "percent_change_24h": "0.49",
                "volume_24h_usd": "564275877"
            },
            {
                "symbol": "ETH",
                "price_usd": "2430.47",
                "percent_change_24h": "4.6",
                "volume_24h_usd": "168960663"
            },
            {
                "symbol": "XCH",
                "price_usd": "205.9",
                "percent_change_24h": "5.53",
                "volume_24h_usd": "3134195"
            },
            {
                "symbol": "USDT",
                "price_usd": "0.9988",
                "percent_change_24h": "0.11",
                "volume_24h_usd": "2198333"
            },
            {
                "symbol": "TRX",
                "price_usd": "0.0625",
                "percent_change_24h": "1.95",
                "volume_24h_usd": "4875970"
            }
        ]
    }
}
```

## 代币涨幅

`api/increases`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "btc": {
            "price": "208423.3650",
            "increase": "-0.58"
        },
        "eth": {
            "price": "13212.3735",
            "increase": "0.71"
        },
        "fil": {
            "price": "297.9706",
            "increase": "0.59"
        },
        "usdt": {
            "price": 6.35,
            "increase": "-0.02"
        }
    }
}
```

## 昨日收益

`api/incomes`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "fil": "0.00000000",
        "btc": "0.00000000",
        "eth": "0.00000000",
        "xch": "0.00000000"
    }
}
```
