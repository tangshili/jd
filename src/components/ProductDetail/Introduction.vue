<template>
	<div class="introduction">
		<div id="top"></div>
		<div class="introduction-title weui-flex">
			<div class="introduction-text" style="flex: 1; border-right:1px solid #E3E3E3;">
				<span class="introduction-span">商品介绍</span>
			</div>
			<div class="introduction-text" style="flex: 1; border-right:1px solid #E3E3E3;">
				<span class="introduction-span">规格参数</span>
			</div>
			<div class="introduction-text" style="flex: 1;">
				<span class="introduction-span">售后保障</span>
			</div>
		</div>
		<div class="introduction-img">
			<img src="../../assets/images/introduction-1.png" />
			<img src="../../assets/images/introduction-2.png" />
			<img src="../../assets/images/introduction-3.png" />
			<img src="../../assets/images/introduction-4.png" />
			<img src="../../assets/images/introduction-5.png" />
			<img src="../../assets/images/introduction-6.png" />
			<img src="../../assets/images/introduction-7.png" />
			<img src="../../assets/images/introduction-8.png" />
			<img src="../../assets/images/introduction-9.png" />
			<img src="../../assets/images/introduction-10.png" />
			<img src="../../assets/images/introduction-11.png" />
			<img src="../../assets/images/introduction-12.png" />
			<img src="../../assets/images/introduction-13.png" />
			<img src="../../assets/images/introduction-14.png" />
			<img src="../../assets/images/introduction-15.png" />
			<img src="../../assets/images/introduction-16.png" />
			<img src="../../assets/images/introduction-17.png" />
			<img src="../../assets/images/introduction-18.png" />
			<img src="../../assets/images/introduction-19.png" />
			<img src="../../assets/images/introduction-20.png" />
			<img src="../../assets/images/introduction-21.png" />
		</div>
		<div class="pc">查看电脑版商品详情</div>
		<div class="jd-logo">
			<div class="logo-text">（ 查看电脑版商品详情，可能会消耗较多流量 ）</div>
			<img src="../../assets/images/logo.png" />
		</div>
		<div class="to-top">
			<a href="#top">返回<br/>顶部</a>
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
	
	.introduction {
		width: 100%;
	}
	
	.introduction-title {
		width: 100%;
	}
	
	.introduction-text {
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #ffffff;
	}
	
	.introduction-span {
		font-size: 14px;
	}
	
	.introduction-text .introduction-span:hover {
		color: #d91100;
	}
	
	.introduction-img img {
		max-width: 100%;
		max-height: 100%;
	}
	
	.pc {
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
		background-color: #F5F5F5;
		border: 1px solid #E2E2E2;
	}
	
	.jd-logo {
		width: 100%;
		height: 100px;
		text-align: center;
	}
	
	.jd-logo .logo-text {
		font-size: 10px;
	}
	
	.jd-logo img {
		width: 100px;
		margin-top: 50px;
	}
	
	.to-top {
		position: fixed;
		bottom: 0px;
		right: 0px;
		padding: 3px 6px;
		background-color: #2C0009;
		font-size: 10px;
		line-height: 14px;
	}
	
	.to-top a {
		color: white;
	}
</style>