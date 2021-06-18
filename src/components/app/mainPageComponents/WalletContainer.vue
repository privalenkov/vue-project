<template>
  <div class="wallet-container">
    <h2 class="wallet-container__title">Мои кошельки</h2>
    <ul class="wallet-container__wallet">
      <li class="wallet-container__item">
        <Wallet :msg="msg"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Wallet from '@/components/app/mainPageComponents/Wallet.vue';
import { Dropdown } from 'bootstrap';

export default {
  name: 'wallet-container',
  props: {
    msg: String,
  },
  components: {
    Wallet,
  },
  methods: {
    // tooltip() {
    //   const tooltipTriggerList =
    // [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    //   tooltipTriggerList.map((tooltipTriggerEl) => {
    //     const tooltip = new Tooltip(tooltipTriggerEl, {
    //       boundary: document.body, // or document.querySelector('#boundary')
    //     });
    //     return tooltip;
    //   });
    // },
    dropdown() {
      const dropdownElementList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
      dropdownElementList.map((dropdownToggleEl) => {
        const dropdown = new Dropdown(dropdownToggleEl);
        return dropdown;
      });
    },
  },
  mounted() {
    // this.tooltip();
    this.dropdown();
  },
};
</script>

<style lang="scss" scoped>
.wallet-container {
  display: flex;
  flex-direction: column;

  .wallet-container__title {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: calc(1.3rem + .8vw);
    line-height: 52px;
    margin: 0;
  }
  .wallet-container__wallet {
    padding-left: 0;
    margin:0;
    list-style: none;

    .wallet-container__item {
      margin: 0 0 0 -55px;

      @media (max-width: 1620px) {
        margin: 0 0 0 -42px;
      }
      @media (max-width: 992px) {
        margin: 0 0 0 -35px;
      }
    }
  }
}
</style>
