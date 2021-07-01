<template>
  <div class="error">
    <header>
      <Logo />
    </header>
    <div class="error__icon-container">
      <div class="error__bg"></div>
      <h1>Что-то пошло не так!</h1>
      <p>
        Похоже, что ваш номер найден в черном списке.
        Пожалуйста, обратитесь к администрации компании Bloomzed +7 (701) 666-09-09
      </p>
      <router-link to="/auth/signin">
        <Button title="Попробовать снова"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Button from '@/components/app/button/button.vue';

export default {
  name: 'error-page',
  components: {
    Logo, Button,
  },
};
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  width: 100vw;
  & header {
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
  }
  &__icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    & h1, p {
      font-family: Inter;
      font-style: normal;
      margin: .20em;
    }
    & h1 {
      margin-top: 1em;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
    & p {
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      max-width: 654px;
      text-align: center;
      margin-bottom: .8rem;
    }
  }
  &__bg {
    width: 154px;
    height: 154px;
    background: #fff;
    border-radius: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: ' ';
      position: absolute;
      width: 130px;
      height: 130px;
      background: url('/img/error-icon.svg') no-repeat;
    }
  }
}
</style>
