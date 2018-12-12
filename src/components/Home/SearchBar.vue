<template>
	<!--搜索框-->
	<header :class="{fixed:isFixed}">
		<div class="category"><img src="../../assets/images/list.png" /></div>
		<div class="search">
			<span class="jd"><img src="../../assets/images/jd.01.png"  /></span>
			<i class="fa fa-search"></i>
			<input type="text" name="" id="" placeholder="请输入关键字……" />
		</div>
		<div class="login">
			<a href="#">登录</a>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				isFixed: false
			};
		},
		mounted() {

			window.addEventListener('scroll', () => {
				var scrollTop = document.documentElement.scrollTop ||
					window.pageYOffset ||
					document.body.scrollTop;
				if(scrollTop > 10) {
					this.isFixed = true;
				} else {
					this.isFixed = false;
				}
			});
		}
	}
</script>

<style scoped="">
	/*/头部/*/
	
	header {
		position: fixed;
		width: 100%;
		height: 50px;
		z-index: 9999;
		display: flex;
		display: -webkit-flex;
	}
	/*/左/*/
	
	header .category {
		width: 50px;
		height: 50px;
	}
	
	header .category img {
		width: 22px;
		height: 21px;
		position: absolute;
		top: 17px;
		left: 14px;
	}
	
	header.fixed {
		background-color: #e43130;
	}
	/*/中间/*/
	
	header .search {
		height: 50px;
		flex: 1;
		-webkit-flex: 1;
		padding-top: 10px;
		box-sizing: border-box;
		position: relative;
	}
	
	.search .jd img {
		height: 15px;
		height: 15px;
		position: absolute;
		left: 10px;
		top: 20px;
		border-right: 2px solid #ccc;
		padding-right: 10px;
	}
	
	header .fa-search {
		position: absolute;
		color: #afafaf;
		font-size: 12px;
		top: 20px;
		left: 48px;
	}
	
	header .search input {
		width: 100%;
		height: 30px;
		border-radius: 28px;
		border: none;
		outline: none;
		box-sizing: border-box;
		padding-left: 65px;
		font-size: 12px;
		color: #999;
	}
	/*/右/*/
	
	header .login {
		width: 50px;
		height: 50px;
		text-align: center;
	}
	
	header .login a {
		text-decoration: none;
		color: #fff;
		font-size: 14px;
		line-height: 50px;
	}
	
	.fixed {
		background-color: #e43130;
	}
</style>