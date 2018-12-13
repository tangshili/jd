<template>
	<div class="spike weui-flex">
			<div class="spike-1 " style="flex: 1;" v-for="(item,index) in spike">
				<img :src="item.image" />
				<span>¥{{item.price1}}</span>
				<i>¥ {{item.price2}}</i>
			</div>
			
	</div>
</template>

<script>
	export default {
		data() {
			return {
				spike: [{
					id:1,
					title: '',
					price1:75,
					price2:88,
					image: require('../../assets/images/5-1.png')			
				},{
					id:2,
					title: '',
					price1:1098,
					price2:3288,
					image: require('../../assets/images/5-2.png')			
				},{
					id:4,
					title: '',
					price1:4568,
					price2:5800,
					image: require('../../assets/images/5-3.png')			
				},{
					id:4,
					title: '',
					price1:39,
					price2:58,
					image: require('../../assets/images/5-4.png')			
				},{
					id:5,
					title: '',
					price1:3280,
					price2:4580,
					image: require('../../assets/images/5-5.png')			
				}]
			}
		}
	}
</script>

<style>
	.spike{
		margin:20px auto 10px;
		text-align: center;
	}
	.spike img{
		width:100%;
	}
	.spike span{
		font-size:12px;
		display:block;
		line-height: 18px;
	}
	.spike i{
		font-size:12px;
		color:#ccc;
		text-decoration:line-through;
	}
	
	
</style>