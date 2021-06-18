<template>
  <div class="toast-list">
    <transition-group name="toast-list__list">
      <Toast
      v-for="toast in allToasts"
      :key="toast.id"
      :propToast="toast"
      > </Toast>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Toast from './Toast.vue';

export default {
  name: 'toastList',
  components: {
    Toast,
  },
  computed: mapGetters(['allToasts']),
  methods: mapActions(['removeToast']),
};
</script>

<style lang="scss" scoped>
.toast-list {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  padding: 2.5rem 4.5rem 0 0;
  display: flex;
  flex-direction: column-reverse;
  .toast-list__list-enter-active,
  .toast-list__list-leave-active {
    transition: all 0.3s ease;
  }
  .toast-list__list-enter-from {
    opacity: 0;
    transform: translateX(0);
  }
  .toast-list__list-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .toast-list__list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .toast-list__list-move {
    transition: all .3s ease;
  }
  // .toast-list__list-leave-active {
  //   position: absolute;
  // }
}
</style>
