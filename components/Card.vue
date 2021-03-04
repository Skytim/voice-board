<template>
  <div class="col card">
    <img :src="info.thumbnail" />
    {{ info.title }}
    {{ info.views }}
    {{ info.duration }}
    <span v-for="(caption,index) in info.captions" :key="index">{{ caption }} </span>
    {{ info.level }}
  </div>

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
.card {
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
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 18rem;
}
.col {
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
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
</style>
