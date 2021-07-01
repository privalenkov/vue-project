<template>
  <div class="logo">
    <img src="/img/logo.svg" alt="company-logo"
    title="Company logo" class="logo__image">
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss" scoped>
.logo {
  .logo__image {
    cursor: pointer;
    width: 154px;
    height: 70px;
    user-select: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
