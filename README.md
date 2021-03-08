# VoiceBoard
Fake website develped by Nuxt.js
## Specification
- 透過 async/await 呼叫 API 取得相關的影片資訊並將資訊呈現至頁面中。
### 上方篩選、排序功能列
- 為前端篩選及排序，無需經由 API 篩選及排序
- 排序可以從「發佈時間」、「觀看次數」、「收藏次數」中選擇一種，進行排序
- 長度篩選分別為「不限」、「4 分鐘以下」、「5 - 10 分鐘」、「超過 10 分鐘」，擇一進行篩選
- 沒有篩選結果時，顯示「沒有篩選結果」
- 耳機 icon - [link](https://material.io/tools/icons/?search=headset&icon=headset&style=baseline)

### 頁面設計規格補充

- 全頁水平置中對齊 ( 最大寬度為 1366px )。
- 影片資訊卡定寬定高，每排最多 4 張，卡片間間距最小為 20px，若還有更多空間，請將卡片 **分散對齊** 。
- 卡片超出四張或頁面寬度不足以容納四張，請 **自動換行** 至下一行。
- 滑鼠經過每張卡片時，請將影片縮圖放大 10%，放大過程需漸變。( 影片圖片不可露出黑邊 )
- 影片標題最多為兩行。
- RWD。

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project and deply to ghpage
Have to commit all code before deploy to gh-page
$ npm run generate:gh-pages
$ npm run deploy
```

