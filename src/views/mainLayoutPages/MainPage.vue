<template>
  <div class="main">
    <WalletContainer msg="•••• •••• •••• 9281"/>
    <ActivityTableContainer />
    <button @click="addToast(
      {
        title: 'Что-то пошло не так. Или так. Я не знаю.',
        type: 'warning'
      }
    )"></button>
  </div>
</template>

<script>
import WalletContainer from '@/components/app/mainPageComponents/WalletContainer.vue';
import ActivityTableContainer from '@/components/app/mainPageComponents/ActivityTableContainer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'main-page',
  components: {
    WalletContainer, ActivityTableContainer,
  },
  methods: mapActions(['addToast']),
};
</script>
