# 市场

## 我的市场

`api/market/details`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   currency   | string |  无  |  是  |        市场类型    |


#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "self_num": "4.00000000",
        "market_total": 4,
        "team_commission_cny": 0,
        "team_commission_usdt": 0,
        "sales_commission_cny": 0,
        "sales_commission_usdt": 0,
        "icon": "1615888782194t78pyecnao.png"
    }
}
```

## 市场业绩列表

`api/market/achievements`

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
|   currency   | string |  无  |  是  |        市场类型    |




#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "name": "下级1",
            "avatar": null,
            "team_num": "0.00000000",
            "user_id": 2
        }
    ]
}
```


## 代理等级信息

`api/level_info`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |




#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "list": [
            {
                "name": "注册用户",
                "condition": {
                    "desc": "等级奖励：无奖励"
                },
                "requirement": "注册可达",
                "icon": "1615888782194t78pyecnao.png"
            }
        ]
    }
}
```