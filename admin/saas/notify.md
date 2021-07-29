# 系统消息

## 系统消息列表

#### 接口URL
> /messages

#### 请求方式
> GET

#### 请求Query参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| page     | 1 | 必填 | 当前页数 |
| limit     | 20 | 必填 | 每页条数 |

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "title": "系统消息",
                "content": "这是系统消息",
                "sender": {
                    "id": 1,
                    "name": "超级管理员"
                },
                "sender_role": "admin",
                "receiver": null,
                "type": "system",
                "created_at": "2021-07-29 06:35:23",
                "updated_at": "2021-07-29 06:35:23"
            },
            {
                "id": 1,
                "title": "系统消息",
                "content": "这是系统消息",
                "sender": {
                    "id": 1,
                    "name": "超级管理员"
                },
                "sender_role": "admin",
                "receiver": null,
                "type": "system",
                "created_at": "2021-07-29 06:34:47",
                "updated_at": "2021-07-29 06:34:47"
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/messages?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/messages?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/messages?page=1",
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
        "path": "http://foo.tenancy.com/admin/messages",
        "per_page": 15,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```



## 发送系统消息

#### 接口URL
> /messages

#### 请求方式
> POST


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| title     | 111 |  必填 | 消息标题 |
| content     | 111 |  必填 | 消息内容 |
| period_id     | 1 |  必填 | 期数id |

#### 成功响应示例
```json
{
	"msg": "发送成功",
	"code": 0,
	"data": null
}
```

## 修改系统消息

#### 接口URL
> /messages/{message}

#### 请求方式
> PUT


#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Authorization     | {{token}} |  必填 | token |

#### 请求Body参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| title     | 111 |  必填 | 消息标题 |
| content     | 111 |  必填 | 消息内容 |

#### 成功响应示例
```json
{
	"msg": "修改成功",
	"code": 0,
	"data": null
}
```
