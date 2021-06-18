<template>
  <div class="base-tooltip">
    <div @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <transition name="tooltip">
      <div v-show="isShown"
      class="base-tooltip__my-tooltip base-tooltip__my-tooltip_bottom">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'tooltip',
  props: {
    text: String,
  },
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-tooltip {
  position: relative;

  .tooltip-enter-active,
  .tooltip-leave-active {
    transition: opacity .3s ease;
  }

  .tooltip-enter-from,
  .tooltip-leave-to {
    opacity: 0;
  }

  .base-tooltip__my-tooltip {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;

    position: absolute;
    background: rgba(0, 0, 0, 0.88);
    border-radius: 11px;
    padding: 8px 15px;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    &_bottom {
      margin-top: 10px;
    }

    &:before {
      content: '';
      width: 0;
      height: 0;
      border-left: solid 5px transparent;
      border-right: solid 5px transparent;
      border-bottom: solid 5px rgba(0, 0, 0, 0.88);
      position: absolute;
      transform: translateX(-50%) translateY(-2px);
      top: -.2em;
      left: 50%;
      transition: opacity 0.2s cubic-bezier(.64,.09,.08,1),
      transform 0.2s cubic-bezier(.64,.09,.08,1);
      z-index: 3;
    }
  }
}
</style>
