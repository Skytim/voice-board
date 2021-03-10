# [VoiceBoard](https://github.com/Skytim/voice-board)

Fake [VoiceTube]() website develped by Nuxt.js
[Demo](https://skytim.github.io/voice-board/)
## Specification
- [x] 透過 async/await 呼叫 API 取得相關的影片資訊並將資訊呈現至頁面中。
### 上方篩選、排序功能列
- [x] 為前端篩選及排序，無需經由 API 篩選及排序
- [x] 排序從「發佈時間」、「觀看次數」、「收藏次數」中選擇一種，進行排序
- [x] 長度分別為「不限」、「4 分鐘以下」、「5 - 10 分鐘」、「超過 10 分鐘」，擇一進行篩選
- [x] 沒有篩選結果時，顯示「沒有篩選結果」
- 使用耳機 icon - [link](https://material.io/tools/icons/?search=headset&icon=headset&style=baseline)

### 頁面設計規格

- [x] 全頁水平置中對齊 ( 最大寬度為 1366px )。
- [x] 影片資訊卡定寬定高，每排最多 4 張，卡片間間距最小為 20px，若還有更多空間，請將卡片 **分散對齊** 。
- [x] 卡片超出四張或頁面寬度不足以容納四張，請 **自動換行** 至下一行。
- [x] 滑鼠經過每張卡片時，請將影片縮圖放大 10%，放大過程需漸變。( 影片圖片不可露出黑邊 )
- [x] 影片標題最多為兩行。
- [ ]RWD。

## 額外需求
 - [x] 針對影片列表做 SEO 優化。
 - [x] Unit Testing
 - [x] End-to-End Testing

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run unit test(jest)
$ npm run test

# run e2e test(jest-puppeteer)
$ npm run dev
# open new terminal and serve with hot reload at localhost:3000
$ npm run test

# generate static project and deply to ghpage
Have to commit all code before deploy to gh-page
$ npm run generate:gh-pages
$ npm run deploy
```

