# 用户管理


## 用户列表

`/admin/users`

**请求方式**

`GET`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|    名称    |  类型  | 默认 | 必须 |   说明   |
| :--------: | :----: | :--: | :--: | :------: |
|    name    | string |  无  |  否  |   昵称   |
|   phone    | string |  无  |  否  |  手机号  |
|   limit    |  int   |  无  |  否  | 每页条数 |
|  level  | int |  无  |  否  | 分销商等级 |   
  


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 11,
                "name": "二级分销商2",
                "avatar": null,
                "phone": "17760624903",
                "code": "0CGLAZ",
                "agency_id": 1,
                "currency_address": null,
                "state": 0,
                "created_at": "2021-04-01 10:10:08",
                "updated_at": "2021-04-01 10:10:08",
                "tel": "17760624903",
                "parent": {
                    "id": 4,
                    "name": "一级分销商",
                    "avatar": null,
                    "created_at": "2021-04-01 10:10:08"
                },
                "user_relations": {
                    "user_id": 11,
                    "level": 2,
                    "dividend_percentage": 0
                }
            },
            {
                "id": 10,
                "name": "二级分销商",
                "avatar": null,
                "phone": "17760624902",
                "code": "0CGLAY",
                "agency_id": 1,
                "currency_address": null,
                "state": 0,
                "created_at": "2021-04-01 10:07:18",
                "updated_at": "2021-04-01 10:07:18",
                "tel": "17760624902",
                "parent": {
                    "id": 4,
                    "name": "一级分销商",
                    "avatar": null,
                    "created_at": "2021-04-01 10:07:18"
                },
                "user_relations": {
                    "user_id": 10,
                    "level": 2,
                    "dividend_percentage": 0
                }
            }
        ],
        "first_page_url": "http://ylq.hashark.vip/admin/users?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ylq.hashark.vip/admin/users?page=1",
        "next_page_url": null,
        "path": "http://ylq.hashark.vip/admin/users",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```


