<template>
  <div class="login">
    <div class="login__container">
      <div class="login__left">
        <div class="login__content">
          <Registration />
        </div>
      </div>
      <ImageWindow />
    </div>
  </div>
</template>

<script>
import ImageWindow from '@/components/app/loginPageComponents/ImageWindow.vue';
import Registration from '@/components/app/loginPageComponents/Registration/Registration.vue';

export default {
  name: 'login-page',
  components: {
    ImageWindow, Registration,
  },
};
</script>

<style lang="scss" scoped>
.login__container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  .login__content {
    margin: 40px 0 0 80px;
  }
}
</style>
