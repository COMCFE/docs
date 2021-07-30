# 验证码

## 发送验证码

`api/verification-codes`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|   scene   | string |  无  |  是  |        应用场景    |
|   token   | string |  无  |  是  |        顶象token    |
|   account   | string |  无  |  是  |        账号    |


#### SUCCESS 返回体

```json
{
    "msg": "发送成功",
    "code": 0,
    "data": null
}
```

## 校验验证码

`api/verification-codes/check`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| scene  |  string   |  无  |  是  |      应用场景       |
| code  |  string   |  无  |   是 |       验证码       |
|   account   | string |  无  |  否  |        账号    |




#### SUCCESS 返回体

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "ok": true
    }
}
```
