<template>
	<div class='top-bar'>
		<div class='go-back'>
			<a href='#' @click.prevent='goBack'><i class='fa fa-angle-left'></i></a>
		</div>
		<div class='slot'>
			<slot></slot>
		</div>
		<div class='menu'>
			<a href='#' @click.prevent='menuShow=true'><i class='fa fa-ellipsis-h'></i></a>
			<ul class='menu-list' v-show='menuShow'>
				<li>
					<a href='#'> <i class='fa fa-home'></i>首页</a>
				</li>
				<li>
					<a href='#'> <i class='fa fa-search'></i>分类搜索</a>
				</li>
				<li>
					<a href='#'> <i class='fa fa-shopping-cart'></i>购物车</a>
				</li>
				<li>
					<a href='#'> <i class='fa fa-user'></i>我的京东</a>
				</li>
				<li>
					<a href='#'> <i class='fa fa-paw'></i>浏览记录</a>
				</li>
			</ul>
		</div>
		<div class='header-mask' v-show='menuShow' @click='menuShow=false;'></div>
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
	.top-bar {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		text-align: center;
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	
	.top-bar a {
		color: #252525;
	}
	
	.top-bar .slot {
		flex: 1;
	}
	
	.top-bar .go-back,
	.top-bar .menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.menu-list {
		position: absolute;
		z-index: 9999;
		width: 125px;
		top: 53px;
		right: 10px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		list-style: none;
		text-align: left;
		background: rgba(0, 0, 0, .9);
	}
	
	.menu-list a {
		color: #fff;
		text-decoration: none;
	}
	
	.menu-list li {
		height: 40px;
		line-height: 40px;
		margin-left: 40px;
		position: relative;
		border-bottom: 1px solid hsla(0, 0%, 100%, .2);
	}
	
	.menu-list i.fa {
		width: 40px;
		height: 40px;
		line-height: 40px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 15px;
		left: -40px;
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
</style>