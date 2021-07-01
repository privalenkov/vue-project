<template>
  <div class="input-password">
    <label for="password" class="input-password__title">Пароль</label>
    <div :class="{'password-container': true,
    'password-container--wrong': v.getPass.$error && isClickedProp }"
    @animationend="$emit('animFinished')">
      <input
        ref="input"
        type="password"
        inputmode="numeric"
        x-inputmode="numeric"
        name="password"
        maxlength="24"
        v-model="formatted"
        id="password"
        class="password-container__input"
        @input="onInput"
      />
      <img ref="icon" @click.prevent="passwordHidden" @mousedown.prevent="focusDisable"
      class="password-container__eye-btn"
      src="/img/app-icons/login-icons/eye-close-password-icon.svg" width="16" height="16">
    </div>
    <span v-if="v.getPass.$error"
    class="input-password__info input--required">{{ getMessage() }}</span>
  </div>
</template>

<script>
import messages from '@/utils/messages';

export default {
  name: 'input-password',
  props: ['password', 'isClickedProp', 'v'],
  computed: {
    formatted: {
      get() {
        const { password } = this;
        return password;
      },
      set(val) {
        this.$emit('updatePasswordd', { password: val.replace(/[а-яА-Я ]/g, '') });
      },
    },
  },
  methods: {
    passwordHidden() {
      if (this.$refs.input.type === 'password') {
        this.$refs.input.type = 'text';
        this.$refs.icon.src = '/img/app-icons/login-icons/eye-open-password-icon.svg';
        return;
      }
      this.$refs.input.type = 'password';
      this.$refs.icon.src = '/img/app-icons/login-icons/eye-close-password-icon.svg';
    },
    focusDisable() {
      this.$refs.icon.blur();
      this.$refs.input.focus();
    },
    onInput(e) {
      const input = e.target;
      input.value = input.value.replace(/[а-яА-Я ]/g, '');
    },
    getMessage() {
      return messages[this.v.getPass.$errors[0].$uid] ? messages[this.v.getPass.$errors[0].$uid] : 'Введите пароль';
    },
  },
};
</script>

<style lang="scss" scoped>
.input-password {
  display: grid;
  font-family: Inter;
  font-style: normal;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
  }
  &__info {
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    color: #808080;
  }
  &__password-eye {
    right: 0;
    position: absolute;
  }
}
.password-container {
  position: relative;
  margin-right: 20px;
  &__input {
    width: 100%;
    padding-left: 20px;
    margin-top: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    max-width: 460px;
    height: 40px;
    border: none;
    background: #FFFFFF;
    outline: none;
    color: #808080;
    border-radius: 10px;
  }
  &__eye-btn {
    transition: right .2s ease;
    position: absolute;
    right: -12px;
    top: 23px;
    user-select: none;
    cursor: pointer;
  }
  &--wrong {
    animation: 1s alternate shake;
  }
  @keyframes shake {
    10%, 90% {
      transform: translateX(-1px)
    }

    20%, 80% {
      transform: translateX(2px)
    }

    30%, 50%, 70% {
      transform: translateX(-4px)
    }

    40%, 60% {
      transform: translateX(4px)
    }
  }

}
.input--required {
  padding-left: 4px;
  color: #ce2020;
}
</style>
