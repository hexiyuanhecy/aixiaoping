<template>
  <div>
    <tab></tab>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <pubuliu></pubuliu>
  </div>
</template>

<script>
import Tab from '@/components/tab'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// import Pubuliu from './component/test'
export default {
  name: 'Home',
  components:{
    Tab,
    HomeHeader,
    HomeSwiper,
    HomeIcons
    // Pubuliu
  }
}
</script>

<style>

</style>
