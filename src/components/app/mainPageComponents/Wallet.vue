<template>
  <!-- <img src="img/wallets-img/wallet-default.svg"> -->
  <div class="wallet-body">
    <svg id="wallet-body__wallet" viewBox="0 0 646 498" width="672" height="498">
      <image href="img/wallets-img/wallet-default.png" width="644" height="498"/>
      <text transform="matrix(1 0 0 1 90 110)"
      id="svgnumber" class="st2">{{ msg }}</text>
      <g transform="matrix(1 0 0 1 90 160)">
        <g transform="matrix(1 0 0 1 0 0)">
          <image transform="matrix(1 0 0 1 0 0)"
          href="/img/wallets-img/wallets-icons/costs-icon.svg" width="24" height="24"/>
          <text transform="matrix(1 0 0 1 30 18)"
          id="svgnumber" class="st4">Расходы</text>
        </g>
        <text transform="matrix(1 0 0 1 30 50)"
        id="svgnumber" class="st2">–1 120 000 ₸</text>
      </g>
      <g transform="matrix(1 0 0 1 300 160)">
        <g transform="matrix(1 0 0 1 0 0)">
          <image transform="matrix(1 0 0 1 0 0)"
          href="/img/wallets-img/wallets-icons/repl-icon.svg" width="24" height="24"/>
          <text transform="matrix(1 0 0 1 30 18)"
          id="svgnumber" class="st4">Пополнения</text>
        </g>
        <text transform="matrix(1 0 0 1 30 50)"
        id="svgnumber" class="st2">+4 230 000 ₸</text>
      </g>
      <g transform="matrix(1 0 0 1 90 305)">
        <text transform="matrix(1 0 0 1 0 0)"
        id="svgnumber" class="st4">Баланс</text>
        <text transform="matrix(1 0 0 1 0 40)"
        id="svgnumber" class="st3">3 150 000 ₸</text>
      </g>
      <foreignObject class="node" x="345" y="85" width="250" height="250">
        <body style="background: none;" xmlns="http://www.w3.org/1999/xhtml">
          <div class="wallet-btn-menu">
            <div class="btn-menu">
              <BaseTooltip text="Подробнее">
                <div @click="toggle" ref="btnRef" class="btn-menu__wallet-btn-more">
                  <div class="btn-menu__btn-circles"></div>
                </div>
              </BaseTooltip>
            </div>
            <ul v-show="isShown"
            class="wallet-btn-menu__my-dropdown-menu"
            aria-labelledby="mydropdown">
              <a href="#" @click.prevent="logout">
                <li>
                  <img class="btn-icon"
                  src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
                  width="16" height="16">
                  <span class="my-dropdown-item ps-2">Загрузить детали</span>
                </li>
              </a>
              <a href="#" @click.prevent="logout">
                <li>
                  <img class="btn-icon"
                  src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
                  width="16" height="16">
                  <span class="my-dropdown-item ps-2">Загрузить выписку</span>
                </li>
              </a>
              <a href="#" @click.prevent="logout">
                <li>
                  <img class="btn-icon"
                  src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/limit-icon.svg"
                  width="16" height="16">
                  <span class="my-dropdown-item ps-2">Лимиты кошелька</span>
                </li>
              </a>
            </ul>
          </div>
        </body>
      </foreignObject>
    </svg>
  </div>
</template>

<script>
import BaseTooltip from '@/components/app/tooltip/baseToolTip.vue';
// import BaseDropdown from '@/components/app/dropdown/baseDropdown.vue';

export default {
  name: 'wallet',
  props: {
    msg: String,
  },
  data() {
    return {
      isShown: false,
    };
  },
  components: {
    BaseTooltip,
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
    onClickOutside(e) {
      this.isShown = this.$refs.btnRef.contains(e.target) && this.isShown;
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
.wallet-btn-menu {
  display: flex;
  justify-content: flex-end;
  margin-right: 36px;
  .wallet-btn-menu__my-dropdown-menu {
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
    margin-top: 42px;
    padding: 8px 0;

    a li:hover {
      background: #f6f6f6;
    }
    .btn-icon {
      position: relative;
    }
    li {
      display: flex;
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
.wallet-body {
  max-width: 672px;

  @media (max-width: 1620px) {
    width: 600px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 520px;
  }
  @media (max-width: 991px) {
    width: 400px;
  }

  #wallet-body__wallet {
    height: auto;
    font-family: Inter;
    font-style: normal;
    fill: #fff;
    width: 100%;
  }
  #wallet-body__wallet {
    .st2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 34px;
    }
    .st3 {
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
    }
    .st4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>

<style lang="scss" scoped>
.btn-menu {
  position: absolute;
  .btn-menu__wallet-btn-more {
    outline: none;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    .btn-menu__btn-circles {
      width: 4px;
      height: 4px;
      border-radius: 50px;
      background: #fff;

      &::before {
        content: " ";
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: #fff;
        margin-left: 7px;
        position: absolute;
      }
      &::after {
        content: " ";
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: #fff;
        margin-left: -7px;
        position: absolute;
      }
    }
  }
}
</style>
