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
		mounted() {
			let swiper = new Swiper('#ad-swiper', {
				spaceBetween: 0,
//				centeredSlides: true,
				autoplay: {
					delay: 1500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '#ad-swiper .swiper-pagination',
					clickable: true,
				}
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
#ad>img{
	width:100%;	
}
#ad-swiper{
	width:70px;
	height:70px;
	overflow:hidden;
	position:absolute;
	top:25px;
	left:45px;
}

#ad-swiper .swiper-wrapper{
	/*width:70px;
	height:70px;*/
}
#ad-swiper .swiper-slide{
	/*width:70px;
	height:70px;*/
}
#ad-swiper img{
	width:70px;
	height:70px;	
}
</style>