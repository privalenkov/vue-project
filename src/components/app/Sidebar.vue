<template>
  <div class="msb scroll" id="msb">
    <nav class="ps-4">
      <div>
        <div class="navbar-header navbar">
          <img src="/img/logo.svg" alt="company-logo"
          title="Company logo" class="navbar" style="width: 154px;">
        </div>
        <div class="sidebar-menu-container">
          <ul>
            <router-link
              v-for="link in links"
              :to="link.url"
              :key="link.url"
              v-slot="{ href, navigate, isActive }"
              custom
            >
              <li :class="{ 'active': link.isDropdown ? false : isActive ,
              'active-dropdown': isActive && link.isDropdown,
              'my-dropdown-list': link.isDropdown }">
                <a :href="href" @click="navigate">
                  <div class="item-menu s-pl">
                    <svg class="img-icon mb-1" viewBox="0 0 24 24" width="24" height="24">
                      <use class="ic-1"
                      :href="link.svg" x="0" y="0" />
                    </svg>
                    {{ link.title }}
                    <img v-if="link.isDropdown" class="ps-3" src="/img/arrow-icon.svg">
                  </div>
                </a>
              </li>
              <div v-if="link.isDropdown" :class="{'my-dropdown-list-body': true,
              'active-dropdown': isActive}">
                <ul>
                  <router-link
                    v-for="dropdownLink in links[1].dropdown"
                    :to="dropdownLink.url"
                    :key="dropdownLink.url"
                    v-slot="{ href, navigate, isActive }"
                    custom
                  >
                    <li :class="{ 'active': isActive,
                    'my-dropdown-list-item': true }">
                      <a :href="href" @click="navigate">
                        <div class="item-menu m-pl">
                            <svg class="img-icon mt-2" viewBox="0 0 24 24" width="24" height="24">
                              <use class="ic-1"
                              :xlink:href="dropdownLink.svg" x="0" y="0" />
                            </svg>
                            {{dropdownLink.title}}
                        </div>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
      <footer class="container pe-5">
        <div class="country-flags-body">
          <a href="#" class="d-flex align-items-center pb-2">
            <img src="/img/app-icons/menu-items/country-flags/russia.svg"
            alt="contry-flag" width="15" height="15">
            <div class="ps-2">
              Русский
              <span><img class="arrow-icon" src="/img/arrow-icon.svg"></span>
            </div>
          </a>
        </div>
        <ul class="list-unstyled addit-inf">
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Правила</a>
          </li>
          <li>
            <a href="#">Оферта</a>
          </li>
          <li>
            <a href="#" >Помощь</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
        </ul>
      </footer>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu-container {
  ul {
    padding: 0;
    list-style: none;
    .item-menu {
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      margin: 16px 0px;
      width: 219px;
    }
    .s-pl {
      padding: 0.5rem 0.8rem;
    }
    li.active {
      a {
        color: #009C8C;
      }
      svg.img-icon {
        use.ic-1 {
          stroke: #009C8C;
        }
      }
      .item-menu {
        background: #FFFFFF;
        border-radius: 10px;
      }
    }
    a {
      color: #000;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-decoration: none;
    }
  }

  svg.img-icon {
    // margin: 0 10px 5px 0;
    width: 24px;
    height: 24px;
    path {
      stroke: inherit;
    }
    use.ic-1 {
      stroke: #000;
    }
  }
}

.msb {
  width: 268px;
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  min-height: 100%;
  overflow-y: auto;
  white-space: nowrap;
  height: 100%;
  z-index: 1001;
  footer {
    a {
      text-decoration: none;
      color: #000000;
    }
    .addit-inf li a:hover {
      color: #575757;
    }
    .country-flags-body .arrow-icon {
      widows: 6px;
      height: 6px;
    }
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    ul {
      display: flex;
      flex-wrap: wrap;
      opacity: 0.75;
      li {
        padding: 2px 5px;
      }
    }
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .navbar {
    border: none;
    margin-left: 0;
    background-color: inherit;
  }
  .navbar-header {
    width: 100%;
    margin-bottom: 20px;
  }
  .navbar-nav {
    .panel {
      border: 0 none;
      box-shadow: none;
      margin: 0;
      background: inherit;
    }
    li {
      display: block;
      width: 100%;
      a {
        padding: 15px;
        color: #5f5f5f;
        .glyphicon, .fa {
          margin-right: 8px;
        }
      }
    }
  }
  .nb {
    padding-top: 5px;
    padding-left: 10px;
    margin-bottom: 30px;
    overflow: hidden;
  }
}
.msb {
    -moz-animation: slidein 300ms forwards;
    -o-animation: slidein 300ms forwards;
    -webkit-animation: slidein 300ms forwards;
    animation: slidein 300ms forwards;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
</style>

<style lang="scss" scoped>
.sidebar-menu-container {
  ul {
    padding: 0;
    list-style: none;
    li:hover .item-menu {
      background: #FFFFFF;
      border-radius: 10px;
    }
  }
}
</style>

<style lang="scss" scoped>
.my-dropdown-list-body  {
  &.active-dropdown {
    height: 272px;
  }
}
.my-dropdown-list-body {
  overflow: hidden;
  height: 0;
  transition: height .3s ease;
  margin: -15px 0 0 0;
  .m-pl {
    padding: 0.5rem 2.3rem;
  }
  li.active-dropdown {
    a {
      color: #009C8C;
    }
    svg.img-icon {
      use.ic-1 {
        stroke: #009C8C;
      }
    }
    .item-menu {
      background: #FFFFFF;
      border-radius: 10px;
    }
  }
}
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Главная',
        url: '/',
        svg: '/img/app-icons/menu-items/menu-icons.svg#main-ic',
        exact: true,
      },
      {
        title: 'Фин. операция',
        url: '/operation/whole-list',
        svg: '/img/app-icons/menu-items/menu-icons.svg#oper-ic',
        isDropdown: true,
        dropdown: [
          { title: 'Весь список', url: '/operation/whole-list', svg: '/img/app-icons/menu-items/menu-dropdown-icons.svg#whole-list-ic' },
          { title: 'Транзакции', url: '/operation/transactions', svg: '/img/app-icons/menu-items/menu-dropdown-icons.svg#transactions-list-ic' },
          { title: 'Реестры', url: '/operation/registers', svg: '/img/app-icons/menu-items/menu-dropdown-icons.svg#registers-list-ic' },
          { title: 'Автопогашения', url: '/operation/auto-cancellation', svg: '/img/app-icons/menu-items/menu-dropdown-icons.svg#aito-cancellation-list-ic' },
        ],
      },
      {
        title: 'Отчётность',
        url: '/report',
        svg: '/img/app-icons/menu-items/menu-icons.svg#rep-ic',
      },
      { title: 'Тарифы', url: '/tariffs', svg: '/img/app-icons/menu-items/menu-icons.svg#rate-ic' },
      { title: 'Роли и доступы', url: '/roles', svg: '/img/app-icons/menu-items/menu-icons.svg#role-ic' },
      { title: 'Клиенты', url: '/clients', svg: '/img/app-icons/menu-items/menu-icons.svg#clients-ic' },
    ],
  }),
};
</script>
