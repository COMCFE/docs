# 应用主题

## 详情

`admin/design`

请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|  名称  |  类型  | 默认 | 必须 |         说明         |
| :----: | :----: | :--: | :--: | :------------------: |

#### SUCCESS 返回体

```json

```

## 设置主题

`admin/design`

#### 请求方式

`POST`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   app_name   | string |  无  |  是  |   app名称   |
|   start_logo   | string |  无  |  是  |   启动页logo   |
|   inside_logo   | string |  无  |  是  |   应用内部logo   |
|   invite_logo   | string |  无  |  是  |   邀请页logo   |
|   template_id   | string |  无  |  是  |   模板id   |

#### SUCCESS 返回体

```json
{
    "msg": "设置成功",
    "code": 0,
    "data": null
}
```



## 更新主题

`admin/design`

#### 请求方式

`PUT`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数

|   名称   |  类型  | 默认 | 必须 |                说明                 |
| :------: | :----: | :--: | :--: | :---------------------------------: |
|   start_logo   | string |  无  |  是  |   启动页logo   |
|   inside_logo   | string |  无  |  是  |   应用内部logo   |
|   invite_logo   | string |  无  |  是  |   邀请页logo   |
|   rgb_color   | string |  无  |  是  |   颜色   |


#### SUCCESS 返回体

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```

## 设计模板列表

`admin/design/template_list`

#### 请求方式

`GET`

#### 请求Header参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 请求参数


#### SUCCESS 返回体

```json

```
