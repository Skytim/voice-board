import Vue from "vue";
import { LevelEnum,OrderTypeEnum } from "../shared/enums";

export const levelFilter = function(value) {
  if (value === LevelEnum.Junior) {
    return "初級";
  }
  if (value === LevelEnum.Intermediate) {
    return "中級";
  }
  if (value === LevelEnum.MidtoHigh) {
    return "中高級";
  }
  if (value === LevelEnum.High) {
    return "高級";
  }
};

export const orderType = function(value) {
  if (value === OrderTypeEnum.Publish) {
    return "發佈時間";
  }
  if (value === OrderTypeEnum.Views) {
    return "觀看次數";
  }
  if (value === OrderTypeEnum.CollectCount) {
    return "收藏次數";
  }
};

export const length = function(value) {
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
};

export const abbreviateNumber = function(value) {
  let newValue = value;
  if (value >= 1000) {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

export const secondsTohhmmss = function(value) {
  let valueNumber = Number(value);
  const h = Math.floor(valueNumber / 3600);
  const m = Math.floor((valueNumber % 3600) / 60);
  const s = Math.floor((valueNumber % 3600) % 60);

  const hDisplay = h > 0 ? h + ":" : "";
  const mDisplay = m > 0 ? (m < 10 ? "0" + m : m) + ":" : "";
  const sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "";
  return hDisplay + mDisplay + sDisplay;
};

export const lang = function(value) {
  if (value === "ja") {
    return "日文";
  } else if (value === "cht") {
    return "中文";
  } else if (value === "vi") {
    return "越南文";
  } else {
    return "英文";
  }
};
Vue.filter("level", levelFilter);
Vue.filter("length", length);
Vue.filter("order", orderType);
Vue.filter("lang", lang);
Vue.filter("secondsTohhmmss", secondsTohhmmss);
Vue.filter("abbreviateNumber", abbreviateNumber);
