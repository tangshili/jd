<template>
	<div class="below weui-flex">
		<div class="contact" style="flex: 1;">
			<a href="#"><i class="fa fa-phone"></i>联系客服</a>
		</div>
		<div class="enter" style="flex: 1;">
			<a href="#"><i class="fa fa-home"></i>进店</a>
		</div>
		<div class="cart" style="flex: 1;">
			<a href="#"><i class="fa fa-shopping-cart"></i>购物车</a>
		</div>
		<div class="join" style="flex: 2;">加入购物车</div>
		<div class="buy" style="flex: 2;">立即购买</div>
	</div>
</template>

<script>
</script>

<style>
	/** {
		margin: 0px;
		height: 0px;
	}*/
	
	.below {
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		border-top:1px solid #ccc;
		background-color:white;
	}
	
	.below>div {
		height: 50px;
		text-align: center;
	}
	
	.below i.fa {
		display: block;
		font-size: 24px;
		padding: 5px 0px;
		height: 12px;
	}
	
	.below a {
		color: #333333;
		font-size: 10px;
		line-height: 20px;
	}
	
	.below .join {
		background-color: #ff9600;
		line-height: 50px;
		font-size: 14px;
		color: white;
	}
	
	.below .buy {
		background-color: #e4393c;
		line-height: 50px;
		font-size: 14px;
		color: white;
	}
</style>