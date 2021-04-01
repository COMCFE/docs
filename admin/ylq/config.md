# 配置管理


## 转账配置

`/admin/configs/transfer-accounts`

**请求方式**

`GET` `PUT`


**请求参数**

|  名称  | 类型  | 默认 | 必须 |         说明         |
| :----: | :---: | :--: | :--: | :------------------: |
| day_min | string |  无  |  否  | 用户单次转账最低个数 |
| day_max | string |  无  |  否  | 用户单日转账上限 |
| service_charge | string |  无  |  否  | 手续费 |

**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "day_max": 1000,
        "day_min": 10,
        "service_charge": 5
    }
}
```
```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```
