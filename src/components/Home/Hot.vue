<template>
	<div class="floor4">
		<div class="floor-4 weui-flex">
			<div class="top-4">
				<img src="../../assets/images/4-top.png" />
			</div>

			<div class="swiper-container weui-flex__item">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="#"><span class="red">热门</span>重磅“好消息”！92和95号油即将停售，油价变相上涨了</a>
					</div>
					<div class="swiper-slide">
						<a href="#"><span class="red">HOT</span>你们又买早了！小米8再次刷新845底线，价格令人心疼</a>
					</div>
					<div class="swiper-slide">
						<a href="#"><span class="red">推荐</span>搭载骁龙910小米MIX3，这次终于要红了</a>
					</div>
					<div class="swiper-slide">
						<a href="#"><span class="red">最新</span>王校长64W买了50台手机，XS MAX一台不买？</a>
					</div>
				</div>
			</div>
			<a href="#" class="line">更多</a>
		</div>
		<div class="floor4-banner">
			<ul class="weui-flex">
				<li class="banner4-1" style="flex:2;"><img src="../../assets/images/4-1.png" /></li>
				<li class="banner4-2" style="flex: 1;"><img src="../../assets/images/4-2.png" /></li>
				<li class="banner4-3" style="flex: 1;"><img src="../../assets/images/4-3.png" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.min.css"
	export default {
		mounted: function() {
			new Swiper('.floor-4 .swiper-container', {
				direction: 'vertical',
				slidesPerView: 1,
				autoplay: {
					delay: 2500,
					disableOnInteraction: true
				}
			});
		}
	}
</script>

<style>
	ul li {
		list-style: none;
	}
	
	.floor-4 {
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		
	}
	
	.floor-top4 {
		width: 80px;
		height: 30px;
	}
	/*.floor-4 a img {
		height: 30px;
		float: left;
		padding: 0 15px;
	}*/
	
	.floor-4 {
		overflow: hidden;
	}
	
	.floor-4 .top-4 {
		width: 80px;
		height: 30px;
	}
	
	.floor-4 .top-4 img {
		width: 80px;
		height: 21px;
		margin-top: 5px;
	}
	
	.floor-4 .swiper-wrapper {
		height: 30px;
		line-height: 30px;
		
	}
	
	.floor-4 .swiper-wrapper .swiper-slide {
		
	}
	
	.floor-4 .swiper-slide a {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-decoration: none;
		color: #333;
		padding: 0px 5px;
		box-sizing: border-box;
		font-size:14px;
		box-sizing: border-box;
	}
	
	.floor-4 .line {
		display: block;
		width: 50px;
		text-decoration: none;
		color: #333;
		font-size: 14px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		position: relative;
	}
	.floor-4 .line:after{
		display:block;
		content: "";
		clear:both;
		height: 20px;
		width: 1px;
		background-color: #ccc;
		position: absolute;
		top: 5px;
		left: 0px;
	}
	.floor4-banner {
		width: 100%;
		margin-left: 5px;
	}
	
	.floor4-banner ul li {
		padding-right: 10px;
		box-sizing: border-box;
	}
	
	.floor4-banner img {
		width: 100%;
	}
	
	.floor4-banner .banner4-3 img {
		width: 100%;
	}
</style>