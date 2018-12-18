<template>
	<div class="suit">
		<div class="go-back">
			<a href="#" @click.prevent="goBack">
				<p><span class="c">已选</span> 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）,1个</p>
			</a>
		</div>
		<div class="menu">
			<a class="shows" href="#" @click.prevent="menuShow=true"><i>···</i></a>
		</div>

		<div class="menu-list" v-show="menuShow">
			<div class="suit-title" v-show="menuShow" @click="menuShow=false;">
				<img class="img-1 left" src="../../assets/images/suit-img.png" />
				<p class="prop left" id="popupSkuChoose">
					<a href="#">¥<em>1088</em>.00</a>
					<b class="c">已选</b> 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）,1个
				</p>
				<img class="close  right" src="../../assets/images/close.png" />
			</div>
			<h4>套装</h4>
			<div class="spans clear">
				<span>三件套（洁面乳+润养露+紧致乳）</span>
				<span>两件套（润养露+紧致乳）</span>
				<span>三件套（润养露+紧致乳+眼精华）</span>
				<span>四件套（洁面乳+润养露+紧致乳+精华乳）</span>
				<span>三件套（润养露+紧致乳+精华乳）</span>
				<span>五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）</span><span>七件套</span>
			</div>
			<div class="num clear">
				<h2>数量</h2>
				<div class="spanss">
					<span class="bg">-</span>
					<span>0</span>
					<span class="sm">+</span>
				</div>
			</div>
			<div><strong>加入购物车</strong><small>立即购买</small></div>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				menuShow: false
			};
		}
	}
</script>

<style>
	body {
		margin: 0px;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.suit {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		border-top:5px solid #E8E8ED;
		border-bottom:5px solid #E8E8ED;
	}
	
	.suit a {
		color: #252525;
		text-decoration: none;
	}
	
	.suit .slot {
		flex: 1;
	}
	
	.suit .go-back {
		width: 90%;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.suit .menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.suit .menu-list .tit {
		width: 100%;
	}
	
	.suit .menu-list strong {
		width: 50%;
		height: 50px;
		background-color: #ff9600;
		color: white;
		display: inline-block;
		text-align: center;
		line-height: 50px;
	}
	
	.suit .menu-list small {
		width: 50%;
		height: 50px;
		background-color: #e4393c;
		color: white;
		display: inline-block;
		text-align: center;
		line-height: 50px;
	}
	
	.suit .menu-list .num h2 {
		color: #ccc;
		font-size: 14px;
		display: inline-block;
		float: left;
		line-height: 30px;
		padding-left: 13px;
	}
	
	.suit .menu-list .num .spanss {
		float: right;
		margin-right: 20px;
	}
	
	.suit .menu-list .num .spanss span {
		font-size: 14px;
		background-color: #f7f7f7;
		display: inline-block;
		padding: 0px 10px;
		border-radius: 0px;
		margin-right: -9px;
	}
	
	.suit .menu-list .num .spanss .bg {
		font-size: 20px;
	}
	
	.suit .menu-list .num .spanss .sm {
		font-size: 20px;
	}
	
	.suit .menu-list {
		position: fixed;
		z-index: 9999;
		width: 100%;
		bottom: 0px;
		left: 0px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		text-align: left;
		background-color: #ffffff;
	}
	
	.suit .menu-list h4 {
		font-size: 12px;
		margin-bottom: 8px;
		margin-left: 13px;
		color: #ccc;
		display: inline-block;
	}
	
	.suit .menu-list p span {
		font-size: 14px;
	}
	
	.suit .menu-list a {
		color: #333333;
		text-decoration: none;
		line-height: 18px;
		font-size: 12px;
		display: inline-block;
	}
	
	.suit .menu-list span {
		display: inline-block;
		padding: 0 10px;
		min-width: 20px;
		max-width: 270px;
		overflow: hidden;
		height: 30px;
		line-height: 30px;
		float: left;
		text-align: center;
		margin-left: 10px;
		margin-bottom: 10px;
		border-radius: 4px;
		color: #333;
		background-color: #f7f7f7;
		font-size: 14px;
	}
	
	.suit .menu-list .spans span:hover {
		background-color: #FF0000;
		color: white;
	}
	
	.suit .header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
		background-color: rgba(0,0,0,0.5);
	}
	
	.suit .go-back p {
		font-size: 12px;
		display: inline-block;
		line-height: 44px;
	}
	
	.suit .go-back span {
		margin-right: 15px;
		font-size: 12px;
	}
	
	.clear:after {
		display: block;
		content: " ";
		clear: both;
	}
	
	.c {
		color: #ccc;
	}
	
	.suit .product {}
	
	.suit .product img {
		width: 90px;
		height: 90px;
		display: block;
	}
	
	.menu-list .suit-title {
		height: 80px;
		width: 100%;
		margin-bottom: 10px;
		position: relative;
	}
	
	.menu-list .suit-title .img-1 {
		width: 90px;
		height: 90px;
		position: absolute;
		top: -20px;
		left: 0px;
		display: inline-block;
	}
	
	.menu-list .suit-title .prop {
		width: 80%;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		font-size: 12px;
		color: #333;
		line-height: 1.4em;
		padding: 0px 10px 10px 100px;
	}
	
	.menu-list .suit-title .prop b {
		font-size: 12px;
	}
	
	.menu-list .suit-title .prop a {
		font-size: 12px;
		line-height: 40px;
		color: #e4393c;
		display: block;
		padding-top: 0px;
	}
	
	.menu-list .suit-title .prop a em {
		font-size: 16px;
	}
	
	.menu-list .suit-title .close {
		width: 20px;
		height: 20px;
		margin-top: 15px;
		float: right;
		margin-right: 13px;
	}
</style>