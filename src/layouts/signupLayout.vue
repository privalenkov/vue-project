<template>
  <div class="auth-layout">
    <ToastList />
    <router-view />
  </div>
</template>

<script>
import ToastList from '@/components/app/toast/ToastList.vue';

export default {
  name: 'auth-layout',
  components: {
    ToastList,
  },
};
</script>
