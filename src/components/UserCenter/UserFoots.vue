<template>
	<div class="userfoots">
		<div class="pay">
			<div class="pay-item"  v-for="(item,index) in pays">
				<slot></slot>
				<span id="red" v-text="item.its">
				</span>
				<span v-text="item.test"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pays:[{
					its:'184',
					test:'商品收藏'
				},{
					its:'37',
					test:'店铺收藏'
				},{
					its:'90',
					test:'我的足迹'
				}]
			}
		}
	}
</script>
	
<style scoped="scoped">
	.userfoots{
		box-sizing: border-box;
		width: 100%;
		height: 80px;
		background-color: #fff;
		margin-bottom:10px;
	}
	
	.pay {
		box-sizing: border-box;
		display: flex;
		display: -webkit-flex;
	}
	
	.pay .pay-item {
		width: 25%;
		height: 100px;
		flex: 1;
		background-color: #fff;
		text-align: center;
	}
	
	.pay .pay-item span#red {
		display: block;
		padding-bottom: 10px;
		color: #333;
		font-weight: bold;
		font-size: 14px;
	}
	
	.pay .pay-item span {
		font-size: 12px;
		color: #666;
	}
</style>