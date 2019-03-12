<template>
  <div class="icons">
      <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style lang='stylus' scoped>
.icons
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 50%
  background: #ccc
  .icon
    float: left
    width: 25%
    padding-bottom:25%
    background: red
</style>
