<template>
  <div class="container">
    <div>
      <OrderTab />
      <FilterTab />
      <div id="app" align="center" class="row">
        <Card v-for="item in data" :key="item.id" :info="item" />
      </div>
    </div>
  </div>
</template>

<script>
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
          this.data = response.data.data;
        }
      });
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.row {
  -webkit-tap-highlight-color: transparent;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

</style>
