<template>
	<div class="user-coupon">
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
					its:'11 张',
					test:'京东券'
				},{
					its:'9000.00 元',
					test:'白条额度'
				},{
					its:'99399 个',
					test:'金豆'
				},{
					its:'95 张',
					test:'礼品卡'
				},{
					its:'100.00元',
					test:'我的资产'
				},]
			}
		}
	}
</script>

<style scoped="scoped">
	.user-coupon{
		box-sizing: border-box;
		width: 100%;
		height: 80px;
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
		color: #e93b3d;
		font-size: 14px;
	}
	
	.pay .pay-item span {
		font-size: 12px;
	}
</style>