<template>
  <div class="navigation">
    <Button v-show="!isFirst" v-on:click="$emit('click-prev')" title="Назад"/>
    <Button v-on:click="$emit('click-next')" :title="nextButtonText"/>
  </div>
</template>

<script>
import Button from '@/components/app/button/button.vue';

export default {
  name: 'navigation',
  props: {
    step: {
      type: Number,
      required: true,
    },
    totalsteps: {
      type: Number,
      required: true,
    },
  },
  components: {
    Button,
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
.navigation {
  display: flex;
  column-gap: 25px;
  &__btn {
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
}
</style>
