# 转账管理

## 列表

#### 接口URL
> {{url}}/transfer

#### 请求方式
> GET

| 筛选参数  | 示例值    | 是否必填 | 参数描述                          |
| :--------- | :-------- | :------- | :-------------------------------- |
| status     | 1         | 选填     | 状态：`0:待审核/1:成功/2:驳回     |
| currency   | fil       | 选填     | 分区类型                          |
| transfer   |           | 选填     | 转账用户                          |
| receiver   |           | 选填     | 收款                          |
| start_time |     | 选填     | 开始时间                          |
| end_time   |     | 选填     | 结束时间                          |


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
                "user_id": 20,
                "target_user_id": 25,
                "transfer_balance": "100.00000000",
                "num": "10.00000000",
                "fee": "1.00000000",
                "currency": "fil",
                "reason": null,
                "status": 0,
                "handler_id": 0,
                "created_at": null,
                "updated_at": null,
                "user": {
                    "id": 20,
                    "name": "用户1",
                    "email": "a@qq.com",
                    "phone": ""
                },
                "target_user": {
                    "id": 25,
                    "name": "用户2",
                    "email": "qq@qq.com",
                    "phone": ""
                },
                "admin": null
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/transfer?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/transfer?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/transfer?page=1",
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
        "path": "http://foo.saas.me/admin/transfer",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 同意

#### 接口URL
> {{url}}/transfer/{transfer_id}/confirm

#### 请求方式
> PUT

#### 成功响应示例
```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```



## 驳回

#### 接口URL
> {{url}}/transfer/{transfer_id}/reject

#### 请求方式
> PUT

| 参数   | 示例值 | 是否必填 | 参数描述 |
| :----- | :----- | :------- | :------- |
| reason | 有问题 | 是       |          |

#### 成功响应示例
```
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```