# 分销商管理


## 分销商列表

`/admin/distributor/index`

**请求方式**

`GET`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  user_id  | int |  无  |  否  |     用户id    |       
  


**返回体**

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "测试",
            "avatar": "123",
            "phone": "17760624907",
            "user_id": 1,
            "parent_id": 0,
            "level": null,    //分销商等级，1-一级分销商，2-二级分销商，3-三级分销商
            "dividend_percentage": 0    //分红比例
        },
        {
            "id": 9,
            "name": "测试2",
            "avatar": null,
            "phone": "17760624906",
            "user_id": 9,
            "parent_id": 0,
            "level": null,
            "dividend_percentage": 0
        }
    ]
}
```


## 修改分销商分红

`/admin/distributor/update`

**请求方式**

`PUT`


**请求参数**

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |
|  user_id  | int |  无  |  是  |     用户id    |       
|  dividend_percentage  | int |  无  |  是  |     分红比例    |       
  


**返回体**

```json
{
    "msg": "修改成功",
    "code": 0,
    "data": null
}
```

