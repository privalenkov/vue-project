<template>
  <div class="registration">
    <Popup>
      <PhoneSmsContent/>
    </Popup>
    <RegProgressBar :step='step' />
    <form class="registration-form" autocomplete="on" @submit.prevent>
      <FirstStep ref="fs" v-if="step === 1" />
      <SecondStep :isClickedStepProp="isClicked" @animFinished="clickHandler"
      ref="ss" v-if="step === 2"/>
      <Navigation @click-prev="clickPrev" @click-next="clickNext"
      :step='step' :totalsteps='totalsteps'/>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';

import { mapGetters, mapActions } from 'vuex';

import RegProgressBar from '@/components/app/authPageComponents/Registration/RegProgressBar.vue';
import Navigation from '@/components/app/authPageComponents/Registration/Navigation.vue';

import FirstStep from '@/components/app/authPageComponents/Registration/Steps/FirstStep.vue';
import SecondStep from '@/components/app/authPageComponents/Registration/Steps/SecondStep.vue';

import Popup from '@/components/app/popup/popup.vue';
import PhoneSmsContent from '@/components/app/popup/phoneSmsContent.vue';

export default {
  name: 'registration',
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    step: 1,
    totalsteps: 6,
    isClicked: false,
  }),
  computed: mapGetters(['getPhone', 'getName']),
  components: {
    RegProgressBar, FirstStep, Navigation, SecondStep, Popup, PhoneSmsContent,
  },
  methods: {
    ...mapActions(['addToast', 'toggleShow']),
    clickPrev() {
      if (this.step > 0) {
        this.step -= 1;
      }
    },
    clickHandler() {
      this.isClicked = false;
    },
    clickNext() {
      if (this.step < this.totalsteps) {
        if (this.step === 1 && this.$refs.fs.v$) {
          this.$refs.fs.v$.$validate();
          if (!this.$refs.fs.v$.$error) {
            this.step = 2;
          } else {
            alert('ERROR');
          }
        } else if (this.step === 2 && this.$refs.ss.v$) {
          this.$refs.ss.v$.$validate();
          this.isClicked = true;
          if (!this.$refs.ss.v$.$error) {
            // this.step = 3;
            this.toggleShow();
          } else {
            this.addToast(
              {
                title: 'Некорректный номер телефона',
                type: 'error',
              },
            );
          }
        }
      } else if (this.step === this.totalsteps) {
        this.submit();
      }
    },
    submit() {
      if (!this.$refs.fs.v$.$error) {
        alert('submitted to the back-end');
      } else {
        this.addToast(
          {
            title: 'Что-то пошло не так. Или так. Я не знаю.',
            type: 'error',
          },
        );
      }
    },
  },
};
</script>
