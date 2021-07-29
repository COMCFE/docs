# 登录

## 登录

`admin/login`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
| account  |  string   |  无  |  是  |      账号      |
| password  |  string   |  无  |  否 |       密码       |
| verification_code  |  string   |  无  |  否 |       验证码       |
| code  |  string   |  无  |  否 |       谷歌验证码       |
| do_bind  |  int   |  无  |  是 |       是否绑定谷歌验证码       |

**SUCCESS 返回体**

```json
{
    "msg": "登录成功",
    "code": 0,
    "data": {
        "token": "J3jv7ZIf-D_IQVG1LbiTNlOJ4f69RtaZLOWZdA3Z:BCq4ey5NGSYJyswrNQ3BCkpf0pc=:eyJyZXR1cm5Cb2R5Ijoie1wiZmlsZW5hbWVcIjpcIiQoa2V5KVwiLFwiaGFzaFwiOlwiJChldGFnKVwiLFwid2lkdGhcIjpcIiQoaW1hZ2VJbmZvLndpZHRoKVwiLFwiaGVpZ2h0XCI6XCIkKGltYWdlSW5mby5oZWlnaHQpXCIsXCJtaW1lXCI6XCIkKG1pbWVUeXBlKVwifSIsInNjb3BlIjoicWQtZmlsZSIsImRlYWRsaW5lIjoxNjI3NTYyMDExfQ==",
        "admin": {
            "id": 1,
            "name": "超级管理员",
            "state": 0,
            "admin_token": "49a5bc52569836a5298400d5c13ccf6d",
            "updated_at": "2021-07-29 15:33:31"
        },
        "security": 1
    }
}
```

## 退出登录

`admin/logout`

**请求方式**

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |

**SUCCESS 返回体**

```json
{
    "msg": "退出登录成功",
    "code": 0,
    "data": null
}
