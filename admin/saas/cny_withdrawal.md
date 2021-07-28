# 提现管理

## 列表

#### 接口URL
> {{url}}/cny_withdrawals

#### 请求方式
> GET

| 参数       | 示例值                                    | 是否必填 | 参数描述                          |
| :--------- | :---------------------------------------- | :------- | :-------------------------------- |
| keywords   | 131111111                                 | 选填     | 用户昵称/ID/注册手机号/注册邮箱号 |
| status     | 1                                         | 选填     | 状态：`0:待审核/1:成功/2:驳回     |
| currency   | fil                                       | 选填     | 分区类型                          |
| address    | f1u7ktn4qvyl3uhgt4u7mppqlm7cgp7gs766r2uta | 选填     | 提币地址                          |
| start_time | 123456                                    | 选填     | 开始时间                          |
| end_time   | 123456                                    | 选填     | 结束时间                          |


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
                "user_id": 3,
                "amount": "100.00",
                // 可提现余额
                "withdraw_balance": "1000.00",
                // 手续费
                "service_charge": "0.00",
                // 提现类型
                "account_type": "alipay",
                // 提现账户
                "account_info": {
                    "name": "张三",
                    "number": "563390164@qq.com"
                },
                "handler_id": 0,
                "status": 0,
                "reason": null,
                "partner_trade_no": null,
                "partner_error_info": null,
                "created_at": "2021-04-28 10:36:18",
                "updated_at": "2021-04-28 10:36:18",
                "user": null,
                "handler": null
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/cny_withdrawals?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/cny_withdrawals?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/cny_withdrawals?page=1",
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
        "path": "http://foo.saas.me/admin/cny_withdrawals",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 同意提现

#### 接口URL
> {{url}}/withdrawals/{withdrawal_id}/agree

#### 请求方式
> PUT

#### 成功响应示例
```json
{
    "msg": "提现同意成功",
    "code": 0,
    "data": null
}
```



## 驳回提现

#### 接口URL
> {{url}}/withdrawals/{withdrawal_id}/reject

#### 请求方式
> PUT

| 参数   | 示例值 | 是否必填 | 参数描述 |
| :----- | :----- | :------- | :------- |
| reason | 有问题 | 是       |          |

#### 成功响应示例
```
{
    "msg": "驳回成功",
    "code": 0,
    "data": null
}
```

