# 规格管理

## 规格列表

`admin/spec`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |   是 |       每页条数       |

#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "test",
                "created_at": "2021-07-28 06:34:38",
                "updated_at": "2021-07-28 06:34:38"
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/spec?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/spec?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/spec?page=1",
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
        "path": "http://foo.tenancy.com/admin/spec",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 添加规格

`admin/spec`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |

#### SUCCESS 返回体

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": null
}
```



## 编辑规格

`admin/spec/{spec}`

#### 请求方式

`PUT`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  否  |                名称                 |

#### SUCCESS 返回体

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```

## 删除规格

`admin/spec/{spec}`

#### 请求方式

`DELETE`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数


#### SUCCESS 返回体

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```
