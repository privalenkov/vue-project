<template>
  <div class="auth-layout">
    <ToastList />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ToastList from '@/components/app/toast/ToastList.vue';
import messages from '@/utils/messages';

export default {
  name: 'auth-layout',
  components: {
    ToastList,
  },
  computed: {
    ...mapGetters(['getError']),
    error() {
      return this.error;
    },
  },
  methods: mapActions(['addToast']),
  watch: {
    getError(fbError) {
      this.addToast(
        {
          title: messages[fbError.code] || 'Неизвестная ошибка',
          type: 'error',
        },
      );
    },
  },
};
</script>
