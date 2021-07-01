<template>
  <div class="login">
    <div class="login__container">
      <div class="login__left">
        <div class="login__content">
          <Logo />
          <h1 class="login__title">{{ setTitle }}</h1>
          <Registration v-if="$route.name === 'signup'" />
          <Authorization v-if="$route.name === 'signin'" />
        </div>
      </div>
      <ImageWindow />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import ImageWindow from '@/components/app/authPageComponents/ImageWindow.vue';
import Registration from '@/components/app/authPageComponents/Registration/Registration.vue';
import Authorization from '@/components/app/authPageComponents/Authorization/Authorization.vue';

export default {
  name: 'auth-page',
  components: {
    ImageWindow, Registration, Logo, Authorization,
  },
  computed: {
    setTitle() {
      if (this.$route.name === 'signup') return 'Регистрация ИП';
      return 'Авторизация';
    },
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

<style lang="scss" scoped>
.login {
  &__title {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: calc(1rem + 1.5vw);
    line-height: 60px;

    color: #000000;
  }
}
</style>
