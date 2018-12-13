<template>
	<div class="white-strip">
		<div class="go-back">
			<a href="#" @click.prevent="goBack">
				<p><span class="c">白条</span>白条支付即享3期免息,6期息费5折</p>
			</a>
		</div>
		<div class="slot">
			<slot></slot>
		</div>
		<div class="menu">
			<a class="shows" href="#" @click.prevent="menuShow=true"><i>···</i></a>
		</div>
		<ul class="menu-list" v-show="menuShow">
			<div class="title" v-show="menuShow" @click="menuShow=false;">
				<h6>打白条购买</h6><img class="close" src="img/close.png" /></div>
			<!--<li>-->
			<p>分期服务<span>(使用前的分期情况)</span></p>
			<!--</li>-->
			<li>
				<a href="#">不分期 </a><br />
				<span>先用后付，无服务费</span>
			</li>
			<li>
				<a href="#">3期 x 362.66元</a><br />
				<span>先用后付，无服务费</span>
			</li>
			<li>
				<a href="#">6期 x 187.88元 </a><br />
				<span>含服务费，每期6.53元，费率0.6%</span>
			</li>
			<li>
				<a href="#">12期 x 103.69元 </a><br />
				<span>含服务费，每期13.06元，费率1.2%</span>
			</li>
			<li>
				<a href="#"> 24期 x 58.47元</a><br />
				<span>含服务费，每期13.06元，费率1.2%</span>
			</li>
			<h5>知道了</h5>
		</ul>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>

</template>

<script>
	var app = new Vue({
		el: '#app',
		data: {
			menuShow: false
		},
		methods: {
			goBack: function() {
				window.history.go(-1);
			}
		}
	});
</script>

<style>
	body {
		margin: 0px;
	}
	
	.white-strip {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
	}
	
	.white-strip a {
		color: #252525;
		text-decoration: none;
	}
	
	.white-strip .slot {
		flex: 1;
	}
	
	.white-strip .go-back {
		width: 60%;
	}
	
	.white-strip .menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.menu-list {
		position: absolute;
		z-index: 9999;
		width: 100%;
		top: 53px;
		left: 0px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		text-align: left;
		/*background: rgba(0, 0, 0, .9);*/
	}
	
	.menu-list h6 {
		font-size: 14px;
		line-height: 40px;
		background-color: #f3f2f8;
		height: 40px;
		padding-left: 13px;
		margin-bottom: 10px;
	}
	
	.menu-list h5 {
		font-size: 16px;
		text-align: center;
		line-height: 50px;
		background-color: #e4393c;
		height: 50px;
		padding-left: 13px;
		color: white;
		margin-top: 10px;
	}
	
	.menu-list p {
		font-size: 14px;
		margin-bottom: 2px;
		margin-left: 13px;
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
	
	.menu-list li {
		padding-top: 8px;
		margin-left: 40px;
		list-style-type: disc;
	}
	
	.menu-list span {
		font-size: 12px;
		left: -40px;
		color: #cccccc;
		line-height: 18px;
		list-style-type: none;
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
	
	.white-strip .go-back p {
		font-size: 12px;
		display: inline-block;
		line-height: 44px;
	}
	
	.white-strip .go-back span {
		margin-right: 15px;
		font-size: 12px;
	}
	
	.c {
		color: #ccc;
	}
	
	#app .menu-list .title {
		background-color: #f3f2f8;
		height: 40px;
		width: 100%;
		margin-bottom: 10px;
	}
	
	#app .menu-list .title h6 {
		font-size: 14px;
		line-height: 40px;
		padding-left: 13px;
		float: left;
	}
	
	#app .menu-list .title .close {
		width: 20px;
		height: 20px;
		padding-top: 10px;
		float: right;
		padding-right: 13px;
	}
</style>