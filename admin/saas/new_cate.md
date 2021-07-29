# 资讯栏目管理

## 列表

#### 接口URL
> {{url}}/new-cates

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
            "name": "栏目1",
            "sort": 1,
            "is_delete": 0,
            "admin_id": 1,
            "created_at": "2021-07-29 02:12:26",
            "updated_at": "2021-07-29 02:12:26",
            "admin": {
                "id": 1,
                "name": "超级管理员"
            }
        }
    ]
}
```
## 详情

#### 接口URL
> {{url}}/new-cates/{new-cates_id}

#### 请求方式
> GET

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "栏目1",
        "sort": 1,
        "is_delete": 0,
        "admin_id": 1,
        "created_at": "2021-07-29 02:12:26",
        "updated_at": "2021-07-29 02:12:26"
    }
}
```

## 添加

#### 接口URL
> {{url}}/new-cates

#### 请求方式
> POST

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  是  | 栏目名称 |
|   sort    | int |  无  |  是  | 排序 |
#### 成功响应示例

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": {
        "name": "栏目1",
        "sort": "1",
        "is_delete": 0,
        "admin_id": 1,
        "updated_at": "2021-07-29 02:12:26",
        "created_at": "2021-07-29 02:12:26",
        "id": 1
    }
}
```

## 编辑

#### 接口URL
> {{url}}/new-cates/{new-cates_id}

#### 请求方式
> PUT

|   参数    |  类型  | 默认 | 必须 |   说明   |
| :-------: | :----: | :--: | :--: | :------: |
|   name    | string |  无  |  是  | 栏目名称 |
|   sort    | int |  无  |  是  | 排序 |

#### 成功响应示例

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": {
        "id": 1,
        "name": "栏目1",
        "sort": "22",
        "is_delete": 0,
        "admin_id": 1,
        "created_at": "2021-07-29 02:12:26",
        "updated_at": "2021-07-29 02:22:14"
    }
}
```
## 删除

#### 接口URL
> {{url}}/new-cates/{new-cates_id}

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