<template>
  <div class="input-phone">
    <label for="phone" class="input-phone__title">Телефон</label>
    <input
      ref="input"
      type="tel"
      inputmode="numeric"
      x-inputmode="numeric"
      name="phone"
      maxlength="24"
      id="phone"
      :class="{'input-phone__input': true,
      'input-phone--wrong': v.getPhone.$error && isClickedProp}"
      v-model="formatted"
      @input="onInput"
      @animationend="$emit('animFinished')"
    />
    <span
    v-if="v.getPhone.$error"
    class="input-phone__info input--required">{{getMessage()}}</span>
  </div>
</template>

<script>
import messages from '@/utils/messages';

export default {
  name: 'input-phone',
  props: ['phoneNum', 'isClickedProp', 'v'],
  computed: {
    formatted: {
      get() {
        const numbersValue = this.getNumbersValue(this.phoneNum);
        return this.formattedPhone(numbersValue);
      },
      set(val) {
        const numbersValue = this.getNumbersValue(val);
        const formatted = this.formattedPhone(numbersValue);
        this.$emit('phoneNumber', { phoneNumber: formatted.replace(/[^+\d]/g, '') });
      },
    },
  },
  methods: {
    formattedPhone(numVal) {
      let numbersValue = numVal;
      let formatted = '';
      if (!numbersValue) {
        formatted = '';
        return formatted;
      }
      if (['7', '8', '9'].includes(numbersValue[0])) {
        if (numbersValue[0] === '9') numbersValue = `7${numbersValue}`;

        if (numbersValue[0] === '8' || numbersValue[0] === '7') formatted = '+7 ';

        if (numbersValue.length > 1) {
          formatted += `${numbersValue.substring(1, 4)}`;
        }
        if (numbersValue.length >= 5) {
          formatted += ` ${numbersValue.substring(4, 7)}`;
        }
        if (numbersValue.length >= 8) {
          formatted += ` ${numbersValue.substring(7, 9)}`;
        }
        if (numbersValue.length >= 10) {
          formatted += ` ${numbersValue.substring(9)}`;
        }
      } else {
        formatted = `+${numbersValue}`;
      }
      return formatted;
    },
    getNumbersValue(val) {
      return val.replace(/\D/g, '');
    },
    onInput(e) {
      const input = e.target;
      input.value = input.value.replace(/[^+\d ]/g, '');
    },
    getMessage() {
      return messages[this.v.getPhone.$errors[0].$uid] ? messages[this.v.getPhone.$errors[0].$uid] : 'Введите зарегистрированный номер';
    },
  },
  watch: {
    formatted() {
      const pos = this.$refs.input.selectionStart - 1;
      const numbersValue = this.getNumbersValue(this.formatted);
      const formatted = this.formattedPhone(numbersValue);
      if (this.$refs.input.value.length !== this.$refs.input.selectionStart) {
        this.$nextTick(() => {
          this.$refs.input.selectionEnd = pos;
        });
      }
      this.formatted = formatted;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-phone {
  display: grid;
  font-family: Inter;
  font-style: normal;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
  }
  &__input {
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
  &__info {
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    color: #808080;
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
