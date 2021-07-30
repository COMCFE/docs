# 邀请

## 用户邀请列表

`api/invite/records`

请求方式

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
|   level   | int |  无  |  是  |        层级    |


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
            "phone": "1774908",
            "user_id": 2,
            "parent_id": 1,
            "pparent_id": 0,
            "created_at": "2021-07-30 02:44:10"
        }
    ]
}
```

## 获取用户邀请数量

`api/invite/count`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |



#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "directCount": 1,
        "indirectCount": 0,
        "usdtTotal": "",
        "dealFriendsCount": 0
    }
}
```
