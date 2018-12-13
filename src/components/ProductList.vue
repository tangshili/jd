<template>
	<div class="product-list clear">
		
		<div class='product' v-for="(item,index) in products">
			<a :href='item.id'>
				<div class='product-image'>
					<img :src='item.image'>
				</div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info'>
					<div class='product-price'>￥<span v-text='item.price'></span></div>
					<div class='product-similar'></div>
				</div>
				<div class='similar-info'></div>
			</a>
		</div>
		<div class="load"><img src="../assets/images/load2.gif" /></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {				
				products: [{
					title: '【两瓶45元 买二送二】男士香水 持久淡香清新古龙香水男 非费洛蒙香水50ml ',
					image: '/images/01.png',
					price: 3580,
					id: 1
				}, {
					title: ' 世纪古龙男士香水世纪古龙50ml持香久留香4色可选 黑色',
					image: '/images/02.png',
					price: 6850,
					id: 2
				}, {
					title: '艾诗轩 男士香水持久清新淡香男人味礼盒套装 蓝调海洋木质2*60ml古龙香水男情人节送朋友 ',
					image: '/images/03.png',
					price: 8800,
					id: 1
				}, {
					title: ' 海蒂尔（HediR） 海蒂尔优雅香水清新花香调女士香水持香久留香 优雅礼物 50ML',
					image: '/images/08.png',
					price: 198,
					id: 2
				}, {
					title: ' 闪帝U盘 海蒂尔优雅香水清新花香调女士香水持香久留香 优雅礼物 50ML',
					image: '/images/05.png',
					price: 458,
					id: 2
				}, {
					title: ' 金士顿U盘 海蒂尔优雅香水清新花香调女士香水持香久留香 优雅礼物 50ML',
					image: '/images/06.png',
					price: 358,
					id: 2
				}]
			
			};
		}
	}
</script>

<style>
	
	.product-list{
		background-color:#ccc;
		/*margin-top: 20px;*/
		margin-bottom:206px;
		
	}
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
	.product-list .load{
		width:100%;
		height:100px;
		text-align: center;
		background-color:white;
		
	}
	.product-list .load img{
		width:100px;
		height:100px;
	}
	
</style>