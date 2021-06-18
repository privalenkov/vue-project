<template>
  <div class="navigation">
    <button
      class="navigation__btn"
      v-show="!isFirst"
    >
      Назад
    </button>
    <button class="navigation__btn">{{ nextButtonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    step: {
      type: Number,
      require: true,
    },
    totalsteps: {
      type: Number,
      require: true,
    },
  },
  computed: {
    nextButtonText() {
      if (this.step === this.totalsteps) {
        return 'Подписать';
      }
      return 'Далее';
    },
    isFirst() {
      return this.step === 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation__btn {
  cursor: pointer;
  padding: 0 20px;
  height: 48px;
  border-radius: 14px;
  background: #5959D3;
  color: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
  transition: background-color .2s;
  &:hover {
    background: #6262d8;
  }
  &:active {
    background: #5c5cc4;
  }
}
</style>
