# 品牌商管理

## 品牌商信息

#### 接口URL
> {{url}}/tenant/info

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "tenant": {
            "id": 0,
            "phone": "1311111111",
            "email": "foo@qq.com",
            "name": "商户FOO",
            // 到期时间
            "expire_at": "2021-07-28 03:04:44",
            // 状态 0禁用 1启用
            "status": 1,
            "created_at": "2021-07-28 03:04:44",
            "updated_at": "2021-07-28 03:04:45",
            "data": "{\"tenancy_db_name\": \"tenantfoo\"}",
            // 到期天数
            "due_day": 0
        },
        "tip_day": false
    }
}
```
## 消息列表

#### 接口URL
> {{url}}/tenant/messages

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
                "tenant_id": "foo",
                "message_id": 1,
                "read_status": 1,
                "is_delete": 0,
                "created_at": "2021-07-29 14:25:42",
                "updated_at": "2021-07-29 06:26:22",
                "message": {
                    "id": 1,
                    "title": "消息标题",
                    "content": "消息内容",
                    "sender": 1,
                    "sender_role": "1",
                    "receiver": "1",
                    "type": "system",
                    "created_at": "2021-07-29 14:25:17",
                    "updated_at": "2021-07-29 14:25:19"
                }
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/tenant/messages?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/tenant/messages?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/tenant/messages?page=1",
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
        "path": "http://foo.saas.me/admin/tenant/messages",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 消息未读

#### 接口URL
> {{url}}/tenant/messages-count

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    // 未读数量
    "data": 1
}
```
## 操作说明-分类

#### 接口URL
> {{url}}/tenant/help-cate

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
            "name": "分类名",
            "sort": 0,
            "is_delete": 0,
            "admin_id": 0,
            "created_at": "2021-07-29 14:32:16",
            "updated_at": "2021-07-29 14:32:19"
        }
    ]
}
```

## 操作说明-详情

#### 接口URL
> {{url}}/tenant/help

#### 请求方式
> POST

|  参数   |  类型  | 默认 | 必须 |  说明  |
| :-----: | :----: | :--: | :--: | :----: |
| cate_id | string |  无  |  是  | 分类id |

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
                "cate_id": 1,
                "title": "标题",
                "content": "这是内容",
                "sort": 0,
                "is_delete": 0,
                "created_at": "2021-07-29 14:32:36",
                "updated_at": "2021-07-29 14:32:39"
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/tenant/help?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/tenant/help?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/tenant/help?page=1",
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
        "path": "http://foo.saas.me/admin/tenant/help",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```

## 获取配置信息

#### 接口URL
> {{url}}/tenant/config

#### 请求方式
> GET

| 参数 |  类型  | 默认 | 必须 |                      说明                      |
| :--: | :----: | :--: | :--: | :--------------------------------------------: |
| type | string |  无  |  是  | renewal:续费协议/use:使用协议/contact:联系配置 |

#### 成功响应示例

```json
{// 使用协议
    "msg": "ok",
    "code": 0,
    "data": "使用协议"
}
```

```
{// 续费协议
    "msg": "ok",
    "code": 0,
    "data": "续费协议"
}
```

```
{// 联系配置
    "msg": "ok",
    "code": 0,
    "data": {
        "qq": "qq111",
        "wechat": "wechat"
    }
}
```

## 续费套餐-列表

#### 接口URL
> {{url}}/tenant/set-meals

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
            // 价格
            "price": "10.00",
            // 套餐天数
            "days": 2,
            // 套餐描述
            "desc": "特惠",
            "created_at": "2021-07-29 14:52:01",
            "updated_at": "2021-07-29 14:52:04"
        }
    ]
}
```
## 续费套餐-下单

#### 接口URL
> {{url}}/tenant/order/store

#### 请求方式
> POST

| 参数 |  类型  | 默认 | 必须 |                      说明                      |
| :--: | :----: | :--: | :--: | :---------: |
| meal_id | int |  无  |  否  | 套餐id |
| days | int |  无  |  否  | 天数 |
| pay_price | int |  无  |  是  | 支付价格 |
`注：meal_id、days至少有一个`

#### 成功响应示例

```json
{
    "msg": "续费成功",
    "code": 0,
    "data": {
        "order_id": 2
    }
}
```
## 续费订单-详情

#### 接口URL
> {{url}}/tenant/order/{order_id}

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 2,
        "order_no": "T34361627542099869",
        "tenant_id": "foo",
        "days": 2,
        "pay_price": "10.00000000",
        "pay_type": "bank",
        "credential": null,
        "bank_info": false,
        "remark": null,
        "reason": null,
        "order_type": 0,
        "status": 0,
        "pay_time": null,
        "confirm_time": null,
        "admin_id": 0,
        "is_delete": 0,
        "extend": "{\"id\": 1, \"days\": 2, \"price\": \"10.00\"}",
        "created_at": "2021-07-29 07:01:39",
        "updated_at": "2021-07-29 07:01:39"
    }
}
```

## 续费订单-凭证提交

#### 接口URL
> {{url}}/tenant/order/credential

#### 请求方式
> GET

| 参数 |  类型  | 默认 | 必须 |                      说明                      |
| :--: | :----: | :--: | :--: | :---------: |
| order_id | int |  无  |  否  | 续费订单id |
| credential | string |  无  |  否  | 凭证图链接 |
#### 成功响应示例

```json
{
    "msg": "提交成功， 请耐心等待审核...",
    "code": 0,
    "data": null
}
```

## 续费订单-列表

#### 接口URL
> {{url}}/tenant/order

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
                "id": 2,
                "order_no": "T34361627542099869",
                "tenant_id": "foo",
                "days": 2,
                "pay_price": "10.00000000",
                "pay_type": "bank",
                "credential": "111.png",
                "bank_info": false,
                "remark": null,
                "reason": null,
                "order_type": 0,
                "status": 1,
                "pay_time": "2021-07-29 07:17:15",
                "confirm_time": null,
                "admin_id": 0,
                "is_delete": 0,
                "extend": "{\"id\": 1, \"days\": 2, \"price\": \"10.00\"}",
                "created_at": "2021-07-29 07:01:39",
                "updated_at": "2021-07-29 07:17:15"
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/tenant/order?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/tenant/order?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/tenant/order?page=1",
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
        "path": "http://foo.saas.me/admin/tenant/order",
        "per_page": 20,
        "prev_page_url": null,
        "to": 2,
        "total": 2
    }
}
```