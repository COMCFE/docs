# 提币管理

## 列表

#### 接口URL
> {{url}}/withdrawals

#### 请求方式
> GET

| 参数       | 示例值     | 是否必填 | 参数描述                          |
| :--------- | :--------- | :------- | :-------------------------------- |
| keywords   | 131111111  | 选填     | 用户昵称/ID/注册手机号/注册邮箱号 |
| status     | 1          | 选填     | 状态：`0:待审核/1:成功/2:驳回 |
| currency   | fil | 选填     | 分区类型                          |
| address   | f1u7ktn4qvyl3uhgt4u7mppqlm7cgp7gs766r2uta | 选填    | 提币地址                          |
| start_time | 123456     | 选填     | 开始时间                          |
| end_time   | 123456     | 选填     | 结束时间                          |


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
                "user_id": 10,
                // 用户可提现余额
                "withdraw_balance": "1000.00000000",
                "pid": "eae9910ddbe0a6717bcebfb4a14a1534",
                // 提现金额
                "num": "100.00000000",
                // 手续费
                "fee": "10.00000000",
                "from_address": null,
                "to_address": "f1u7ktn4qvyl3uhgt4u7mppqlm7cgp7gs766r2uta",
                "currency": "fil",
                "hash": null,
                "reason": "。kjlj/j",
                "status": 2,
                "handler_id": 5,
                "created_at": "2021-04-26 18:32:28",
                "updated_at": "2021-04-26 18:32:41",
                "user": null,
                "handler": null
            }
        ],
        "first_page_url": "http://foo.saas.me/admin/withdrawals?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://foo.saas.me/admin/withdrawals?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://foo.saas.me/admin/withdrawals?page=1",
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
        "path": "http://foo.saas.me/admin/withdrawals",
        "per_page": 20,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}
```



## 提币

#### 接口URL
> {{url}}/withdrawals/{withdrawal_id}/audit

#### 请求方式
> PUT

| 参数   | 示例值 | 是否必填 | 参数描述                      |
| :----- | :----- | :------- | :---------------------------- |
| status | 1      | 必填     | 状态：`0:待审核/1:成功/2:驳回 |
| reason | 有问题 | 选填     | 驳回原因                      |
| hash   |        | 选填     | 交易hash                      |
| code   |        | 选填     | 谷歌验证码                    |


#### 成功响应示例
```json
{
    "msg": "操作成功",
    "code": 0,
    "data": null
}
```



## 提币导出

#### 接口URL
> {{url}}/withdrawals/export/withdrawal

#### 请求方式
> GET