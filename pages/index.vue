<template>
  <div class="container">
    <div class="grid-content">
      <OrderTab />
      <FilterTab />
    </div>
    <div v-for="(row, index) in videoList" :key="index" class="grid-content">
      <Card v-for="item in row" :key="item.id" :info="item" />
      <br />
    </div>
    <div v-if="videoList.length === 0" class="no-result">
      <h1>沒有篩選結果</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      data: [],
      order: 1,
    };
  },
  mounted: function () {
    this.$store.dispatch("video/getVideos");
  },
  computed: {
    ...mapGetters({
      videoList: "video/videoList",
    }),
  },
};
</script>

<style>
.container {
  width: 1336px;
  margin: 0 auto;
}
.grid-content {
  font-family: "Noto Sans TC", "Noto Sans JP", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Microsoft JhengHei, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2b2b2b;
  box-sizing: border-box;
  text-size-adjust: none;
  display: grid;
  grid-auto-flow: column;
  margin: 0 auto;
  grid-gap: var(--home-grid-gap);
  gap: var(--home-grid-gap);
  margin-bottom: 24px;
}
.no-result {
  position: absolute;
  top: 47%;
  left: 43%;
}
</style>
