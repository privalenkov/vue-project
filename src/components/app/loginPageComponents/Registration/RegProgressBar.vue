<template>
  <div class="reg-progress-bar">
    <ul class="reg-progress-bar__container">
      <li :class="{'active': step < 3, 'passed': step >= 3}">
        <div class="reg-progress-bar__icon">
          <svg class="img-icon" viewBox="0 0 20 20" width="20" height="20">
            <use class="ic-1"
            href="/img/app-icons/login-icons/login-icons.svg#author-ic" x="0" y="0" />
          </svg>
        </div>
        <div class="reg-progress-bar__title">Авторизация</div>
      </li>
      <li class="reg-progress-bar__arrow">
        <img src="/img/app-icons/login-icons/login-arrow-icons.svg" width="16" height="16">
      </li>
      <li :class="{'active': step < 5 && step >= 3, 'passed': step >= 5}">
        <div class="reg-progress-bar__icon">
          <svg class="img-icon" viewBox="0 0 20 20" width="20" height="20">
            <use class="ic-1"
            href="/img/app-icons/login-icons/login-icons.svg#ancetr-ic" x="0" y="0" />
          </svg>
        </div>
        <div class="reg-progress-bar__title">Анкетирование</div>
      </li>
      <li class="reg-progress-bar__arrow">
        <img src="/img/app-icons/login-icons/login-arrow-icons.svg" width="16" height="16">
      </li>
      <li :class="{'active': step >= 5}">
        <div class="reg-progress-bar__icon">
          <svg class="img-icon" viewBox="0 0 20 20" width="20" height="20">
            <use class="ic-1"
            href="/img/app-icons/login-icons/login-icons.svg#contra-ic" x="0" y="0" />
          </svg>
        </div>
        <div class="reg-progress-bar__title">Договор</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'reg-progress-bar',
  props: {
    step: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reg-progress-bar {
  &__container {
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0;
    column-gap: 20px;
    li {
      display: flex;
      align-items: center;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;

    }
    .reg-progress-bar__arrow {
      display: flex;
      justify-content: center;

      img {
        user-select: none;
        -webkit-user-drag: none;
      }
    }
  }
  li.active {
    .reg-progress-bar__title {
      color: #000;
    }
    .reg-progress-bar__icon {
      animation: .3s unlockStep;
      svg {
        stroke: #000;
      }
      &::after {
        content: ' ';
        position: absolute;
        width: 36px;
        border-radius: 13px;
        padding: 1.5px;
        border: #009082 2.5px solid;
        height: 36px;
        margin: -4px;
      }
    }
  }
  li.passed {
    .reg-progress-bar__title {
      color: #000;
    }
    .reg-progress-bar__icon {
      background: #009082;
      animation: .3s passedStep ;
      svg {
        stroke: #fff;
      }
    }
  }
  &__icon {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
      stroke: #B8B8B8;
    }
  }
  &__title {
    color: #B8B8B8;
    padding-left: 12px;
  }
}
@keyframes passedStep {
    0% {
        transform: scale(1);
    }
    30% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes unlockStep {
    0% {
        transform: scale(1);
    }
    30% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(0.8);
    }
    70% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
