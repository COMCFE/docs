# 资讯管理

## 列表

#### 接口URL
> {{url}}/news

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
                "title": "夺冠了",
                "cover": "2211.png",
                "content": "这是内容",
                "cate_id": 1,
                "like_num": 0,
                "comment_num": 0,
                // 置顶
                "is_top": 0,
                "is_delete": 0,
                "admin_id": 0,
                "created_at": "2021-07-29 02:26:25",
                "updated_at": "2021-07-29 02:26:25",
                "cate": {
                    "id": 1,
                    "name": "栏目1"
                }
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/news?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/news?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/news?page=1",
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
        "path": "http://foo.saas.me/admin/news",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```
## 添加

#### 接口URL
> {{url}}/news

#### 请求方式
> POST

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   title    | string |  无  |  是  | 咨询标题 |
|   cover    | string |  无  |  是  | 封面图 |
| cate_id | int  |  无  |  是  | 栏目id |
| content  | string  |  无  |  是  | 咨询内容 |
#### 成功响应示例

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "title": "夺冠了",
        "cover": "2211.png",
        "content": "这是内容",
        "cate_id": "1",
        "updated_at": "2021-07-29 02:26:25",
        "created_at": "2021-07-29 02:26:25",
        "id": 1
    }
}
```

## 详情

#### 接口URL
> {{url}}/news/{news_id}

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "title": "夺冠了",
        "cover": "2211.png",
        "content": "这是内容",
        "cate_id": 1,
        "like_num": 0,
        "comment_num": 0,
        // 置顶：1是，0否
        "is_top": 0,
        "is_delete": 0,
        "admin_id": 0,
        "created_at": "2021-07-29 02:26:25",
        "updated_at": "2021-07-29 02:26:25",
        "cate": {
            "id": 1,
            "name": "栏目1",
            "sort": 22,
            "is_delete": 0,
            "admin_id": 1,
            "created_at": "2021-07-29 02:12:26",
            "updated_at": "2021-07-29 02:22:14"
        }
    }
}
```
## 编辑

#### 接口URL
> {{url}}/news/{news_id}

#### 请求方式
> PUT

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   title    | string |  无  |  是  | 咨询标题 |
|   cover    | string |  无  |  是  | 封面图 |
| cate_id | int  |  无  |  是  | 栏目id |
| content  | string  |  无  |  是  | 咨询内容 |
#### 成功响应示例

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "title": "夺冠了111",
        "cover": "2211.png",
        "content": "这是内容",
        "cate_id": 1,
        // 点赞数量
        "like_num": 0,
        // 评论数量
        "comment_num": 0,
        // 置顶：1是，0否
        "is_top": 0,
        "is_delete": 0,
        "admin_id": 1,
        "created_at": "2021-07-29 02:26:25",
        "updated_at": "2021-07-29 02:51:07"
    }
}
```

## 删除

#### 接口URL
> {{url}}/news/{news_id}

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

## 置顶

#### 接口URL
> {{url}}/news/top/{news_id}

#### 请求方式
> PUT

#### 成功响应示例

```json
{
    "msg": "置顶成功",
    "code": 0,
    "data": null
}
```