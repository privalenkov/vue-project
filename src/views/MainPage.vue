<template>
  <div class="main">
    <WalletContainer msg="•••• •••• •••• 9281"/>
    <ActivityTableContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import WalletContainer from '@/components/app/mainPageComponents/WalletContainer.vue';
import ActivityTableContainer from '@/components/app/mainPageComponents/ActivityTableContainer.vue';

export default {
  name: 'mainPage',
  components: {
    WalletContainer, ActivityTableContainer,
  },
};
</script>
