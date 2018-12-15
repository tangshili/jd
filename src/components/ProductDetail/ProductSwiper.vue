<template>

	<!--/轮播图/-->
	<div class="swiper-container" id="product-swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images">
				<img :src="item" />
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	export default {
		data() {
			return {
				images: [require('../../assets/images/img-1.png'), require('../../assets/images/img-2.png'), require('../../assets/images/img-3.png'), require('../../assets/images/img-4.png'), require('../../assets/images/img-5.png'), require('../../assets/images/img-6.png')]
			};
		},
		mounted() {
			new Swiper('#product-swiper', {
				pagination: {
					el: '#product-swiper .swiper-pagination',
				},
				autoplay: true
			});
		}
	}
</script>

<style>

</style>