<template>
	<div class="shopping-cart">
		<top-bar>购物车</top-bar>
		<cart1></cart1>
		<recommend></recommend>
		<foots></foots>
	</div>
</template>

<script>
	import TopBar from "@/components/TopBar"
	import Cart1 from "@/components/ShoppingCart"
	import Foots from "@/components/Footer"
	import Recommend from "@/components/ProductList"
	export default {
		name: 'cart',
	data() {
		return {
			
		};
	},
		methods: {
			
		},
		computed: {
			
		},
		components: {
			TopBar,
			Cart1,
			Foots,
			Recommend
		}
	}
</script>

<style>
	
</style>