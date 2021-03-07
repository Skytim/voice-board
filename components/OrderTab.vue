<template>
  <ul class="nav nav-pills">
    <span class="navbar-brand" href="#">排序</span>
    <li
      class="nav-item"
      v-for="(value) in OrderTypeEnum"
      :key="value"
      v-on:click="changeOrder(value)"
    >
      <a
        class="nav-link"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        v-bind:class="{ active: value === orderType }"
        >{{ value | order }}</a
      >
    </li>
  </ul>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { OrderTypeEnum } from "../shared/enums";
export default {
  data: function () {
    return {
      OrderTypeEnum,
    };
  },
  methods: {
    ...mapMutations({
      changeOrder: "video/changeOrder",
    }),
  },
  computed: {
    ...mapGetters({
      orderType: "video/orderType",
    }),
  },
};
</script>
