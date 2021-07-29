# 用户

## 个人信息

#### 接口URL
> {{url}}/user

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
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
        "updated_at": "2021-07-28 06:53:39",
        "cer_status": -1,
        "market_icon": "1615888782194t78pyecnao.png",
        "paypass_status": false,
        "inviter": {
            "id": 20,
            "name": "用户1",
            "avatar": null,
            "created_at": "2021-07-28 06:53:39",
            "certification": null
        },
        "agency": null
    }
}
```

## 用户详情

#### 接口URL
> {{url}}/user/info

#### 请求方式
> GET

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| account | string  |  无  |  是  | 账号：email/phone |


#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 25,
        "name": "用户2",
        "avatar": "safnhk",
        "phone": "",
        "email": "qq@qq.com",
        "cer_status": -1
    }
}
```
## 用户更新

#### 接口URL
> {{url}}/user

#### 请求方式
> PATCH

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| name | string  |  无  |  是  | 用户昵称 |
| avatar | string  |  无  |  是  | 头像 |


#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 25,
        "name": "我修改了昵称",
        "avatar": "fadfdadf.png",
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
        "updated_at": "2021-07-29 09:35:07",
        "cer_status": -1,
        "market_icon": "1615888782194t78pyecnao.png",
        "agency": null
    }
}
```

## 账号换绑

#### 接口URL
> {{url}}/user/change

#### 请求方式
> PATCH

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| account | string  |  无  |  是  | 账号：email/phone |
| code | string  |  无  |  是  | 验证码 |


#### 成功响应示例

```json
{
    "msg": "账号换绑成功",
    "code": 0,
    "data": null
}
```
## 密码修改

#### 接口URL
> {{url}}/user/password

#### 请求方式
> PATCH

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| password | string  |  无  |  是  | 新密码 |
| password_confirmation | string  |  无  |  是  | 确认密码 |
| old_password | string  |  无  |  是  | 旧密码 |


#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```
## 设置支付密码

#### 接口URL
> {{url}}/user/paypassword

#### 请求方式
> PATCH

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| code | string  |  无  |  是  | 验证码 |
| password | string  |  无  |  是  | 支付密码 |

#### 成功响应示例

```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
}
```

## 忘记密码

#### 接口URL
> {{url}}/user/forget-password

#### 请求方式
> POST

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| name | string  |  无  |  是  | 昵称 |
| account | string  |  无  |  是  | 账户：email/phone |
| code | string  |  无  |  是  | 验证码 |
| password | string  |  无  |  是  | 密码 |
| password_confirmation | string  |  无  |  是  | 确认密码 |

#### 成功响应示例

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": {
        "token": "49fcdc860dc7d84c6330cc4c5ff3da17"
    }
}
```

## 绑定提币地址

#### 接口URL
> {{url}}/coin/address

#### 请求方式
> POST

|  参数   | 类型 | 默认 | 必须 |   说明   |
| :-----: | :--: | :--: | :--: | :------: |
| type | string  |  无  |  是  | 类型：fil/btc/eth/xch |
| address | string  |  无  |  是  | 地址 |

#### 成功响应示例

```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
}
```
