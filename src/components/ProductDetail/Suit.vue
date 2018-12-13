<template>
	<div class="suit">

		<div class="go-back">

			<a href="#" @click.prevent="goBack">
				<p><span class="c">已选</span> 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）,1个</p>
			</a>
		</div>
		<!--<div class="slot">
						<slot></slot>
					</div>-->
		<div class="menu">
			<a class="shows" href="#" @click.prevent="menuShow=true"><i>···</i></a>
		</div>

		<div class="menu-list" v-show="menuShow">
			<div class="title" v-show="menuShow" @click="menuShow=false;">
				<img class="img-1 left" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t22714/54/125400072/782590/d338d566/5b260c8eN4b16c5fc.png!q80.dpg.webp" />
				<p class="prop left" id="popupSkuChoose">
					<a href="#">¥<em>1088</em>.00</a>
					<b class="c">已选</b> 五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）,1个</p>
				<img class="close  right" src="img/close.png" /></div>
			<p>套装</p>
			<div class="spans clear">
				<span>三件套（洁面乳+润养露+紧致乳）</span>
				<span>两件套（润养露+紧致乳）</span>
				<span>三件套（润养露+紧致乳+眼精华）</span>
				<span>四件套（洁面乳+润养露+紧致乳+精华乳）</span>
				<span>三件套（润养露+紧致乳+精华乳）</span>
				<span>五件套（洁面乳+润养露+紧致乳+精华乳+眼精华）</span><span>七件套</span>
			</div>
			<div class="num clear">
				<h5>数量</h5>
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
	var app = new Vue({
		el: '#app',
		data: {
			menuShow: false
		},
	});
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
	
	.suit .menu-list .num h5 {
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
	
	.menu-list {
		position: fixed;
		z-index: 9999;
		width: 100%;
		top: -10px;
		left: 0px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		text-align: left;
		background-color: white;
		/*background: rgba(0, 0, 0, .9);*/
	}
	
	.menu-list p {
		width: font-size:10px;
		margin-bottom: 8px;
		margin-left: 13px;
		color: #ccc;
		display: inline-block;
	}
	
	.menu-list p span {
		font-size: 14px;
	}
	
	.menu-list a {
		color: #333333;
		text-decoration: none;
		line-height: 18px;
		font-size: 12px;
		display: inline-block;
	}
	
	.menu-list span {
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
	
	.menu-list .spans span:active {
		background-color: #FF0000;
		color: white;
	}
	
	.header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
		/*background-color: rgba(0,0,255,0.3);*/
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
	
	.menu-list .title {
		background-color: #f3f2f8;
		height: 100px;
		width: 100%;
		margin-bottom: 10px;
	}
	
	.menu-list .title .img-1 {
		width: 90px;
		height: 90px;
		display: inline-block;
	}
	
	.menu-list .title .prop {
		width: 60%;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		font-size: 12px;
		color: #333;
		line-height: 1.4em;
		padding-right: 10px;
		padding-top: 14px;
	}
	
	.menu-list .title .prop b {
		font-size: 12px;
	}
	
	.menu-list .title .prop a {
		font-size: 12px;
		line-height: 40px;
		color: #e4393c;
		display: block;
		padding-top: 0px;
	}
	
	.menu-list .title .prop a em {
		font-size: 16px;
	}
	
	.menu-list .title .close {
		width: 20px;
		height: 20px;
		padding-top: 15px;
		float: right;
		padding-right: 13px;
	}
</style>