# 市场

## 我的市场详情

**方式**

`GET`

**路径**

`/api/market/details`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "market_icon": "asdsad.png" /*市场等级图标 普通用户为该字段值为NULL*/,
    "market_total": 0 /*市场业绩总和*/,
    "sales_commission": "0" /*销售提成*/,
    "team_commission": "0.0000" /*团队奖励总数*/
  }
}
```

## 市场业绩列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**路径**

`/api/market/achievements`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 3,
      "name": "里斯" /*用户名称*/,
      "avatar": null /*头像*/,
      "team_num": 2000 /*市场业绩*/,
      "user_id": 3
    }
  ]
}
```
