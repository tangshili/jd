<template>
	<!--/轮播图/-->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-01.jpg"></a>
			</div>
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-02.jpg"></a>
			</div>
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-03.jpg"></a>
			</div>
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-04.jpg"></a>
			</div>
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-05.jpg"></a>
			</div>
			<div class="swiper-slide">
				<a href="#"><img src="../../assets/images/swiper-06.jpg"></a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.min.css"
	export default {
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 0,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	}
</script>

<style>
	/*/轮播图start/*/
	
	.swiper-wrapper a {
		display: block;
		width: 100%;
	}
	
	.swiper-wrapper a img {
		width: inherit;
	}
</style>