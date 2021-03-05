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
