<template>
  <div class="second-step">
    <div class="second-step__container">
      <InputPhone :phoneNum="getPhone" @phoneNumber="updatePhone"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InputPhone from '@/components/app/input/inputPhone.vue';

export default {
  name: 'second-step',
  components: {
    InputPhone,
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
