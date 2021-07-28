# 分类管理

## 分类列表

`admin/category`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |   是 |       每页条数       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 2,
                "zone": "fil",
                "name": "分类2",
                "sort": 100,
                "is_delete": 0,
                "created_at": "2021-07-28 06:42:39",
                "updated_at": "2021-07-28 06:42:39"
            },
            {
                "id": 1,
                "zone": "fil",
                "name": "分类1",
                "sort": 10,
                "is_delete": 0,
                "created_at": "2021-07-28 06:42:27",
                "updated_at": "2021-07-28 06:42:27"
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/category?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/category?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/category?page=1",
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
        "path": "http://foo.tenancy.com/admin/category",
        "per_page": 20,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```

## 添加分类

`admin/category`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   zone   | string |  无  |  是  |                专区                 |
|   name   | string |  无  |  是  |                名称                 |
|   sort   | int |  无  |  是  |                排序                 |

**SUCCESS 返回体**

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "zone": "fil",
        "name": "分类1",
        "sort": "10",
        "updated_at": "2021-07-28 06:42:27",
        "created_at": "2021-07-28 06:42:27",
        "id": 1
    }
}
```



## 编辑分类

`admin/category/{category}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   zone   | string |  无  |  是  |                专区                 |
|   name   | string |  无  |  是  |                名称                 |
|   sort   | int |  无  |  是  |                排序                 |

**SUCCESS 返回体**

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": {
        "id": 2,
        "zone": "eth",
        "name": "test333",
        "sort": "0",
        "is_delete": 0,
        "created_at": "2021-07-28 06:42:39",
        "updated_at": "2021-07-28 06:46:37"
    }
}
```

## 删除分类

`admin/category/{category}`

**请求方式**

`DELETE`

**请求参数**


**SUCCESS 返回体**

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": {
        "id": 2,
        "zone": "eth",
        "name": "test333",
        "sort": 0,
        "is_delete": 1,
        "created_at": "2021-07-28 06:42:39",
        "updated_at": "2021-07-28 06:47:04"
    }
}
```

## 设置排序

`admin/category/{category}`/sort

**请求方式**

`PATCH`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   sort   | int |  无  |  是  |                排序                 |


**SUCCESS 返回体**

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": null
}
```
