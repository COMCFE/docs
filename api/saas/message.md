# 消息

## 列表

#### 接口URL
> {{url}}/messages

#### 请求方式
> GET

| 名称 |  类型  | 必须 |         说明          |
| :--: | :----: | :--: | :-------------------: |
| type | string |  否  | 类型：system/order |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 2,
            "title": "订单消息标题",
            "type": "order",
            "content": "订单消息内容",
            "created_at": "2021-07-30 02:46:42",
            "read_status": 0
        },
        {
            "id": 1,
            "title": "系统消息标题",
            "type": "system",
            "content": "系统消息内容",
            "created_at": "2021-07-30 02:46:42",
            "read_status": 0
        }
    ]
}
```

## 未读

#### 接口URL
> {{url}}/message-count

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "order": {
            "unread": 1,
            "newest": "订单消息内容"
        },
        "system": {
            "unread": 1,
            "newest": "系统消息标题"
        },
        "count": 2
    }
}
```

## 清除所有消息

#### 接口URL
> {{url}}/message-clear

#### 请求方式
> DELETE

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": null
}
```