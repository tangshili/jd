<template>

	<div>
		<top-bar>

			<tab></tab>	

		</top-bar>
		<!--图片-->
		<div class="banner">
			<!--/轮播图/-->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in images">
						<img :src="item"/>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<!--套餐选择-->
		<!--商品详情-->
		<!--商品评论-->
		<!--商品推荐-->
		<!--加入购物车&立即购买-->
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	import Swiper from "swiper"
	import Tab from "@/components/ProductDetail/TopNav";
	export default {
		data() {
			return {
				
				images: [require('../assets/images/img-1.png'), require('../assets/images/img-2.png'), require('../assets/images/img-3.png'), require('../assets/images/img-4.png'), require('../assets/images/img-5.png'), require('../assets/images/img-6.png')]
			};
		},
		methods: {

		},
		mounted(){
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		},
		components: {
			TopBar,
			Tab

		}
	}
</script>

<style>
	/*@import url("../assets/css/swiper.css");*/
	
	/**/
	
	.banner {
		width: 100%;
	}
	
	.banner .swiper-wrapper {
		display: block;
		width: 100%;
	}
	
	.banner .swiper-wrapper img {
		width: 100%;
	}
</style>