<template>
  <div class="image-window">
    <div class="image-window__grid-image">
      <transition-group name="image" mode="out-in">
        <img :key="image" :src="images[image]">
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-window',
  data: () => ({
    image: 0,
    images: ['/img/login-img/image-frame1.jpg', '/img/login-img/image-frame2.jpg'],
    interval: null,
  }),
  methods: {
    imageChange() {
      this.interval = setInterval(() => {
        if (this.image < this.images.length - 1) {
          this.image += 1;
        } else {
          this.image = 0;
        }
      }, 12000);
    },
  },
  mounted() {
    this.imageChange();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.image-window {
  display: flex;
  position: fixed;
  height: auto;
  bottom: 0;
  top: 0;
  right: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 39vw;
  margin-right: 12px;
  &__grid-image {
    z-index: 100;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    width: 100%;
    img {
      height: 100%;
      position: absolute;
      display: block;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
}

.image-enter-active,
.image-leave-active {
  transition: opacity 5s ease;
}

.image-enter-from,
.image-leave-to {
  opacity: 0;
}
</style>
