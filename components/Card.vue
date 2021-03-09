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
        <span class="tag level" :class="level"> {{ info.level | level }} </span>
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
