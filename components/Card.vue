<template>
  <div class="video-card">
    <div
      class="video-cover"
      v-bind:style="{ backgroundImage: 'url(' + info.thumbnail + ')' }"
    >
      <span class="duration">{{ info.duration | secondsTohhmmss }}</span>
    </div>
    <div class="video-info">
      <span class="video-title">{{ info.title }}</span>

      <p class="tail">
        <span class="views">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#787878"
            width="19px"
            height="19px"
          >
            <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
            <path
              d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
            />
          </svg>
          {{ info.views | abbreviateNumber }}</span
        >
        <span
          class="tag lang"
          v-for="(caption, index) in info.captions"
          :key="index"
          :class="caption"
        >
          {{ caption | lang }}
        </span>
        <span class="tag" :class="level"> {{ info.level | level }} </span>
      </p>
    </div>
  </div>
</template>

<script>
import { LevelEnum } from "../shared/enums";
export default {
  props: {
    info: Object,
  },
  data: function () {
    return {
      data: [],
    };
  },
  computed: {
    level() {
      return Object.keys(LevelEnum).find(
        (key) => LevelEnum[key] === this.info.level
      );
    },
  },
  name: "Card",
};
</script>
<style >
img {
  width: 240 px;
  height: 135px;
}

.video-card {
  padding-bottom: 0.75rem;
  width: 240px;
  border-radius: 4px;
}
.video-info {
  font-family: NotoSansCJKtc-Regular;
  padding: 4px 8px;
}
.video-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 20px;
  height: 40px;
}
.video-cover {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 7px 10px;
  height: 168px;
  background: #b4b4b4 no-repeat 50% / cover;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.duration {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  color: white;
  border-radius: 2px;
  padding: 0 8px;
  height: 20px;
  background-color: #000;
}
.views {
  display: inline-flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  line-height: 1;
  flex: 1;
}
.tail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.lang {
  margin-right: 10px;
}

.tag {
  height: 21px;
  font-family: PingFangTC-Medium;
  color: white;
  border-radius: 2px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 8px;
}
.cht {
  background-color: #4283e4;
}
.en {
  background-color: #b3e442;
}
.ja {
  background-color: #b642e4;
}
.vi {
  background-color: #42e4a0;
}
.Junior {
  background-color: #268969;
}
.Intermediate {
  background-color: #ffb900;
}
.MidtoHigh {
  background-color: #ed7d4f;
}
.High {
  background: #ed4f55;
}
</style>
