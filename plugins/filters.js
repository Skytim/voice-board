import Vue from "vue";

Vue.filter("level", function(value) {
  if (value === 1) {
    return "初級";
  }
  if (value === 2) {
    return "中級";
  }
  if (value === 3) {
    return "中高級";
  }
  if (value === 4) {
    return "高級";
  }
});
Vue.filter("order", function(value) {
  if (value === 1) {
    return "發佈時間";
  }
  if (value === 2) {
    return "觀看次數";
  }
  if (value === 3) {
    return "收藏次數";
  }
});


Vue.filter("length", function(value) {
  if (value === 1) {
    return "不限";
  }
  if (value === 2) {
    return "4 分鐘以下";
  }
  if (value === 3) {
    return "5 - 10 分鐘";
  }
  if (value === 4) {
    return "超過 10 分鐘";
  }
});
