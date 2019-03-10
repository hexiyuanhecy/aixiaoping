<template>
  <div>
    <home-header></home-header>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/header/Header'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeIcons
  }
}
</script>

<style>

</style>
