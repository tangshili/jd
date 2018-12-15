<template>

	<div class="product-detail">
		<top-bar>
			<tab></tab>
		</top-bar>
		<div class="banner" style="margin-top: 50px;">
			<product-swiper></product-swiper>
		</div>
		<product-info></product-info>
		<white-strip></white-strip>
		<suit></suit>
		<committed-to></committed-to>
		<shop></shop>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	import Tab from "@/components/ProductDetail/TopNav"
	import WhiteStrip from "@/components/ProductDetail/WhiteStrip"
	import ProductInfo from "@/components/ProductDetail/ProductInfo"
	import ProductSwiper from "@/components/ProductDetail/ProductSwiper"
	import Suit from "@/components/ProductDetail/Suit"
	import CommittedTo from "@/components/ProductDetail/CommittedTo"
	import Shop from "@/components/ProductDetail/Shop"
	
	export default {
		data() {
			return {};
		},
		methods: {},
		mounted() {},
		components: {
			TopBar,
			Tab,
			WhiteStrip,
			ProductInfo,
			ProductSwiper,
			Suit,
			CommittedTo,
			Shop
		}
	}
</script>

<style>
	@import url("../assets/css/swiper.css");
	@import url("../assets/css/weui.css");
	.banner {
		width: 100%;
	}
	
	.product-detail .swiper-wrapper {
		width: 100%;
	}
	
	.product-detail .swiper-wrapper img {
		width: 100%;
	}
</style>