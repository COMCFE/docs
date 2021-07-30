# 系统消息

## 列表

#### 接口URL
> {{url}}/messages

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "title": "系统消息标题",
                "content": "系统消息内容",
                "sender": {
                    "id": 1,
                    "name": "超级管理员"
                },
                "sender_role": "admin",
                "receiver": [],
                "type": "system",
                "created_at": "2021-07-30 02:46:42",
                "updated_at": "2021-07-30 02:46:42"
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/messages?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/messages?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/messages?page=1",
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
        "path": "http://foo.saas.me/admin/messages",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
## 添加

#### 接口URL
> {{url}}/messages

#### 请求方式
> POST

|  参数   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  title  | string |  无  |  是  | 标题 |
|  content  | string |  无  |  是  | 内容 |
|  period_id  | string |  无  |  是  | 期数ID |
#### 成功响应示例

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": null
}
```
## 修改

#### 接口URL
> {{url}}/messages/{messages_id}

#### 请求方式
> PUT

|  参数   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
|  title  | string |  无  |  是  | 标题 |
|  content  | string |  无  |  是  | 内容 |
#### 成功响应示例

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": null
}
```