<template>
  <ul class="nav nav-pills">
    <span class="navbar-brand" href="#">長度</span>
    <li
      class="nav-item"
      v-for="(value) in LengthFilterEnum"
      :key="value"
      v-on:click="changeLengthFilter(value)"
    >
      <a
        class="nav-link"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        v-bind:class="{ active: value === lengthFilter }"
        >{{ value | length }}</a
      >
    </li>
  </ul>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { LengthFilterEnum } from "../shared/enums";
export default {
  data: function () {
    return {
      LengthFilterEnum,
    };
  },
  methods: {
    ...mapMutations({
      changeLengthFilter: "video/changeLengthFilter",
    }),
  },
  computed: {
    ...mapGetters({
      lengthFilter: "video/lengthFilter",
    }),
  },
};
</script>
