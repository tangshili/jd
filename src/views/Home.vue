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
		<productlist></productlist>
		<bottom></bottom>
	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import SearchBar from "@/components/Home/SearchBar"
	import Swiper from "@/components/Home/Swiper"
	import Banner from "@/components/Home/Banner"
	import Navigation from "@/components/Home/Navigation"
	import Hot from "@/components/Home/Hot"
	import Countdown from "@/components/Home/Countdown"
	import Spike from "@/components/Home/Spike"
	import Purchase from "@/components/Home/Purchase"
	import ProductList from "@/components/ProductList"
	
	
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
			ProductList
		}
	}
</script>