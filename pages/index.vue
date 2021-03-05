<template>
  <div class="container">
    <div class="grid-content">
      <OrderTab />
      <FilterTab />
    </div>
    <div v-for="(row, index) in videoList" :key="index" class="grid-content">
      <!-- <Card  /> -->
      <Card v-for="item in row" :key="item.id" :info="item" />
      <br />
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
    this.$axios
      .get(
        "https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz"
      )
      .then((response) => {
        if (response.data.status) {
          for (let i = 0; i < response.data.data.length; i += 4) {
            this.data.push(response.data.data.slice(i, i + 4));
          }
        }
      });
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
</style>
