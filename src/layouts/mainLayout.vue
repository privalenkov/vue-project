<template>
  <Navbar />
  <Sidebar />
  <div class="mcw scroll">
    <div class="cv">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mcw {
  // margin: 90px 0 0 268px;
  position: relative;
  height: 100vh;
  overflow: auto;
  padding: 0;
}
.cv {
  padding: 130px 60px 0 308px;
}
.mcw {
    animation: bodyslidein 300ms forwards;
    transform-style: preserve-3d;
}
@media (max-width: 910px) {
  .cv {
    padding: 180px 0 0 308px;
  }
}
</style>

<style lang="scss">
.scroll::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}
.scroll::-webkit-scrollbar-track {
  background: none;
}
.scroll::-webkit-scrollbar-thumb {
  background: rgba(190,190,190,1);
  border-radius: 10px;
  box-sizing: border-box;
  border: solid 5px #f5f5f5;
}
.scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(125,125,125,1);
}
.scroll::-webkit-scrollbar-corner {
  background: rgba(250,250,250,1);
}
</style>

<script>
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';

export default {
  name: 'main-layout',
  components: {
    Navbar, Sidebar,
  },
};
</script>
