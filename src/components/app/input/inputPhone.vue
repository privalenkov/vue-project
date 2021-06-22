<template>
  <div class="input-phone">
    <label for="phone" class="input-phone__title">Телефон</label>
    <input
      type="tel"
      inputmode="numeric"
      x-inputmode="numeric"
      name="phone"
      id="phone"
      class="input-phone__input"
      @input="updateValue"
      @keydown="phoneKeyDown"
      v-model="model"
    />
    <span class="input-phone__info">Введите зарегистрированный номер</span>
  </div>
</template>

<script>
export default {
  name: 'input-phone',
  props: ['phoneNum'],
  data: () => ({
    formatted: '',
  }),
  computed: {
    model: {
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
    updateValue(e) {
      const input = e.target;
      const numbersValue = this.getNumbersValue(input.value);
      // const { selectionStart } = input;

      // if (!input.value) {
      //   input.value = '';
      //   return;
      // }

      // if (input.value.length !== selectionStart) {
      //   if (e.data && /\D/g.test(e.data)) {
      //     input.value = numbersValue;
      //   }
      //   return;
      // } 9536906306 84442124224 asddssaass
      input.value = this.formattedPhone(numbersValue);
    },
    formattedPhone(numVal) {
      let numbersValue = numVal;
      let formatted = '';

      // if (!numbersValue[2] && numbersValue[1] !== '') {
      //   formatted = '';
      // }
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
      this.formatted = formatted;
      return this.formatted;
    },
    getNumbersValue(val) {
      return val.replace(/\D/g, '');
    },
    phoneKeyDown(e) {
      const { selectionStart } = e.target;
      const inputValue = e.target.value.replace(/\D/g, '');
      if ((e.keyCode === 8 && inputValue.length === 1)
      || (e.keyCode === 8 && selectionStart <= 2)) {
        e.target.value = '';
        this.$emit('phoneNumber', { phoneNumber: '' });
      }
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
}

</style>
