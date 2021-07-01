<template>
    <div class="popup-wrapper" v-if="getIsShown">
      <div class="popup">
        <div class="popup__header">
          <span @click="toggleShow" class="popup__btn-close"></span>
        </div>
        <div class="popup__content">
          <slot></slot>
        </div>
        <div class="popup__footer">
          <Button title="Далее"/>
          <div class="popup__link">
            <router-link tag="a" to="">
              <span>Не пришёл код?</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/app/button/button.vue';

export default {
  name: 'popup',
  components: {
    Button,
  },
  computed: mapGetters(['getIsShown']),
  methods: mapActions(['toggleShow']),
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 999;
  left: 0;
  background: rgba(0, 0, 0, .5);
}
.popup {
  padding: 30px;
  font-family: Inter;
  font-style: normal;
  background: #F5F5F5;
  border-radius: 40px;
  &__header {
    padding-bottom: 40px;
    display: flex;
    flex-direction: row-reverse;
  }
  &__footer, &__content {
    text-align: center;
    padding: 0 50px;
  }
  &__footer {
    display: grid;
    row-gap: 20px;
    padding-bottom: 20px;
  }
  &__btn-close {
    width: 16px;
    height: 16px;
    &::after {
      content: ' ';
      width: 16px;
      cursor: pointer;
      height: 16px;
      opacity: 0.5;
      display: inline-block;
      position: absolute;
      background: url('/img/btn-close-icon.svg') no-repeat;
      background-size: cover;
    }
  }
  &__link {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    a {
      outline: none;
      text-decoration: none;
      color: #808080;
      &:hover {
        color: #4e4e4e;
      }
    }
  }
}
</style>
