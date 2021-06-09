<template>
  <div class="WalletContainer  d-flex flex-column">
    <h2>Мои кошельки</h2>
    <ul>
      <li class="list-unstyled">
        <Wallet :msg="msg"/>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.WalletContainer li {
  margin: 0 0 0 -85px;
}
@media (min-width: 1199px) {
  .WalletContainer li {
    margin: 0 0 0 calc(-4em - 1%);
  }
}
@media (max-width: 1199px) {
  .WalletContainer li {
    margin: 0 0 0 -65px;
  }
}
</style>

<script>
import Wallet from '@/components/app/Wallet.vue';
import { Tooltip, Dropdown } from 'bootstrap';

export default {
  name: 'WalletContainer',
  props: {
    msg: String,
  },
  components: {
    Wallet,
  },
  methods: {
    tooltip() {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => {
        const tooltip = new Tooltip(tooltipTriggerEl, {
          boundary: document.body, // or document.querySelector('#boundary')
        });
        return tooltip;
      });
    },
    dropdown() {
      const dropdownElementList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
      dropdownElementList.map((dropdownToggleEl) => {
        const dropdown = new Dropdown(dropdownToggleEl);
        return dropdown;
      });
    },
  },
  mounted() {
    this.tooltip();
    this.dropdown();
  },
};
</script>
