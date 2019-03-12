<template>
<div class="wrapper">
	<!-- 解决画面加载时抖动 -->
	  <swiper :options="swiperOption">
			<!-- slides -->
			<swiper-slide v-for="item of swiperList" :key="item.id">
				<img 
					class="swiper-img" 
					:src="item.imgUrl" alt="">
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			<!-- <div class="swiper-button-prev" slot="button-prev"></div>	左右箭头
			<div class="swiper-button-next" slot="button-next"></div> -->
			<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> 		滚动条-->
		</swiper>
</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data (){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true //循环播放
			},
			swiperList:[{
				id:'0001',
				imgUrl:'https://p1.meituan.net/deal/d851c18a114b781ef27357d73200a5a9178491.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
			},{
				id:'0001',
				imgUrl:'https://p1.meituan.net/deal/9d63beeca8c829188f3d3bf7594408a635023.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
			},{
				id:'0001',
				imgUrl:'https://p1.meituan.net/deal/aa55f93c14d52841d3b7b7edd7a3816444952.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrapper >>> .swiper-pagination-bullet-active
	background:#fff
.wrapper
	overflow:hidden
	width:100%
	height:0
	padding-bottom: 63%// 实现宽高比为45%
	backgound:#eee//图片未加载时显示灰色背景
	.swiper-img
		width : 100%
</style>
