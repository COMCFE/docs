# 认证管理

## 列表

#### 接口URL
> {{url}}/certifications

#### 请求方式
> GET

| 名称  |  类型  | 默认 |        必须         |   说明   |
| :---: | :----: | :--: | :-----------------: | :------: |
| keywords  | string |  无  |         否          |   用户昵称/ID/注册号   |
| cer_name | string |  无  |         否          |  认证姓名  |
| status |  int   |  否  | 否 |0:待审核/1:通过/2:驳回/-1:全部|

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "data": {
            "current_page": 1,
            "data": [
                {
                    "id": 1,
                    "user_id": 20,
                    "name": "哈哈哈",
                    "number": "510821199706189113",
                    "fpic": "20210420140641436.jpeg",
                    "bpic": "20210420140652643.jpeg",
                    "hpic": "20210420140655784.jpeg",
                    "admin_id": 0,
                    "status": 0,
                    "reason": "0",
                    "created_at": "2021-04-20 14:07:24",
                    "updated_at": "2021-04-20 14:08:26",
                    "user": {
                        "id": 20,
                        "name": "用户1",
                        "phone": "",
                        "email": "a@qq.com"
                    },
                    "admin": null
                }
            ],
            "first_page_url": "http://foo.saas.me/admin/certifications?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://foo.saas.me/admin/certifications?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://foo.saas.me/admin/certifications?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": null,
                    "label": "Next &raquo;",
                    "active": false
                }
            ],
            "next_page_url": null,
            "path": "http://foo.saas.me/admin/certifications",
            "per_page": 15,
            "prev_page_url": null,
            "to": 1,
            "total": 1
        },
        "wait_count": 1
    }
}
```
## 同意认证

#### 接口URL
> {{url}}/certifications/{certification_id}/pass

#### 请求方式
> PUT

#### 成功响应示例

```json
{
    "msg": "通过认证成功",
    "code": 0,
    "data": null
}
```

## 驳回认证

#### 接口URL
> {{url}}/certifications/{certification_id}/reject

#### 请求方式
> PUT

| 参数 |  类型  | 默认 |        必须         |   说明   |
| :---: | :----: | :--: | :-----------------: | :------: |
| reason | string |  无  |         是         |   驳回原因   |

#### 成功响应示例

```json
{
    "msg": "驳回认证成功",
    "code": 0,
    "data": null
}
```