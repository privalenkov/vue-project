<template>
  <component :is="layout">
  </component>
</template>

<script>
import mainLayout from '@/layouts/mainLayout.vue';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    mainLayout,
  },
};

</script>

<style lang="scss">
@import './bootstrap/bootstrap.scss';
// @import '~bootstrap/scss/bootstrap';
body {
  background: #F5F5F5
}
.tooltip {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
}
.bs-tooltip-bottom {
  margin-top: 10px;
}
.bs-tooltipe-top {
  margin-bottom: 10px;
}
.bs-tooltipe-left {
  margin-right: 10px;
}
.bs-tooltipe-right {
  margin-left: 10px;
}
</style>
