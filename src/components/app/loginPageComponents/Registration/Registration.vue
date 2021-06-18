<template>
  <div class="registration">
    <Logo />
    <h1 class="registration__title">Регистрация</h1>
    <RegProgressBar />
    <form class="registration-form">
      <FirstStep v-if="step === 1" />
      <Navigation :step='step' :totalsteps='totalsteps' />
    </form>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import RegProgressBar from '@/components/app/loginPageComponents/Registration/RegProgressBar.vue';
import FirstStep from '@/components/app/loginPageComponents/Registration/Steps/FirstStep.vue';
import Navigation from '@/components/app/loginPageComponents/Registration/Navigation.vue';

export default {
  name: 'registration',
  data() {
    return {
      step: 1,
      totalsteps: 6,
      form: {
        name: null,
      },
    };
  },
  components: {
    Logo, RegProgressBar, FirstStep, Navigation,
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
