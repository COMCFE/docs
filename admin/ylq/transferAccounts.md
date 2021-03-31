# 转账管理


## 转账列表

`/admin/transfer-accounts`

**请求方式**

`GET`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  status  | int |  无  |  否  |     状态    |       
|  page      |  int   |  1  |  是  |       当前页数  |
|  limit      |  int   |  20  |  是  |       每页条数       |     


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 5,
                "title": "转账支出",
                "user_id": 1,
                "target_user_id": 4,
                "target_id": 0,
                "amount": "100.00000000",
                "action": 2,
                "status": 0, //状态:0-待审核/1-转账成功/2-转账失败
                "currency": "fil",
                "type": "transfer_accounts",
                "fee": "5.0000",
                "extend": null,
                "created_at": "2021-03-31 12:05:56",
                "updated_at": "2021-03-31 12:05:56",
                "user": {
                    "id": 1,
                    "name": "测试",
                    "avatar": "123",
                    "phone": "17760624907",
                    "code": "0CGLAS",
                    "agency_id": 0,
                    "currency_address": null,
                    "state": 0,
                    "created_at": "2021-03-31 10:01:12",
                    "updated_at": "2021-03-31 10:01:12"
                },
                "target_user": {
                    "id": 4,
                    "name": "0CGLAV",
                    "avatar": null,
                    "phone": "18244277417",
                    "code": "0CGLAV",
                    "agency_id": 1,
                    "currency_address": null,
                    "state": 0,
                    "created_at": "2021-03-31 10:22:02",
                    "updated_at": "2021-03-31 10:22:02"
                }
            }
        ],
        "first_page_url": "http://ylq.hashark.vip/admin/transfer-accounts?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://ylq.hashark.vip/admin/transfer-accounts?page=1",
        "next_page_url": null,
        "path": "http://ylq.hashark.vip/admin/transfer-accounts",
        "per_page": 15,
        "prev_page_url": null,
        "to": 5,
        "total": 5
    }
}
```


## 转账确认

`/admin/transfer-accounts/{walletLog}/confirm-transfer`

**请求方式**

`PUT`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
 

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

## 转账驳回

`/admin/transfer-accounts/{walletLog}/reject-transfer`

**请求方式**

`PUT`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
 

**返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```

