# 期数管理

## 期数列表

`admin/periods`

**请求方式**

`GET`

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| page  |  int   |  无  |  是  |       当前页数      |
| limit  |  int   |  20  |  是  |       每页条数      |
| type  |  string   |  无  |   否 |       专区       |
| cate  |  int   |  无  |   否 |       期数属性，0-资本垫付，1-自付质押，2-满存算力       |
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
                "name": "测试期数",
                "extend": {
                    "lock": "75",
                    "pawn": "0",
                    "frozen": "20",
                    "withdrawable": "5"
                },
                "gas": "0.00000000",
                "pledge": "0.00000000",
                "back_interest": "0.00000000",
                "interest": "7.00",
                "before": "0.0000",
                "after": "10.0000",
                "spec_id": 1,
                "type": "fil",
                "cate": 0,
                "is_bonus": 1,
                "group_id": 0,
                "sort": 10,
                "created_at": "2021-07-28 07:02:10",
                "updated_at": "2021-07-28 07:02:10",
                "issue_status": 0,
                "specs": null
            }
        ],
        "first_page_url": "http://foo.tenancy.com/admin/periods?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.tenancy.com/admin/periods?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.tenancy.com/admin/periods?page=1",
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
        "path": "http://foo.tenancy.com/admin/periods",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 添加期数

`admin/periods`

**请求方式**

`POST`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |
|   spec_id   | int |  无  |  是  |                规格                 |
|   type   | string |  无  |  是  |                专区                 |
|   interest   | int |  无  |  是  |             利息比例            |
|   cate   | int |  无  |  是  |         期数属性，0-资本垫付，1-自付质押，2-满存算力            |
|   sort   | int |  无  |  是  |             排序            |
|   before   | int |  无  |  是  |          运营维护费回本前            |
|   after   | int |  无  |  是  |          运营维护费回本后            |
|   withdrawable   | int |  无  |  否  |          可用比例            |
|   lock   | int |  无  |  否  |          锁仓比例            |
|   pawn   | int |  无  |  否  |          质押比例            |
|   frozen   | int |  无  |  否  |          冻结比例            |

**SUCCESS 返回体**

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "extend": {
            "withdrawable": "5",
            "lock": "75",
            "pawn": "0",
            "frozen": "20"
        },
        "name": "测试期数",
        "cate": "0",
        "spec_id": "1",
        "type": "fil",
        "interest": "7",
        "sort": "10",
        "before": "0",
        "after": "10",
        "group_id": 0,
        "updated_at": "2021-07-28 07:02:10",
        "created_at": "2021-07-28 07:02:10",
        "id": 1,
        "issue_status": 0
    }
}
```



## 编辑期数

`admin/periods/{periods}`

**请求方式**

`PUT`

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   name   | string |  无  |  是  |                名称                 |
|   spec_id   | int |  无  |  是  |                规格                 |
|   type   | string |  无  |  是  |                专区                 |
|   interest   | int |  无  |  是  |             利息比例            |
|   cate   | int |  无  |  是  |         期数属性，0-资本垫付，1-自付质押，2-满存算力            |
|   sort   | int |  无  |  是  |             排序            |
|   before   | int |  无  |  是  |          运营维护费回本前            |
|   after   | int |  无  |  是  |          运营维护费回本后            |
|   withdrawable   | int |  无  |  否  |          可用比例            |
|   lock   | int |  无  |  否  |          锁仓比例            |
|   pawn   | int |  无  |  否  |          质押比例            |
|   frozen   | int |  无  |  否  |          冻结比例            |

**SUCCESS 返回体**

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "name": "test2323",
        "extend": {
            "withdrawable": "5",
            "lock": "80",
            "pawn": "0",
            "frozen": "15"
        },
        "gas": "0.00000000",
        "pledge": "0.00000000",
        "back_interest": "0.00000000",
        "interest": "8",
        "before": "10",
        "after": "20",
        "spec_id": "1",
        "type": "fil",
        "cate": "0",
        "is_bonus": 1,
        "group_id": 0,
        "sort": "0",
        "created_at": "2021-07-28 07:02:10",
        "updated_at": "2021-07-28 07:23:31",
        "issue_status": 0
    }
}
```

## 删除期数

`admin/periods/{periods}`

**请求方式**

`DELETE`

**请求参数**


**SUCCESS 返回体**

```json
{
    "msg": "删除成功",
    "code": 0,
    "data": null
}
```


## 挖矿分发

`admin/periods/mining/distribution`

**请求方式**

`POST`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**
```json

```


## 分发记录

`admin/periods/logs`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**
```json

```

## 导出分发记录

`admin/periods/export/release_log`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**
```json

```


## 分发撤销

`admin/periods/cancel/{log_id}`

**请求方式**

`PUT`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |


**SUCCESS 返回体**
```json

```


## 期数还币流水

`admin/periods/back/{period_id}`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |

**SUCCESS 返回体**
```json

```


## 导出期数还币流水

`admin/periods/export/return_period_log`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |

**SUCCESS 返回体**
```json

```


## 期数列表（用于筛选）

`admin/periods/get_all`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| type  |  string   |  无  |   是 |      专区      |

**SUCCESS 返回体**
```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "test2323",
            "spec_id": 1,
            "issue_status": 0,
            "specs": null
        }
    ]
}
```


## 根据期数名称获取规格列表（用于筛选）

`admin/periods/by_name`

**请求方式**

`GET`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| name  |  string   |  无  |   是 |      期数名称      |

**SUCCESS 返回体**
```json
{
    "msg": "ok",
    "code": 0,
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
            "gas": "0.00000000",
            "pledge": "0.00000000",
            "back_interest": "0.00000000",
            "interest": "8.00",
            "before": "10.0000",
            "after": "20.0000",
            "spec_id": 1,
            "type": "fil",
            "cate": 0,
            "is_bonus": 1,
            "group_id": 0,
            "sort": 0,
            "created_at": "2021-07-28 07:02:10",
            "updated_at": "2021-07-28 07:23:31",
            "issue_status": 0,
            "specs": null
        }
    ]
}
```


## 矿池分红状态

`admin/periods/bonus/{period}`

**请求方式**

`PUT`

**请求参数**
|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| is_bonus  |  int   |  无  |   否 |       是否有矿池分红，0-否，1-是       |

**SUCCESS 返回体**
```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
}
```
