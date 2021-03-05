# 邀请

## 邀请列表

**方式**

`GET`

**参数**

|  名称  | 类型 | 必须 |          说明          |
| :----: | :--: | :--: | :--------------------: |
| level  | int  |  否  | 邀请等级:1-一级/2-二级 |
| limit  | int  |  是  |    条目数 默认为 20    |
| offset | int  |  是  |    条目数 默认为 0     |

**路径**

`/api/invite/records`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": [
    {
      "id": 3,
      "name": "里斯" /*名称*/,
      "avatar": "asdas.png" /*头像*/,
      "phone": "183****4307" /*手机*/,
      "ori_phone": "18311224307" /*原始手机号:null-点击呈现不做呈现*/,
      "user_id": 3,
      "parent_id": 1,
      "pparent_id": 1,
      "created_at": "2020-05-07 17:13:04" /*时间*/,
      "reward_num": 10 /*奖励个数*/
    }
  ]
}
```

## 邀请统计

**方式**

`GET`

**路径**

`/api/invite/count`

**响应**

`Status code 200`

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "directCount": 0,
    "indirectCount": 1
  }
}
```