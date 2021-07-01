<template>
  <div class="second-step">
    <div class="second-step__container">
      <InputPhone :isClickedProp="isClickedStepProp" :v="v$"
      :phoneNum="getPhone" @animFinished="$emit('animFinished')" @phoneNumber="updatePhone"/>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { mapGetters, mapActions } from 'vuex';
import InputPhone from '@/components/app/input/inputPhone.vue';

export default {
  name: 'second-step',
  setup() {
    return { v$: useVuelidate() };
  },
  props: ['isClickedStepProp', 'clickHandlerProp'],
  components: {
    InputPhone,
  },
  validations() {
    return {
      getPhone: {
        required,
        minLength: minLength(10),
      },
    };
  },
  computed: {
    ...mapGetters(['getPhone']),
  },
  methods: {
    ...mapActions(['changePhone']),
    updatePhone(data) {
      this.changePhone({ phone: data.phoneNumber });
    },
  },
};
</script>

<style lang="scss" scoped>
.second-step {
  margin-top: 80px;
  &__container {
    margin-bottom: 50px;
  }
}
</style>
