<template>
  <a class="video-card">
    <div
      class="video-cover"
      v-bind:style="{ backgroundImage: 'url(' + info.thumbnail + ')' }"
    >
      <span class="duration">{{ info.duration }}</span>
    </div>
    <div class="video-info">
      <h6>{{ info.title }}</h6>

      <p class="tail">
        <span class="views">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#787878" width="19px" height="19px"><path d="M0 0h24v24H0z" fill="none" opacity=".1"/><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
          {{ info.views }}</span
        >
        <span
          class="lang"
          v-for="(caption, index) in info.captions"
          :key="index"
        >
          {{ caption }}
        </span>
        <span class="level"> {{ info.level | level }} </span>
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data: function () {
    return {
      data: [],
    };
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
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  box-sizing: border-box;
  text-size-adjust: none;
  cursor: pointer;
  transition: color 0.15s ease-out;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: var(--card-width);
  max-width: 100%;
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  flex: 0 0 auto;
  --card-width: 240px;
}
.video-info {
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  --thumbnail-height: 168px;
  --card-width: 302px;
  box-sizing: border-box;
  text-size-adjust: none;
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
}
h6 {
  font-style: normal;
  font-stretch: normal;
  cursor: pointer;
  --thumbnail-height: 168px;
  --card-width: 302px;
  box-sizing: border-box;
  text-size-adjust: none;
  font-family: inherit;
  letter-spacing: inherit;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  height: 40px;
}
.video-cover {
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  color: #7e3aaf;
  --thumbnail-height: 168px;
  --card-width: 302px;
  box-sizing: border-box;
  text-size-adjust: none;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 7px 10px;
  z-index: 1;
  width: 100%;
  height: var(--thumbnail-height);
  overflow: hidden;
  background: #b4b4b4 no-repeat 50% / cover;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.duration {
  --tag-color: #fff;
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  --thumbnail-height: 168px;
  --card-width: 302px;
  box-sizing: border-box;
  text-size-adjust: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: var(--tag-color);
  border-radius: 2px;
  padding: 0 8px;
  height: 20px;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  transition: color 0.15s ease-out;
  z-index: 1;
  background-color: #000;
}
.views {
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  box-sizing: border-box;
  text-size-adjust: none;
  display: inline-flex;
  align-items: center;
  margin: 0 10px 0 0;
  color: #787878;
  font-size: 12px;
  line-height: 1;
  flex: 1;
}
.tail {
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  color: #7e3aaf;
  --card-width: 238px;
  --thumbnail-height: 168px;
  box-sizing: border-box;
  text-size-adjust: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 16px 0 0;
  padding: 16px 0 0;
}
.lang {
  --tag-color: #fff;
  --tag-bg-color: #b4b4b4;
  --button-color: #fff;
  --button-cursor: pointer;
  --button-border-width: 0;
  --button-border-color: transparent;

  --dropdown-bg-opacity: 1;
  --home-grid-padding-H: 32px;
  --home-grid-padding-H-rd: 16px;
  --home-grid-gap-rt: 19px;
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  --card-width: 238px;
  --thumbnail-height: 168px;
  box-sizing: border-box;
  text-size-adjust: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: var(--tag-color);
  border-radius: 2px;
  padding: 0 8px;
  height: 20px;
  white-space: nowrap;
  user-select: none;
  transition: color 0.15s ease-out;
  z-index: 1;
  margin-right: 10px;
  cursor: pointer;
  pointer-events: auto;
  background-color: rgb(33, 189, 12);
}
.level {
  --tag-color: #fff;
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  --thumbnail-height: 168px;
  --card-width: 100%;
  box-sizing: border-box;
  text-size-adjust: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: var(--tag-color);
  border-radius: 2px;
  padding: 0 8px;
  height: 20px;
  white-space: nowrap;
  user-select: none;
  transition: color 0.15s ease-out;
  z-index: 1;
  cursor: pointer;
  pointer-events: auto;
  --tag-bg-color: #ffb900;
  background-color: #000;
}
</style>
