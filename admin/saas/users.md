# 用户管理

## 列表

#### 接口URL
> {{url}}/users

#### 请求方式
> GET

| 参数       | 示例值    | 是否必填 | 参数描述                          |
| :--------- | :-------- | :------- | :-------------------------------- |
| keywords   | 131111111 | 选填     | 用户昵称/ID/注册手机号/注册邮箱号 |
| agency_id  | 1         | 选填     | 代理等级                          |
| is_auth    | 1         | 选填     | 是否实名：`1:是/0:否/-1:全部`     |
| start_time | 123456    | 选填     | 开始时间                          |
| end_time   | 123456    | 选填     | 结束时间                          |


#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 20,
                "name": "新昵称",
                "avatar": null,
                "phone": "",
                "email": "a@qq.com",
                "code": "0CGLBB",
                "agency_id": 1,
                "fix_agency_id": 0,
                "currency_address": null,
                "withdrawal": null,
                "bonus_status": 0,
                "sales_status": 0,
                "state": 0,
                "is_delete": 0,
                "created_at": "2021-07-28 03:55:46",
                "updated_at": "2021-07-28 05:53:28",
                "tel": "",
                "parent": null,
                "agency": null
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/users?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/users?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/users?page=1",
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
        "path": "http://foo.saas.me/admin/users",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 创建

#### 接口URL
> {{url}}/users

#### 请求方式
> POST

| 参数                  | 示例值                          | 是否必填 | 参数描述     |
| :-------------------- | :------------------------------ | :------- | :----------- |
| name                  | test                            | 必填     | 登录账号     |
| avatar                | 111111                          | 必填     | 用户头像     |
| account               | qq@qq.com                       | 必填     | 邮箱、手机号 |
| password              | 123456                          | 必填     | 密码         |
| password_confirmation | 123456                          | 必填     | 确认密码     |
| code                  | 0CGLAS                          | 选填     | 邀请码       |
| agency_id             | 1                               | 选填     | 代理等级     |
| withdrawal            | `{fil:"off",btc:"on",eth:"on"}` | 选填     | 提币权限     |

#### 成功响应示例
```json
{
    "msg": "创建成功",
    "code": 0,
    "data": null
}
```



## 修改

#### 接口URL
> {{url}}/users/{user_id}

#### 请求方式
> PUT

#### 请求Header参数

| 参数                  | 示例值                          | 是否必填 | 参数描述     |
| :-------------------- | :------------------------------ | :------- | :----------- |
| name                  | test                            | 必填     | 登录账号     |
| avatar                | 111111                          | 必填     | 用户头像     |
| account               | qq@qq.com                       | 必填     | 邮箱、手机号 |
| password              | 123456                          | 必填     | 密码         |
| password_confirmation | 123456                          | 必填     | 确认密码     |
| agency_id             | 1                               | 选填     | 代理等级     |
| withdrawal            | `{fil:"off",btc:"on",eth:"on"}` | 选填     | 提币权限     |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```




## 开关：奖励/禁用

#### 接口URL
> {{url}}/users/{user_id}/switch

#### 请求方式
> POST


#### 请求参数

| 参数   | 示例值       | 是否必填 | 参数描述                                  |
| :----- | :----------- | :------- | :---------------------------------------- |
| type   | bonus_status | 必填     | 类型 `bonus_status:分红, sales_status:销售, state:禁用` |
| status | 1           | 必填     | 值 `1:开启/0:关闭`                       |


#### 成功响应示例
```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```



## 删除

#### 接口URL
> {{url}}/users/{user_id}/delete

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



## 获取父级用户

#### 接口URL
> {{url}}/users/{user_id}/parent

#### 请求方式
> GET

#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 20,
        "name": "用户1",
        "phone": "",
        "avatar": null
    }
}
```



## 获取(一级)子集用户

#### 接口URL
> {{url}}/users/{user_id}/subset

#### 请求方式
> GET

#### 请求参数

| 参数   | 示例值       | 是否必填 | 参数描述                                  |
| :----- | :----------- | :------- | :---------------------------------------- |
| currency | fil | 必填     | 分区类型：fil/eth/btc/xch|



#### 成功响应示例
```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "items": {
            "pid": 20,
            "pname": "用户1",
            "avatar": "",
            "self_kj_num": "0.00000000",
            "performance": 0,
            "direct": "0.00000000",
            "indirect": 0,
            "child": [
                {
                    "id": 25,
                    "name": "用户2",
                    "phone": "",
                    "avatar": "safnhk",
                    "self_kj_num": 0,
                    "performance": 0,
                    "direct": 0,
                    "indirect": 0
                }
            ]
        },
        "count": 1,
        "total_count": 1
    }
}

```
