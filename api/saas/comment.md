# 资讯评论

## 列表

#### 接口URL
> {{url}}/comments

#### 请求方式
> GET

| 名称 |  类型  | 必须 |         说明          |
| :--: | :----: | :--: | :-------------------: |
| news_id | int |  是  | 资讯id |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "user_id": 25,
            "news_id": 1,
            "content": "真棒",
            "like_num": 0,
            "is_delete": 0,
            "created_at": "2021-07-30 02:24:26",
            "updated_at": "2021-07-30 02:24:26",
            "is_like": false,
            "user": {
                "id": 25,
                "name": "我修改了昵称",
                "avatar": "fadfdadf.png"
            }
        }
    ]
}
```

## 添加

#### 接口URL
> {{url}}/comments

#### 请求方式
> POST

| 名称 |  类型  | 必须 |         说明          |
| :--: | :----: | :--: | :-------------------: |
| news_id | int |  是  | 资讯id |

#### 成功响应示例

```json
{
    "msg": "评论成功",
    "code": 0,
    "data": {
        "like_num": 0,
        "user_id": 25,
        "news_id": "1",
        "content": "真棒",
        "is_delete": 0,
        "updated_at": "2021-07-30 02:24:26",
        "created_at": "2021-07-30 02:24:26",
        "id": 1,
        "user": {
            "id": 25,
            "name": "我修改了昵称",
            "avatar": "fadfdadf.png"
        }
    }
}
```

## 删除

#### 接口URL
> {{url}}/comments/{comments_id}

#### 请求方式
> DELETE

#### 成功响应示例

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 点赞

#### 接口URL
> {{url}}/comments/{comments_id}/like

#### 请求方式
> POST

#### 成功响应示例

```json
{
    "msg": "点赞成功",
    "code": 0,
    "data": null
}
```

## 取消点赞

#### 接口URL
> {{url}}/comments/{comments_id}/unlike

#### 请求方式
> POST

#### 成功响应示例

```json
{
    "msg": "取消成功",
    "code": 0,
    "data": null
}
```