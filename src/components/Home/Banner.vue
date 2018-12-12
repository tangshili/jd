<template>
	<div class="banner" id="ad">
		<img src="../../assets/images/banner.gif" />
		<div class="swiper-container" id="ad-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../../assets/images/banner-01.png" /></div>
				<div class="swiper-slide"><img src="../../assets/images/banner-02.png" /></div>
				<div class="swiper-slide"><img src="../../assets/images/banner-03.png" /></div>
				<div class="swiper-slide"><img src="../../assets/images/banner-04.png" /></div>
				<div class="swiper-slide"><img src="../../assets/images/banner-05.png" /></div>
			</div>
		</div>
	</div>

</template>

<script>
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.min.css"
	export default {
		mounted: function() {
			var swiper = new Swiper('#ad-swiper', {
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
/*/banner start/*/
#ad{
	width:100%;
	position:relative;
}
#ad img{
	width:100%;	
}
#ad .swiper-container{
	width:70px;
	height:70px;
	overflow:hidden;
	position:absolute;
	top:25px;
	left:45px;
}
#ad .swiper-slide img{
	width:inherit;
	height:inherit;
	float:left;
}
</style>