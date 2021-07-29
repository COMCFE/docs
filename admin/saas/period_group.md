# 期数分组管理

## 期数分组列表

`admin/group`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |  是  |       每页条数      |
| zone |  string   |  无  |   否 |       专区       |
| cate  |  int   |  无  |   否 |       期数分组属性，0-资本垫付，1-自付质押，2-满存算力       |
| keywords  |  string   |  无  |   否 |       名称或id       |
| is_issue  |  int   |  无  |   否 |       是否分发，0-否，1-是       |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "测试分组",
                "zone": "fil",
                "extend": null,
                "created_at": "2021-07-29 03:33:21",
                "updated_at": "2021-07-29 03:33:21",
                "periods": [
                    {
                        "id": 1,
                        "name": "test2323",
                        "extend": {
                            "lock": "80",
                            "pawn": "0",
                            "frozen": "15",
                            "withdrawable": "5"
                        },
                        "gas": "10.00000000",
                        "pledge": "10.00000000",
                        "back_interest": "0.00000000",
                        "interest": "8.00",
                        "before": "10.0000",
                        "after": "20.0000",
                        "spec_id": 1,
                        "type": "fil",
                        "cate": 0,
                        "is_bonus": 1,
                        "group_id": 1,
                        "sort": 0,
                        "created_at": "2021-07-28 07:02:10",
                        "updated_at": "2021-07-29 03:20:08",
                        "issue_status": 0
                    }
                ]
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/group?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/group?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/group?page=1",
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
        "path": "http://foo.tenancy.com/admin/group",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 添加期数分组

`admin/group`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |
|   zone   | string |  无  |  是  |                专区                 |

**SUCCESS 返回体**

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": null
}
```



## 编辑期数分组

`admin/group/{id}`

**请求方式**

`PUT`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |

**SUCCESS 返回体**

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```

## 分组期数展示

`admin/group/{id}`

**请求方式**

`PUT`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   group_id   | int |  无  |  是  |         分组id           |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |  是  |       每页条数      |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "test2323",
                "extend": {
                    "lock": "80",
                    "pawn": "0",
                    "frozen": "15",
                    "withdrawable": "5"
                },
                "gas": "10.00000000",
                "pledge": "10.00000000",
                "back_interest": "0.00000000",
                "interest": "8.00",
                "before": "10.0000",
                "after": "20.0000",
                "spec_id": 1,
                "type": "fil",
                "cate": 0,
                "is_bonus": 1,
                "group_id": 1,
                "sort": 0,
                "created_at": "2021-07-28 07:02:10",
                "updated_at": "2021-07-29 03:20:08",
                "issue_status": 0
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/group/periods?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/group/periods?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/group/periods?page=1",
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
        "path": "http://foo.tenancy.com/admin/group/periods",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```


## 将期数移出分组

`admin/group/remove/{period}`

**请求方式**

`PATCH`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

**SUCCESS 返回体**

```json
{
    "msg": "移除成功",
    "code": 0,
    "data": null
}
```


## 期数分组映射

`admin/group/mapping`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   zone   | string |  无  |  是  |                专区                 |

**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "测试分组",
            "zone": "fil",
            "extend": null,
            "created_at": "2021-07-29 03:33:21",
            "updated_at": "2021-07-29 03:33:21"
        }
    ]
}
```


## 分组分发流水

`admin/group/{id}/logs`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   limit   | int |  20  |  是  |                每页条数                 |

**SUCCESS 返回体**

```json

```


## 分组总算力

`admin/group/{id}/total`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

**SUCCESS 返回体**

```json

```

## 分发

`admin/group/issue/{id}`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   per_ming_num   | int |  无  |  是  |         单T挖矿数        |

**SUCCESS 返回体**

```json
{
    "msg": "分发成功",
    "code": 0,
    "data": null
}
```

## 分发

`admin/group/cancel/issue/{log}`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |

**SUCCESS 返回体**

```json
{
    "msg": "撤销成功",
    "code": 0,
    "data": null
}
```