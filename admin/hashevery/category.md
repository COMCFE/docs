# 商品分类管理


## 获取商品分类列表

`admin/category`

**请求方式**

`GET`

**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| limit | int |  20  |  否  | 默认分页条数 |
| zone | string |  无  |  否  | 分类所属分区"fil,eth,btc" |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [],
        "first_page_url": "http://hashevery.test/admin/category?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://hashevery.test/admin/category?page=1",
        "next_page_url": null,
        "path": "http://hashevery.test/admin/category",
        "per_page": 20,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
```
## 添加商品分类

`admin/category`

**请求方式**

`POST`

**请求参数**

|        名称        |  类型  | 默认 | 必须 |              说明               |
| :----------------: | :----: | :--: | :--: | :-----------------------------: |
|       zone        | string |  无  |  是  |     所属分区 "fil,eth,btc"  |
|      name       | string |  无  |  是  |      分类名称        |
|      sort       | int |  无  |  是  |       排序(越小越靠前)       |

**返回体**

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "zone": "fil",
        "name": "满存算力",
        "sort": 0,
        "updated_at": "2021-01-20 10:53:49",
        "created_at": "2021-01-20 10:53:49",
        "id": 1
    }
}
```
## 修改商品分类

`admin/category/{category}`

**请求方式**

`PUT`

**请求参数**

|        名称        |  类型  | 默认 | 必须 |              说明               |
| :----------------: | :----: | :--: | :--: | :-----------------------------: |
|       zone        | string |  无  |  是  |     所属分区 "fil,eth,btc"  |
|      name       | string |  无  |  是  |      分类名称        |
|      sort       | int |  无  |  是  |       排序(越小越靠前)       |

**返回体**

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": {
        "id": 2,
        "zone": "eth",
        "name": "急速封装",
        "sort": 3,
        "is_delete": 0,
        "created_at": "2021-01-20 10:54:20",
        "updated_at": "2021-01-20 10:57:20"
    }
}
```

## 删除商品分类

`admin/category/{category}`

**请求方式**

`delete`

**请求参数**

无

**返回体**

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": {
        "id": 2,
        "zone": "eth",
        "name": "急速封装",
        "sort": 3,
        "is_delete": 1,
        "created_at": "2021-01-20 10:54:20",
        "updated_at": "2021-01-20 10:58:45"
    }
}
```

## 设置商品分类排序

`admin/category/{category}/sort`

**请求方式**

`patch`

**请求参数**

|        名称        |  类型  | 默认 | 必须 |              说明               |
| :----------------: | :----: | :--: | :--: | :-----------------------------: |
|      sort       | int |  无  |  是  |       排序(越小越靠前)       |

**返回体**

```json
{
    "msg": "编辑成功",
    "code": 0,
    "data": null
}
```