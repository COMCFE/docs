# 个人算力

## 个人算力详情

**方式**

`get`

**路径**

`/api/market/userDetail`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "user_level": 1,      //用户等级
        "max_level": 11,      //最高等级
        "next_level_num": "50.0000",  //下一级所需算力
        "children_num": 0,    //子矿机数量
        "team_num": 0,    //个人矿池总算力
        "pname": "测试"   //主矿机
    }
}
```


## 子矿机

**方式**

`get`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |
| limit  | int  |  是  | 条目数量 默认 20 |
| offset | int  |  是  |  偏移量 默认 0   |

**路径**

`/api/market/userAchievements`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "name": "TL23",       //用户名
            "user_level": 1,      //用户等级
            "self_num": "0.0000",   //自购算力
            "team_num": "0.0000",   //团队算力
            "today_add_num": "0.00000000" //今日新增算力
        },
        {
            "name": "黑色镰刀",
            "user_level": 1,
            "self_num": "0.0000",
            "team_num": "0.0000",
            "today_add_num": "0.00000000"
        }
    ]
}
```


## 子矿机

**方式**

`get`

**参数**

|  名称  | 类型 | 必须 |       说明       |
| :----: | :--: | :--: | :--------------: |

**路径**

`/api/market/userMarketDetail`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "today_salas": 0,   //今日新增销售算力
        "total_salas": 0,   //累计销售算力
        "today_num": 0,     //当时新增分红算力T
        "today_bonus": 0,   //当日新增分红算力
        "total_bonus": 0    //累计分红算力
    }
}
```
