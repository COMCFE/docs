# 市场管理

## 列表

#### 接口URL
> {{url}}/agencies

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
            "name": "等级1",
            "icon": "111.png",
            "condition": {
                // 自购
                "'self'": "100",
                // 团队
                "'team'": "200",
                // 销售
                "'sales'": "50"
            },
            "equities": {
                // fil/eth/btc/xch
                "'fil'": {
                    // 销售奖励
                    "'sales'": "10",
                    // 间推奖励
                    "'indirect'": "2",
                    // 回本后分红
                    "'bonus_after'": "4",
                    // 回本前分红
                    "'bonus_before'": "3"
                }
            },
            "created_at": "2021-07-29 01:52:41",
            "updated_at": "2021-07-29 01:52:41"
        }
    ]
}
```
## 添加

#### 接口URL
> {{url}}/agencies

#### 请求方式
> POST

#### 成功响应示例

```json
{
    "msg": "添加成功",
    "code": 0,
    "data": null
}
```

## 编辑

#### 接口URL
> {{url}}/agencies/{agencies_id}

#### 请求方式
> PUT

|  参数  |  类型  | 默认 | 必须 |   说明   |
| :----: | :----: | :--: | :--: | :------: |
| name | string |  无  |  是  | 等级名称 |
| icon | string |  无  |  是  | 等级图标 |
| condition | array |  无  |  是  | 升级条件 |
| equities | array |  无  |  是  | 享受权益 |

#### 成功响应示例

```json
{
    "msg": "更新成功",
    "code": 0,
    "data": null
}
```
## 删除

#### 接口URL
> {{url}}/agencies/{agencies_id}

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