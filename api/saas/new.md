# 资讯

## 栏目列表

#### 接口URL
> {{url}}/news-cates

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
            "name": "栏目1",
            "sort": 22,
            "is_delete": 0,
            "admin_id": 1,
            "created_at": "2021-07-29 02:12:26",
            "updated_at": "2021-07-29 02:22:14"
        }
    ]
}
```

## 列表

#### 接口URL
> {{url}}/news

#### 请求方式
> GET

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| cate_id | string |  是  | 栏目id |
|  limit  |  int   |  否  |        |
|  page   |  int   |  否  |        |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "title": "夺冠了111",
            "cover": "2211.png",
            "cate_id": 1,
            "comment_num": 0,
            "like_num": 0,
            "created_at": "2021-07-29 02:26:25",
            "is_like": false,
            "cate": {
                "id": 1,
                "name": "栏目1"
            }
        },
        {
            "id": 2,
            "title": "夺冠了111",
            "cover": "2211.png",
            "cate_id": 1,
            "comment_num": 0,
            "like_num": 0,
            "created_at": "2021-07-29 02:26:25",
            "is_like": false,
            "cate": {
                "id": 1,
                "name": "栏目1"
            }
        }
    ]
}
```

## 详情

#### 接口URL
> {{url}}/news/{news_id}

#### 请求方式
> GET

#### 成功响应示例

```## 详情
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "title": "夺冠了111",
        "cover": "2211.png",
        "content": "这是内容",
        "cate_id": 1,
        "like_num": 0,
        "comment_num": 0,
        "is_top": 0,
        "is_delete": 0,
        "admin_id": 1,
        "created_at": "2021-07-29 02:26:25",
        "updated_at": "2021-07-29 03:04:52",
        "is_like": false
    }
}
```

## 点赞

#### 接口URL
> {{url}}/news/{news_id}/like

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
> {{url}}/news/{news_id}/unlike

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