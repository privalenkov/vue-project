<template>
  <div class="msb msb_scroll" id="msb">
    <nav>
      <div>
        <div class="msb__logo-container">
          <Logo />
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
                  <div class="sidebar-menu-container__item-menu
                  sidebar-menu-container__item-menu_s-pl">
                    <svg class="img-icon" viewBox="0 0 24 24" width="24" height="24">
                      <use class="ic-1"
                      :href="link.svg" x="0" y="0" />
                    </svg>
                    {{ link.title }}
                    <img v-if="link.isDropdown"
                    class="sidebar-menu-container__arrow-dropdown" src="/img/arrow-icon.svg">
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
                        <div class="sidebar-menu-container__item-menu m-pl">
                            <svg class="img-icon" viewBox="0 0 24 24" width="24" height="24">
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
      <footer class="footer-container">
        <div class="country-flags-body">
          <a href="#">
            <img src="/img/app-icons/menu-items/country-flags/russia.svg"
            alt="contry-flag" width="15" height="15">
            <div class="country-flags-body__title">
              Русский
              <span><img class="country-flags-body__arrow-icon" src="/img/arrow-icon.svg"></span>
            </div>
          </a>
        </div>
        <ul>
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

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'sidebar',
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
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
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
  z-index: 999;
  .msb__logo-container {
    padding-top: 0.5rem;
  }
  nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1.5rem;
  }
}

.sidebar-menu-container {
  ul {
    padding: 0;
    list-style: none;
    svg.img-icon {
      margin-bottom: 0.25rem;
    }
    li.active {
      a {
        color: #009C8C;
      }
      svg.img-icon {
        margin-bottom: 0.25rem;
        use.ic-1 {
          stroke: #009C8C;
        }
      }
      .sidebar-menu-container__item-menu {
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
  .sidebar-menu-container__item-menu {
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 25px 16px 0;
    // width: 219px;
  }
  li:hover .sidebar-menu-container__item-menu {
    background: #FFFFFF;
    border-radius: 10px;
  }
  .sidebar-menu-container__item-menu_s-pl {
    padding: 0.5rem 0.8rem;
  }
  svg.img-icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    path {
      stroke: inherit;
    }
    use.ic-1 {
      stroke: #000;
    }
  }
  .sidebar-menu-container__arrow-dropdown {
    padding-left: 1rem;
  }
}
</style>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3rem;
  a {
    text-decoration: none;
    color: #000000;
  }
  .country-flags-body {
    a {
      display: flex;
      align-items: center;
      padding-bottom: 0.5rem;
    }
    .country-flags-body__title {
      padding-left: .5rem;
    }
  }
  .country-flags-body__arrow-icon {
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
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.75;
    margin-top: 0;
    margin-bottom: 1rem;
    li {
      padding: 2px 5px;
    }
    li a:hover {
      color: #575757;
    }
  }
}
</style>

<style lang="scss" scoped>
.my-dropdown-list-body {
  overflow: hidden;
  height: 0;
  transition: height .3s ease;
  margin: -15px 0 0 0;
  &.active-dropdown {
    height: 272px;
  }
  .m-pl {
    padding: 0.5rem 2.3rem;
  }
  svg.img-icon {
    margin-top: 0.5rem;
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
  }
}
</style>

<style lang="scss" scoped>
.msb {
  &_scroll::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  &_scroll::-webkit-scrollbar-track {
    background: none;
  }
  &_scroll::-webkit-scrollbar-thumb {
    background: rgba(190,190,190,1);
    border-radius: 10px;
    box-sizing: border-box;
    border: solid 5px #f5f5f5;
  }
  &_scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(125,125,125,1);
  }
  &_scroll::-webkit-scrollbar-corner {
    background: rgba(250,250,250,1);
  }
}
</style>
