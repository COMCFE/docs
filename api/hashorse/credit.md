# 共振池

## 共振池首页

**方式**

`GET`

**路径**

`api/credit`

**参数**
无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "tolal": 0,  // 授信总资产
        "release": 0, // 已释放
        "yesterday_release": 0,// 昨日释放
        "credit_num": 20,  // 可参与总数
        "used_credit_num": 0 ,// 已参与数量
        "tip": "科达股份的经济法" // 参与说明
    }
}
```
