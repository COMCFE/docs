# 转账

## 实名认证校验

**方式**

`POST`

**路径**

`/api/check-certifications`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
|  phone |string|  是  | 目标用户电话号码 |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "target_user": {
            "id": 4,				//目标用户id
            "name": "0CGLAV",			//姓名
            "avatar": null,		
            "phone": "18244277417",		
            "code": "0CGLAV",
            "agency_id": 1,
            "currency_address": null,
            "state": 0,
            "created_at": "2021-03-31 10:22:02",
            "updated_at": "2021-03-31 10:22:02",
            "certification": {
                "id": 3,
                "user_id": 4,
                "name": "测试",			//目标用户真实姓名
                "number": "1",
                "fpic": "1",
                "bpic": "1",
                "hpic": "1",
                "admin_id": 1,
                "status": 1,
                "reason": null,
                "created_at": null,
                "updated_at": null
            }
        },
        "config": {
             "day_max": 1000,			//用户单日转账上限
             "day_min": 10,			//单次最低转账数量
             "service_charge": 5			//手续费
        }
    }
}
```
```json
{
    "msg": "您还未实名认证",
    "code": 1002,
    "errors": null
}
```
```json
{
    "msg": "对方未实名认证",
    "code": 1006,
    "errors": null
}
```


## 转账申请

**方式**

`POST`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| amount |string|  是  |     转账个数     |
| target_user_id  | int  |  是  |  目标用户id   |
| pay_password   | string  |  是  |  支付密码   |

**路径**

`/api/transfer-accounts`

**响应**

`Status code 200`

```json
{
    "msg": "操作成功",
    "code": 0,
    "data": {
        "title": "转账支出",
        "target_id": 0,
        "target_user_id": 4,
        "amount": "100",				//转账金额
        "user_id": 1,
        "currency": "fil",
        "type": "transfer_accounts",
        "action": 2,
        "status": 0,
        "fee": "5",					//手续费
        "updated_at": "2021-03-31 12:05:56",
        "created_at": "2021-03-31 12:05:56",			//申请时间
        "id": 5,
        "target_user_certification": {
            "id": 3,
            "user_id": 4,
            "name": "测试",				//收款人真实姓名
            "number": "1",
            "fpic": "1",
            "bpic": "1",
            "hpic": "1",
            "admin_id": 1,
            "status": 1,
            "reason": null,
            "created_at": null,
            "updated_at": null
        }
    }
}
```


## 转账校验验证码

**方式**

`POST`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| code   | string  |  是  |  验证码   |

**路径**

`/api/check-code`

**响应**

`Status code 200`

```json
{
    "msg": "验证成功",
    "code": 0,
    "data": null
}
```
