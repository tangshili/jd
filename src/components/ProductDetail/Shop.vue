<template>
	<div class="shop">
		<div class="shop-top clear weui-flex">
			<div class="shop-top-left left" style="flex: 1;">
				<img src="../../assets/images/shop.png" />
			</div>
			<div class="shop-top-right left" style="flex: 3;">
				<p>芷芷堂美妆专营店</p>
				<span>400-610-1360转118072</span>
			</div>
		</div>
		<div class="shop-in weui-flex">
			<div class="shop-in-1" style=" flex: 1;">
				<p class="num">29574</p>
				<p class="desc">粉丝人数</p>
			</div>
			<div class="shop-in-2" style=" flex: 1; ">
				<p class="num">391</p>
				<p class="desc">全部商品</p>
			</div>
			<div class="shop-in-3" style=" flex: 1;">
				<p class="num"><span class="">9.62</span></p>
				<p class="desc">综合评分</p>
			</div>
			<div class="shop-in-4" style=" flex: 1;">
				<div class="evaluation_wrap">
					<div class="evaluation_list "><span class="evaluation_list_head">商品</span>9.54 | 高</div>
					<div class="evaluation_list "><span class="evaluation_list_head">服务</span>9.55 | 高</div>
					<div class="evaluation_list "><span class="evaluation_list_head">物流</span>9.59 | 高</div>
				</div>
			</div>
		</div>
		<div class="shop-under">
			<div class="shop_btns mod_btns weui-flex">
				<button class="mod_btn" id="shopFav" style="flex: 1;"><i class="fa fa-heart-o"></i>关注店铺</button>
				<button class="mod_btn" id="shopLinks" style="flex: 1;"><i class="fa fa-share-square"></i>进入店铺</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: " ";
		clear: both;
	}
	
	.shop {
		margin-top: 10px;
		width: 100%;
	}
	
	.shop .shop-top {
		height: 30px;
		width:100%;
	}
	
	.shop .shop-top-left {
		width: 90px;
		height: 30px;
		margin-left: 10px;
	}
	
	.shop .shop-top-left img {
		width: 100%;
		height: 100%;
		border: 1px solid #ddd;
		box-sizing: border-box;
	}
	
	.shop .shop-top-right {
		margin-left: 10px;
	}
	
	.shop .shop-top-right p {
		font-size: 14px;
		line-height: 14px;
		
	}
	
	.shop .shop-top-right span {
		font-size: 10px;
		line-height: 14px;
		color:#999;
	}
	
	.shop .shop-in {
		height: 40px;
		margin: 20px 0px;
	}
	
	.shop .shop-in .num {
		margin-bottom: 3px;
		font-size: 14px;
	}
	
	.shop .shop-in .desc {
		margin-top: 3px;
		font-size: 10px;
		color: #999;
		line-height: 14px;
	}
	
	.shop .shop-in .shop-in-1 {
		border-right: 1px solid #ddd;
		padding-top: 5px;
		text-align: center;
		height: 45px;
	}
	
	.shop .shop-in .shop-in-2 {
		border-right: 1px solid #ddd;
		padding-top: 5px;
		text-align: center;
		height: 45px;
	}
	
	.shop .shop-in .shop-in-3 {
		padding-top: 5px;
		position: relative;
		text-align: center;
		padding-left: 20px;
		box-sizing: border-box;
		height: 45px;
	}
	
	.shop .shop-in .shop-in-4 {
		margin-left: -15px;
		height: 45px;
	}
	
	.shop .shop-in .shop-in-4 .evaluation_wrap {}
	
	.shop .shop-in .shop-in-4 .evaluation_wrap .evaluation_list {
		font-size: 12px;
		color: #e4393c;
		line-height: 20px;
	}
	
	.shop .shop-in .shop-in-4 .evaluation_wrap .evaluation_list .evaluation_list_head {
		font-size: 12px;
		color: #999;
		padding-right: 3px;
	}
	
	.shop_btns .mod_btn {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		background-color: #fff;
		border: 1px solid #ccc;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		border-radius: 4px;
		margin: 5px 10px;
	}
	
	.shop_btns i.fa {
		margin-right: 5px;
	}
</style>