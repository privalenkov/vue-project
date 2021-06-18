<template>
  <div class="login-layout">
    <ToastList />
    <router-view />
  </div>
</template>

<script>
import ToastList from '@/components/app/toast/ToastList.vue';

export default {
  name: 'login-layout',
  components: {
    ToastList,
  },
};
</script>
