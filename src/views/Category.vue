<template>

	<div class="category-page">
		<search-bar></search-bar>
		<category></category>
		
		<search-page v-model="show"></search-page>
		<bottom></bottom>
	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import SearchPage from "@/components/SearchPage"
	import Category from "@/components/Category/CategoryInner"
	import SearchBar from "@/components/SearchBar"
	export default {
		data(){
			return {
				show:false,
			}
		},
		methods:{
			search(val){
				console.log(val);
			}
		},
		components: {
			SearchPage,
			Bottom,
			Category,
			SearchBar
		}
	}
</script>

<style>
.category-page .search-bar{
	    background-color: #e43130;
}
</style>