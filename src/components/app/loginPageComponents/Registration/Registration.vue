<template>
  <div class="registration">
    <Logo />
    <h1 class="registration__title">Регистрация ИП</h1>
    <RegProgressBar :step='step' />
    <form class="registration-form" autocomplete="on" @submit.prevent>
      <FirstStep v-if="step === 1" />
      <SecondStep v-if="step === 2" />
      <Navigation @click-prev="clickPrev" @click-next="clickNext"
      :step='step' :totalsteps='totalsteps'/>
    </form>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import RegProgressBar from '@/components/app/loginPageComponents/Registration/RegProgressBar.vue';
import Navigation from '@/components/app/loginPageComponents/Registration/Navigation.vue';

import FirstStep from '@/components/app/loginPageComponents/Registration/Steps/FirstStep.vue';
import SecondStep from '@/components/app/loginPageComponents/Registration/Steps/SecondStep.vue';

export default {
  name: 'registration',
  data() {
    return {
      step: 1,
      totalsteps: 6,
    };
  },
  components: {
    Logo, RegProgressBar, FirstStep, Navigation, SecondStep,
  },
  methods: {
    clickPrev() {
      if (this.step > 0) {
        this.step -= 1;
      }
    },
    clickNext() {
      if (this.step < this.totalsteps) {
        this.step += 1;
      }
    },
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
