<template>
  <div class="first-step">
    <h3>Предпринимательская деятельность</h3>
    <div class="first-step__container">
      <div class="first-step__item">
        <label>
          <input
            type="radio"
            name="match"
            class="first-step__input"
            value="ИП"
            v-model="model"
          />
          <div class="first-step__entre-icon">
            <svg class="img-icon" viewBox="0 0 20 20" width="20" height="20">
              <use class="ic-1"
              href="/img/app-icons/login-icons/login-step1-icons.svg#ip-ic" x="0" y="0" />
            </svg>
          </div>
          <span class="first-step__name">ИП</span>
        </label>
      </div>
      <div class="first-step__item">
        <label>
          <input
          type="radio"
          name="match"
          class="first-step__input"
          value="ТОО"
          v-model="model"
          />
          <div class="first-step__entre-icon">
            <svg class="img-icon" viewBox="0 0 20 20" width="20" height="20">
              <use class="ic-1"
              href="/img/app-icons/login-icons/login-step1-icons.svg#too-ic" x="0" y="0" />
            </svg>
          </div>
          <span class="first-step__name">ТОО</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'first-step',
  computed: {
    ...mapGetters(['getName']),
    model: {
      get() {
        return this.getName;
      },
      set(val) {
        this.changeName({ name: val });
        this.value = val;
      },
    },
  },
  methods: mapActions(['changeName']),
};
</script>

<style lang="scss" scoped>
.first-step {
  margin-top: 80px;
  h3 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: calc(.6rem + .8vw);
    line-height: 52px;

    color: #000000;
  }
  &__entre-icon {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: #ececec;
      transition: background-color .3s;
      display: flex;
      justify-content: center;
      align-items: center;
      .img-icon {
        stroke: #000;
      }
  }
  &__container {
    display: flex;
    column-gap: 40px;
    margin-bottom: 50px;
  }
  &__name {
      padding-left: 15px;
  }
  &__item {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    input:checked + .first-step__entre-icon {
      background: #009082;
      .img-icon {
        stroke: #fff;
      }
    }
    label {
      border: none;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      cursor: pointer;
    }
    &:hover {
      .first-step-icon {
        background: #e0e0e0;

      }
    }
  }
}
</style>
