<template>
  <div class="toast-container">
    <div class="toast-container__my-toast"
    role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-container__toast-body">
        <div class="toast-container__icon-type" :class="typeClass"></div>
        <span class="title">{{ propToast.title }}</span>
      </div>
      <button @click="removeToast(propToast)" type="button"
      class="toast-container__toast-btn-close" aria-label="Close"></button>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'toast',
  props: ['propToast'],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `toast-container__icon-type_type-${this.propToast.type}`;
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeToast(this.propToast);
    }, 5000);
  },
  methods: mapActions(['removeToast']),
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.toast-container {
  padding: .5rem 0 .5rem 0;

  &__my-toast {
    width: 420px;
    max-width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 25px rgba(0, 0, 0, 0.02);
    border-radius: 12px;
  }
  .toast-container__my-toast {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
  }
  .toast-container__toast-body {
    padding: 0.75rem;
    word-wrap: break-word;
    align-items: center;
    display: flex;
  }
  .toast-container__toast-btn-close {
    box-sizing: content-box;
    width: 0.8em;
    height: 0.8em;
    color: #000;
    cursor: pointer;
    background: url('/img/btn-close-icon.svg') center/1em auto no-repeat;
    border: 0;
    padding: 0;
    margin: 0.8rem 0.8rem 0 auto;
    opacity: 0.32;

  }
  .toast-container__icon-type {
    width: 36px;
    height: 36px;
    background: #ebebeb;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .7rem;

    &::after {
      content: ' ';
      width: 26px;
      height: 26px;
      position: absolute;
    }
    &_type {
      &-info {
        background: linear-gradient(180deg, #5959D3 -41.18%, #3131A3 141.18%);
        &::after {
          background: url('/img/app-icons/toast-icons/btn-info-icon.svg')
          center/1em auto no-repeat;
          background-size: contain;
        }
      }
      &-warning {
        background: linear-gradient(180deg, #FDB102 -41.18%, #BE9943 141.18%);
        &::after {
          background: url('/img/app-icons/toast-icons/btn-warning-icon.svg')
          center/1em auto no-repeat;
          background-size: contain;
        }
      }
      &-error {
        background: linear-gradient(180deg, #D73434 -41.18%, #B14242 141.18%);
        &::after {
          background: url('/img/app-icons/toast-icons/btn-error-icon.svg')
          center/1em auto no-repeat;
          background-size: contain;
        }
      }
      &-success {
        background: linear-gradient(180deg, #34D7C6 -41.18%, #42B1A6 141.18%);
        &::after {
          background: url('/img/app-icons/toast-icons/btn-success-icon.svg')
          center/1em auto no-repeat;
          background-size: contain;
        }
      }
    }
  }
}
</style>
