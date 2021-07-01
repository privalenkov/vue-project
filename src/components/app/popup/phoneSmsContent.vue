<template>
    <div class="popup-content">
      <input type="text" ref="input" maxlength="6" class="popup-content__input"/>
      <div>
        <span class="popup-content__popup-title">Введите код из SMS</span>
        <p>Мы отправили его на номер {{ getNum() }}</p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'phone-sms-content',
  mounted() {
    this.$refs.input.focus();
  },
  computed: mapGetters(['getPhone']),
  methods: {
    getNum() {
      const num = this.getNumbersValue(this.getPhone);
      return this.formattedPhone(num);
    },
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
  },
};
</script>

<style lang="scss" scoped>
.popup-content {
  display: grid;
  &__input {
    width: 280px;
    height: 100px;
    border-radius: 24px;
    outline: none;
    border: none;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    margin: 0 40px 30px 40px;
    padding: 0 15px 0 40px;
    letter-spacing: 1.6ch;
    text-align: center;
  }
  &__popup-title {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }
  p {
    margin: 0 0 25px 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
  }
}
</style>
