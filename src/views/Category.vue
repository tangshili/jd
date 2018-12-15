<template>

	<div class="category-page">
		<h1>分类</h1>
		<input type="text" name="" id="" value="" @focus="show=true" />
		
		<search-page v-model="show"></search-page>
		<bottom></bottom>
	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import SearchPage from "@/components/SearchPage"
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
			Bottom
		}
	}
</script>

<style>

</style>