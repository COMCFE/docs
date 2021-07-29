# 反馈管理

## 列表

#### 接口URL
> {{url}}/feedback

#### 请求方式
> GET

|    参数    |    类型    | 默认 | 必须 |           说明           |
| :--------: | :--------: | :--: | :--: | :----------------------: |
|  keywords  |   string   |  无  |  否  |          关键词          |
|   status   |    int     |  无  |  否  | 状态：0-未解决，1-已解决 |
|    tag     |   string   |  无  |  否  |         标签名称         |
| start_time | timestamps |  无  |  否  |         开始时间         |
|  end_time  | timestamps |  无  |  否  |         结束时间         |

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
                "user_id": 25,
                "content": "我有问题",
                "images": [
                    "safnhk.png"
                ],
                "from": "android",
                "tag": "问题类型",
                "status": "0",
                "created_at": "2021-07-29 03:57:44",
                "updated_at": "2021-07-29 03:57:44",
                "user": {
                    "id": 25,
                    "name": "用户2",
                    "avatar": "safnhk",
                    "phone": "",
                    "email": "qq@qq.com",
                    "code": "0CGLBJ",
                    "agency_id": 0,
                    "fix_agency_id": 0,
                    "currency_address": null,
                    "withdrawal": null,
                    "bonus_status": 0,
                    "sales_status": 0,
                    "state": 0,
                    "is_delete": 0,
                    "created_at": "2021-07-28 06:53:39",
                    "updated_at": "2021-07-28 06:53:39"
                }
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/feedback?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/feedback?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/feedback?page=1",
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
        "path": "http://foo.saas.me/admin/feedback",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 反馈回复

#### 接口URL
> {{url}}/feedback/{feedback_id}/reply

#### 请求方式
> POST

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   content    | string |  无  |  是  | 回复内容 |
|   images    | array |  无  |  否  | 图片 |

#### 成功响应示例

```json
{
    "msg": "跟进成功",
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
            "content": "这是内容",
            "images": [
                "111.png"
            ],
            // 回复类型：system-系统，user-用户
            "type": "system",
            "operate_id": 1,
            "created_at": "2021-07-29 05:43:12",
            "updated_at": "2021-07-29 05:43:12"
        }
    ]
}
```

## 反馈解决

#### 接口URL
> {{url}}/feedback/{feedback_id}/solve

#### 请求方式
> PATCH

#### 成功响应示例

```json
{
    "msg": "解决成功",
    "code": 0,
    "data": null
}
```
## 反馈标签-列表

#### 接口URL
> {{url}}/feedback/tag_list

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```

## 反馈标签-添加

#### 接口URL
> {{url}}/feedback/tag_add

#### 请求方式
> POST

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  是  | 标签名称 |
#### 成功响应示例

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": null
}
```

## 反馈标签-编辑

#### 接口URL
> {{url}}/feedback/tag_update/{tag_id}

#### 请求方式
> PUT

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  是  | 标签名称 |
#### 成功响应示例

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": null
}
```

## 反馈标签-删除

#### 接口URL
> {{url}}/feedback/tag_delete/{tag_id}

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