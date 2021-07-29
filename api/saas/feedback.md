# 用户反馈

## 列表

#### 接口URL
> {{url}}/feedback

#### 请求方式
> GET

|    参数    |    类型    | 默认 | 必须 |           说明           |
| :--------: | :--------: | :--: | :--: | :----------------------: |
|  limit  |   int   |  无  |  否  |          单页数量          |
|   page   |    int     |  无  |  否  | 页数 |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 25,
            "content": "我有问题",
            "images": [
                "safnhk.png"
            ],
            // 来源
            "from": "android",
            // 反馈标签
            "tag": "问题类型",
            // 状态：1-解决、0-为解决
            "status": "1",
            "created_at": "2021-07-29 03:57:44",
            "updated_at": "2021-07-29 05:47:49"
        }
    ]
}

```

## 用户添加反馈

#### 接口URL
> {{url}}/feedback

#### 请求方式
> POST

|  参数   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
| content | string |  无  |  是  | 反馈内容 |
| from  | string  |  无  |  是 |来源：android，ios   |
| tag  | string  |  无  |  是  |反馈标签  |
| images  | array  |  无  |  是  |图片  |

#### 成功响应示例

```json
{
    "msg": "反馈成功",
    "code": 0,
    "data": null
}
```

## 反馈回复详情

#### 接口URL
> {{url}}/feedback/{feedback_id}/detail

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "feedback_id": 1,
            "content": "这是回复内容",
            "images": [
                "111.png"
            ],
            "type": "system",
            "operate_id": 1,
            "created_at": "2021-07-29 05:43:12",
            "updated_at": "2021-07-29 05:43:12"
        }
    ]
}
```

## 反馈回复

#### 接口URL
> {{url}}/feedback/{feedback_id}/reply

#### 请求方式
> POST

|  参数   |  类型  | 默认 | 必须 |   说明   |
| :-----: | :----: | :--: | :--: | :------: |
| content | string |  无  |  是  | 回复内容 |
| images  | array  |  无  |  是  |图片  |
#### 成功响应示例

```json
{
    "msg": "回复成功",
    "code": 0,
    "data": null
}
```

## 反馈解决

#### 接口URL
> {{url}}/feedback/{feedback_id}/solve

#### 请求方式
> POST

#### 成功响应示例

```json
{
    "msg": "解决成功",
    "code": 0,
    "data": null
}
```
## 反馈标签列表

#### 接口URL
> {{url}}/feedback-tags

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "标签名称222",
            "is_delete": 0,
            "created_at": "2021-07-29T06:00:09.000000Z",
            "updated_at": "2021-07-29T06:08:57.000000Z"
        },
        {
            "id": 2,
            "name": "标签名称333",
            "is_delete": 1,
            "created_at": "2021-07-29T06:00:09.000000Z",
            "updated_at": "2021-07-29T06:11:59.000000Z"
        }
    ]
}
```