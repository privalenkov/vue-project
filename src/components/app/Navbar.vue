<template>
  <header class="mnb navbar navbar-default navbar-fixed-top">
    <div class="container-fluid main-container">
      <div id="navbar" class="navbar navbar-collapse">
        <form class="d-flex search-container">
          <input id="search-bar"
          placeholder="Поиск по слову" aria-label="Search">
          <button class="btn btn-outline-success search-btn d-flex" type="submit">
            <img src="/img/app-icons/search-icon.svg">
          </button>
        </form>
        <ul class="nav navbar">
          <li><a href="#"><img class="bell-icon" src="/img/app-icons/don-don-icon.svg"></a></li>
          <li>
            <div class="container container-profile">
              <a href="#" data-bs-toggle="dropdown">
                <ul class="nav navbar profile-body">
                  <li>
                    <div class="profile-image">
                      <div class="border-inside"></div>
                      <img id="profile-image" src="/img/profile-image.jpg">
                    </div>
                  </li>
                  <li class="profile-name">Dias Moldashev</li>
                  <li><img class="arrow-icon" src="/img/arrow-icon.svg"></li>
                </ul>
              </a>
              <ul class="dropdown-menu my-dropdown-menu" aria-labelledby="dLabel">
                  <div class="pb-3">
                    <!-- <router-link to:="/profile"> -->
                      <a href="#">
                        <li class="d-flex pb-2 py-2 ps-3">
                          <div class="dropdown-item-icon"></div>
                          <img class="btn-icon m-2"
                          src="/img/app-icons/menu-items/profile-btn-icon.svg"
                          width="20" height="20">
                          <span class="my-dropdown-item">Мой профиль</span>
                        </li>
                      </a>
                    <!-- </router-link> -->
                    <a href="#" to:="/settings">
                      <li class="d-flex py-2 ps-3">
                          <div class="dropdown-item-icon"></div>
                          <img class="btn-icon m-2"
                          src="/img/app-icons/menu-items/settings-btn-icon.svg"
                          width="20" height="20">
                          <span class="my-dropdown-item">Настройки</span>
                      </li>
                    </a>
                  </div>
                  <div class="hr-line align-self-center"></div>
                  <a href="#" @click.prevent="logout">
                    <li class="d-flex mt-3 py-2 ps-3">
                        <div class="dropdown-item-icon exit-icon"></div>
                        <img class="btn-icon m-2" src="/img/app-icons/menu-items/exit-btn-icon.svg"
                        width="20" height="20">
                        <span class="my-dropdown-item">Выход</span>
                    </li>
                  </a>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-container {
  padding: 0 30px 0 308px;
  // padding: 0 30px 0 0;
}
ul.nav {
  align-self: center;
  img.bell-icon {
    width: 24px;
    height: 24px;
  }
}
a {
  text-decoration: none;
}
.container-profile {
  .profile-body {
    list-style: none;
    margin: 0 0 0 20px;
  }
  li img.arrow-icon {
    width: 12px;
  }
  li.profile-name {
    user-select: text;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    text-align: right;

    color: #000000;
    margin: 0px 8px;
  }
  .profile-image .border-inside {
    position: absolute;
    width: 40px;
    border-radius: 10px;
    height: 40px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1) inset;
  }
  .profile-image {
    position: relative;
    // border: 1px solid rgb(0, 0, 0) inset;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
      z-index: 1;
    }
  }
}

.search-container {
  display: block;
  margin: 0;
  position: relative;
  input#search-bar{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    margin: 0 auto;
    height: 56px;
    border: 1px #fff solid;
    border-radius: 12px;
    outline: none;
    padding: 20px 80px 20px 20px;
    &:focus {
      transition: 0.35s ease;
      &::-webkit-input-placeholder{
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
  }
  .search-btn {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 10px;
    border: none;
    background: #009C8C;
    border-radius: 9px;
    align-self: center;
    padding: 0;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
}
.navbar-default {
  background-color: #F5F5F5;
  position: absolute;
  top: 0;
  z-index: 1000;
  padding: 0 30px 0 0;
  width: 100vw;
}
.navbar-default #navbar {
  flex-wrap: wrap-reverse;
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
  font-size: 16px;
  line-height: 28px;
  border: none;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);
  // padding: 20px;
  width: 100%;
  a li:hover {
    background: #f6f6f6;
  }
  li {
    align-items: center;
  }
  .btn-icon {
    position: absolute;
  }
  .hr-line {
    width: 94%;
    background: #000;
    opacity: .1;
    height: 1px;
  }
  .my-dropdown-item {
    text-decoration: none;
    color: #000;
    padding: 0 20px;
  }
  .dropdown-item-icon {
    width: 36px;
    height: 36px;
    background: #000000;
    opacity: 0.04;
    border-radius: 9px;
  }
  .exit-icon {
    background: #CD5151;
  }
}
</style>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$router.push('/login?message=logout');
    },
  },
  beforeUnmount() {
  },
};
</script>
