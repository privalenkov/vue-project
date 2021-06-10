<template>
  <!-- <img src="img/wallets-img/wallet-default.svg"> -->
  <div class="wallet-body">
    <svg title="dododo" id="wallet" viewBox="0 0 646 498" width="672" height="498">
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
        <div class="container btn-menu-content">
          <a href="#" data-bs-toggle="dropdown">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-offset="[0,10]"
              fallbackPlacement="['top', 'bottom', 'left', 'right']"
              title="Подробнее"
              class="wallet-btn-more"
            >
            <div class="btn-circles"></div>
            </div>
          </a>
          <ul class="dropdown-menu my-dropdown-menu" aria-labelledby="mydropdown">
            <a href="#" @click.prevent="logout">
              <li class="d-flex py-2 ps-3">
                <img class="btn-icon"
                src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
                width="16" height="16">
                <span class="my-dropdown-item ps-2">Загрузить детали</span>
              </li>
            </a>
            <a href="#" @click.prevent="logout">
              <li class="d-flex py-2 ps-3">
                <img class="btn-icon"
                src="/img/wallets-img/wallets-icons/wallet-dropdown-menu/details-icon.svg"
                width="16" height="16">
                <span class="my-dropdown-item ps-2">Загрузить выписку</span>
              </li>
            </a>
            <a href="#" @click.prevent="logout">
              <li class="d-flex py-2 ps-3">
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

<style lang="scss" scoped>
.wallet-body {
  max-width: 672px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
}
svg#wallet {
  height: auto;
  font-family: Inter;
  font-style: normal;
  fill: #fff;
}

svg#wallet .st2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
}

svg#wallet .st3 {
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
}
svg#wallet .st4 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
svg#wallet #wallet-btn-more:hover rect {
  opacity: 0.3;
  cursor: pointer;
  transition: opacity .1s;
}
svg#wallet #wallet-btn-more {
  outline: none;
}
svg#wallet #wallet-btn-more:active rect {
  opacity: 0.5;
}
svg#wallet  {
  div.wallet-btn-more {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 9px;
    position: absolute;
    right: 0;
    top: -44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.btn-circles {
    width: 4px;
    height: 4px;
    border-radius: 50px;
    background: #fff;
  }
  div.btn-circles::before {
    content: " ";
    width: 4px;
    height: 4px;
    border-radius: 50px;
    background: #fff;
    margin-left: 7px;
    position: absolute;
  }
  div.btn-circles::after {
    content: " ";
    width: 4px;
    height: 4px;
    border-radius: 50px;
    background: #fff;
    margin-left: -7px;
    position: absolute;
  }
  .btn-menu-content {
    position: absolute;
    width: 214px;
    margin: 0;
    // right: 135px;
    top: 50px;
  }
}
</style>

<style lang="scss" scoped>
.dropdown-menu.show {
  display: flex;
  flex-direction: column;
}
.my-dropdown-menu {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);
  width: 100%;
  a li:hover {
    background: #f6f6f6;
  }
  .btn-icon {
    position: relative;
  }
  li {
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #000;
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 1620px) {
  .wallet-body {
    width: 500px;
  }
  .my-dropdown-menu {
    margin: 100px 70px 0 0;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .wallet-body {
    width: 480px;
  }
}
@media (max-width: 991px) {
  .wallet-body {
    width: 400px;
  }
}
</style>

<script>
export default {
  name: 'wallet',
  props: {
    msg: String,
  },
  methods: {
    logout() {
      this.$router.push('/login?message=logout');
    },
  },
  // methods: {
  //   dropdown() {
  //     const $el = document.querySelector('#wallet-btn-more');
  //     const $dropdown = document.querySelector('#my-dropdown-id');
  //     $el.addEventListener('click', () => {
  //       $dropdown.classList.toggle('show');
  //     });
  //   },
  // },
  // mounted() {
  //   this.dropdown();
  // },
};
</script>
