# 充值流水管理

## 列表

#### 接口URL
> {{url}}/wallets/logs

#### 请求方式
> GET

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   keywords    | string |  无  |  否  |  关键词  |
|   currency    | string |  无  |  否  | 资产类型 |
| start_time | timestamps  |  无  |  否  | 开始时间 |
| end_time  | timestamps  |  无  |  否  | 结束时间 |
| type  | string  |  无  |  是  | 流水类型：recharge |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 5,
                "title": "充值",
                "user_id": 5,
                "target_id": 0,
                "target_type": "3",
                "amount": "1000.00000000",
                "action": 1,
                "status": 1,
                "currency": "fil",
                "type": "recharge",
                "extend": null,
                "created_at": "2021-04-19 10:37:38",
                "updated_at": "2021-04-19 10:37:38"
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/wallets/logs?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/wallets/logs?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/wallets/logs?page=1",
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
        "path": "http://foo.saas.me/admin/wallets/logs",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```


