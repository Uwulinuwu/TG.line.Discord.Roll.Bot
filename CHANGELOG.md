# 更新

## 2022/01/27

增加 【身分組管理】 功能

.rolereact help

可以查看教學

## 2022/01/05

TRPG API @HKTRPG 服務

回覆格式為JSON，請求方式為GET
請求的位置:
<https://www.hktrpg.com:20721/api/>

示範:
<https://www.hktrpg.com:20721/api?msg=1d100>

[api](views/image/api.png)

## 2022/01/04

每日廢話  (名字) 生產一條你的廢話

## 2021/11/30

【每日功能】
每日笑話    顯示一條笑話
每日動漫    顯示一條動漫金句
每日一言    顯示一條金句
每日黃曆    顯示今日黃曆
每日毒湯    顯示一條有毒的雞湯
每日情話    顯示一條情話
每日靈簽    抽取一條觀音簽
每日急口令    顯示一條急口令
每日大事    顯示今天歷史上的大事
每日(星座) 顯示每日星座運程 如 每日白羊 每日金牛 每日巨蟹

## 2021/11/29

更新HKTRPG骰子機械人的結構
先載入mongoose 再載入chatbot 部份
(然後代碼又變得更丑了.....)

修正
Discord shardids

更新
讓擲骰開關功能的實際行爲符合文檔説明 #496
感謝 rixinsc

更新
whatsapp 對登入碼的使用
heroku 上應該也可以有實用性了?

## 2021/11/08

* TRPG扮演發言功能
* 你可以設定一個角色的名字及頭像，
* 然後你只要輸入指令和說話，就會幫你使用該角色發言。
* .me .me1 .myname

## 2021/11/01

* 增加 .x 多重擲骰 如.5 cc 80
* 增加定時發訊功能 .at / .cron
  
## 2021-10-20

* 增加 5B10S：不加總的擲骰，並按大至小排序 - Krymino Lin的意見

## 2021-10-09

* 更新topgg-autoposter，舊版時常CRASH，令HKTRPG出錯
* 更新了PLURK，令速度提升
* 改良CODE，移除了沒用的AWAIT ASYNC，令程式反應更快
* 部份使用了IIFE

## 2021-09-30

* 新增匯出團錄時，可以去掉不必要的日期標示，Choice 排序功能顯示改良，.CC7build random

## 2021-09-18

* 增加功能showMeAtTheWorld

## 2021-09-10

* 新增追逐戰.chase

## 2021-09-01

* 新增作品集

## Version 1.30.0

* 新增Event 功能
