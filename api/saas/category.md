# 商品分类

## 列表

#### 接口URL
> {{url}}/cate

#### 请求方式
> GET

| 名称 |  类型  | 必须 |         说明          |
| :--: | :----: | :--: | :-------------------: |
| zone | string |  否  | 专区:/btc/eth/fil/xch |

#### 成功响应示例

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "zone": "fil",
            "name": "满存算力",
            "sort": 3,
            "is_delete": 0,
            "created_at": "2021-07-29 10:53:49",
            "updated_at": "2021-07-29 11:02:15"
        },
        {
            "id": 2,
            "zone": "eth",
            "name": "asfd",
            "sort": 3,
            "is_delete": 0,
            "created_at": "2021-07-29 10:54:20",
            "updated_at": "2021-07-29 10:58:45"
        }
    ]
}
```