<template>
  <div class="authorization">
    <form class="authorization-form" autocomplete="on" @submit.prevent>
      <InputPhone :v="v$" :phoneNum="getPhone"
      @phoneNumber="updatePhone" :isClickedProp="isClicked" @animFinished="clickHandler"/>
      <InputPassword :v="v$" :password="getPass"
      @updatePasswordd="updatePassword" :isClickedProp="isClicked" @animFinished="clickHandler"/>
      <span class="authorization-form__navig-container">
        <Button @click="submitHandler" title="Войти" />
        <router-link tag="a" to="/auth/signup" class="authorization-form__link">
          <span>Регистрация</span>
        </router-link>
        <router-link tag="a" to="/auth/signup?recovery" class="authorization-form__link">
          <span>Забыли пароль?</span>
        </router-link>
      </span>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import InputPhone from '@/components/app/input/inputPhone.vue';
import InputPassword from '@/components/app/input/inputPassword.vue';
import Button from '@/components/app/button/button.vue';
import { mapActions } from 'vuex';

export default {
  name: 'authorization',
  data: () => ({
    getPhone: '',
    getPass: '',
    isClicked: false,
  }),
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      getPhone: {
        required,
      },
      getPass: {
        required,
      },
    };
  },
  components: {
    InputPhone, InputPassword, Button,
  },
  methods: {
    ...mapActions(['login']),
    updatePhone(data) {
      this.getPhone = data.phoneNumber;
    },
    updatePassword(data) {
      this.getPass = data.password;
    },
    clickHandler() {
      this.isClicked = false;
    },
    async submitHandler() {
      this.isClicked = true;
      // console.log(this.v$);
      const email = `${this.getPhone}@myVueProjExp.com`;
      const password = this.getPass;
      const isFormCorrect = await this.v$.$validate();
      // console.log(this.v$);
      if (!isFormCorrect) return;

      await this.login({ email, password }).then(() => {
        this.$router.push('/');
      }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.authorization-form {
  max-width: 460px;
  display: grid;
  margin-top: 50px;
  row-gap: 30px;
  a {
    outline: none;
    text-decoration: none;
    transition: color .3s ease;
  }
  a:hover {
    color: #4e4e4e;
  }
  &__navig-container {
    display: flex;
    column-gap: 25px;
    align-items: center;
  }
  &__link {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #808080;
  }
}
</style>
