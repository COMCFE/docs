# 电费订单管理

## 电费订单列表

`admin/electric-recharges`

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
| limit  |  int   |  20  |   是 |       每页条数       |
|   status   | int |  无  |  否  |          期数id             |
|   keywords   | string |  无  |  否  |        搜索关键词    |
|   pay_type   | string |  无  |  否  |       支付方式    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |
|   order_type   | int |  无  |  否  | 电费订单类型 0自购 1导入  |

**SUCCESS 返回体**

```json

```

## 确认电费订单

`admin/electric-recharges/{electricOrder}/pass`

**请求方式**

`PUT`

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
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```



## 驳回电费订单

`admin/electric-recharges/{electricOrder}/reject`

**请求方式**

`PUT`

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
    "msg": "驳回成功",
    "code": 0,
    "data": null
}
```



## 导出电费订单列表

`admin/electric-recharges/export/electric_order`

**请求方式**

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   status   | int |  无  |  否  |          期数id             |
|   keywords   | string |  无  |  否  |        搜索关键词    |
|   pay_type   | string |  无  |  否  |       支付方式    |
|   start_time   | string |  无  |  否  |        下单开始时间    |
|   end_time   | string |  无  |  否  |        下单结束时间    |
|   order_type   | int |  无  |  否  | 电费订单类型 0自购 1导入  |



**SUCCESS 返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "filename": "20210729025805-电费订单导出.xlsx"
    }
}
```


## 导入电费订单

`admin/electric-recharges/import`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   account   | int |  无  |  是  |          期数id             |
|   amount   | string |  无  |  是  |      数量    |
|   pay_type   | string |  无  |  是  |       支付方式    |



**SUCCESS 返回体**

```json
{
    "msg": "导入成功",
    "code": 0,
    "data": ""
}
```