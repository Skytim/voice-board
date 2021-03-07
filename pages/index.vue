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
      <h1 v-if="status === StatusEnum.Init">載入中</h1>
      <h1 v-if="status === StatusEnum.Finished">沒有篩選結果</h1>
      <h1 v-if="status === StatusEnum.NetworkError">
        網路連線異常，請檢察網路
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { StatusEnum } from "../shared/enums";
export default {
  data: function () {
    return {
      data: [],
      order: 1,
      StatusEnum: StatusEnum,
    };
  },
  mounted: function () {
    this.$store.dispatch("video/getVideos");
  },
  computed: {
    ...mapGetters({
      videoList: "video/videoList",
      status: "video/getStatus",
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
  text-align: center;
  height: 768px;
  line-height: 768px;
}
</style>
