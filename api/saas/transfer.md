# 转账

## 校验转账实名验证

`api/check-certifications`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   currency   | string |  无  |  是  |        转账币种    |
|   account   | string |  无  |  是  |        目标账号    |


**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "target_user": {
            "id": 2,
            "name": "下级1",
            "avatar": null,
            "phone": "17760624908",
            "email": null,
            "code": "0CGLAT",
            "agency_id": 0,
            "fix_agency_id": 0,
            "currency_address": null,
            "withdrawal": null,
            "bonus_status": 0,
            "sales_status": 0,
            "state": 0,
            "is_delete": 0,
            "created_at": "2021-07-30 02:44:10",
            "updated_at": "2021-07-30 02:44:10",
            "certification": {
                "id": 2,
                "user_id": 2,
                "name": "bb",
                "number": "987654321",
                "fpic": "",
                "bpic": "",
                "hpic": "",
                "admin_id": 1,
                "status": 1,
                "reason": null,
                "created_at": null,
                "updated_at": null
            }
        },
        "config": {
            "instr": "转账说明",
            "switch": "on",
            "fil_fee": 5,
            "user_min": "10",
            "user_day_limit": "100"
        }
    }
}
```

## 转账

`api/transfer-accounts`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| amount  |  double   |  无  |  是  |             |
| target_user_id  |  int   |  无  |   是 |       目标用户id       |
| pay_password  |  string   |  无  |   是 |       支付密码       |
|   currency   | string |  无  |  是  |        币种    |




**SUCCESS 返回体**

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": {
        "title": "转账支出",
        "target_id": "2",
        "target_type": "user",
        "amount": "20",
        "user_id": 1,
        "currency": "fil",
        "type": "transfer",
        "action": 2,
        "status": 0,
        "updated_at": "2021-07-30 06:06:33",
        "created_at": "2021-07-30 06:06:33",
        "id": 6,
        "target_user_certification": {
            "id": 2,
            "user_id": 2,
            "name": "bb",
            "number": "987654321",
            "fpic": "",
            "bpic": "",
            "hpic": "",
            "admin_id": 1,
            "status": 1,
            "reason": null,
            "created_at": null,
            "updated_at": null
        }
    }
}
```
