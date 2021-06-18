<template>
  <div class="flex-container">
    <ToastList />
    <Navbar />
    <Sidebar />
    <div class="mcw mcw_scroll">
      <div class="mcw__cv">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';
import ToastList from '@/components/app/toast/ToastList.vue';

export default {
  name: 'main-layout',
  components: {
    Navbar, Sidebar, ToastList,
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
}
</style>

<style lang="scss" scoped>

.mcw {
  overflow: auto;
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
  .mcw__cv {
    padding: 0 60px 0 308px;

    @media (max-width: 910px) {
      padding: 0 60px 0 308px;
    }
  }
}
</style>
