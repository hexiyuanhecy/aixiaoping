<template>
  <div class="header">
		<div class="header-left">
      <span class="iconfont">&#xeba9;</span>
      浙江理工大学</div>
		<div class="header-input">
      <span class="iconfont">&#xeb9e;</span>
      查找</div>
		<!-- <div class="hearder-right">
      <span class="iconfont">&#xeba2;</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    display: flex
    width: 100%
    line-height: .86rem
    background: $bgColor
    color: #000
    height: .86rem
    .header-left
      width: 30%
      float: left
      margin-left: 15px
    .header-input
      width: 60%
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
 

</style>
