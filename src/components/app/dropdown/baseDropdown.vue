<template>
  <div class="base-dropdown">
    <div @click="toggle" style="width: 36px; height: 36px; margin-left: auto;">
      <slot />
    </div>
    <transition name="dropdown">
      <ul v-show="isShown" class="base-dropdown__my-dropdown-menu"
      aria-labelledby="mydropdown" ref="dropdownRef">
        <a href="#" @click.prevent="logout">
          <li class="d-flex">
            <img class="btn-icon"
            src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
            width="16" height="16">
            <span class="my-dropdown-item ps-2">Загрузить детали</span>
          </li>
        </a>
        <a href="#" @click.prevent="logout">
          <li class="d-flex">
            <img class="btn-icon"
            src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
            width="16" height="16">
            <span class="my-dropdown-item ps-2">Загрузить выписку</span>
          </li>
        </a>
        <a href="#" @click.prevent="logout">
          <li class="d-flex">
            <img class="btn-icon"
            src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/limit-icon.svg"
            width="16" height="16">
            <span class="my-dropdown-item ps-2">Лимиты кошелька</span>
          </li>
        </a>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data() {
    return {
      isShown: true,
    };
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
    onClickOutside(e) {
      console.log(e);
      // this.isShown = e.target === this.$refs.dropdownRef && this.isShown;
      // if (e.target === this.$refs.dropdownRef) console.log('s');
      // this.isShown = this.$el.contains(e.target) && this.isShown;
    },
  },
  created() {
    document.addEventListener('click', this.onClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onClickOutside);
  },
};
</script>

<style lang="scss" scoped>

</style>

<style lang="scss" scoped>
.base-dropdown {

  .base-dropdown__my-dropdown-menu {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    border: none;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);
    position: absolute;
    margin-top: 8px;
    padding: 8px 0;

    a li:hover {
      background: #f6f6f6;
    }
    .btn-icon {
      position: relative;
    }
    li {
      align-items: center;
      padding: 5px 20px;
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 1620px) {
  .my-dropdown-menu {
    margin: 100px 70px 0 0;
  }
}
</style>
