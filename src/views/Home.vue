<template>
	<div class="home" style="height: 2000px;">
		<search-bar></search-bar>
		<swiper></swiper>
		<banner></banner>
		<navigation></navigation>
		<hot></hot>
		<countdown> </countdown>
		<spike></spike>
		<purchase></purchase>		
		<east-home></east-home>
		<crx></crx>
		<Recommend></Recommend>
		<productdetail></productdetail>
		<bottom></bottom>
	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar"
	import Swiper from "@/components/Home/Swiper"
	import Banner from "@/components/Home/Banner"
	import Navigation from "@/components/Home/Navigation"
	import Hot from "@/components/Home/Hot"
	import Countdown from "@/components/Home/Countdown"
	import Spike from "@/components/Home/Spike"
	import Purchase from "@/components/Home/Purchase"
	import EastHome from "@/components/Home/EastHome"
	import Crx from "@/components/Home/Crx"
	import Recommend from "@/components/Home/Recommend"
	import ProductDetail from "@/views/ProductDetail"
	import Bottom from "@/components/Footer"
	
	
	export default {
		name: 'home',
		components: {
			Bottom,
			SearchBar,
			Swiper,
			Banner,
			Navigation,
			Hot,
			Countdown,
			Spike,
			Purchase,			
			EastHome,
			Crx,
			Recommend,
			ProductDetail
		}
	}
</script>