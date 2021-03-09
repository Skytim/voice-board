<template>
  <div class="container">
    <div class="nav">
      <OrderTab />
      <FilterTab />
    </div>
    <hr />
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
