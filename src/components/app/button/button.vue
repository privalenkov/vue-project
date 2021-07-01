<template>
  <div>
    <button class="btn">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.btn {
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
    user-select: none;
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
