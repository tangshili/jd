<template>

	<div class="search-page" style="border-bottom: solid 1px #CCCCCC;">
		<div class="search-top-bar" style="height: 50px; display: flex;">
			<div style="width: 50px;"></div>
			<div class="serach" style="flex: 1;padding-top: 10px;">
				<input type="text" v-model="keyword" style="width: 100%;height: 30px;border: solid 1px #CCCCCC;border-radius: 15px;" name="" id="" value="" @focus="show=true" />
			</div>			
			<div style="width: 50px;"></div>
		</div>
		<product v-for="(item,index) in products" :id="item.id" :title="item.title" :image="item.image" :price="item.price"></product>
		<search-list></search-list>
		<bottom></bottom>
		<search-page v-model="show" @search="search"></search-page>
	</div>
</template>

<script>
	import SearchList from "@/components/Search/SearchList"
	import Bottom from "@/components/Footer"
	import SearchPage from "@/components/SearchPage"
	import Product from "@/components/SearchProduct"
	import axios from "axios"
	import qs from "qs"
	export default {
		data() {
			return {
				keyword: '',
				products: [],
				show: false,
				fixed: false
			};
		},
		methods: {
			search(val) {
				this.products = val;
			}
		},
		components: {
			Bottom,
			SearchPage,
			Product,
			SearchList
		},
		created() {
			console.log(this.$route);
			if(this.$route.params.product != null) {
				this.products = this.$route.params.product;
			}
		}
	}
</script>

<style>

</style>