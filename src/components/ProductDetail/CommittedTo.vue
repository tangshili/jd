<template>
	<div class="committted">
		<div class="correct">
			<a href="#">
				<span><img src="../../assets/images/correct-c-o.png"/>商家发货&amp;售后 </span>
				<span><img src="../../assets/images/correct-c-o.png"/>7天无理由退货</span>
				<span><img src="../../assets/images/correct-c-o.png"/>货到付款</span>
				<span><img src="../../assets/images/correct-c-o.png"/>闪电退款</span>
				<span><img src="../../assets/images/correct-c-o.png"/>极速审核</span>
				<span><img src="../../assets/images/correct-c-o.png"/>过敏无忧</span>
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
				<span>服务说明</span><img class="close" src="../../assets/images/close.png" />
			</div>
			<li>
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">商家发货&amp;售后 </a><br />
				<span>由芷芷堂美妆专营店从 湖南长沙市 发货, 并提供售后服务.</span>
			</li>
			<li>
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">7天无理由退货</a><br />
				<span>支持7天无理由退货</span>
			</li>
			<li>
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">货到付款 </a><br />
				<span>支持送货上门后再收款，支持现金、POS机刷卡等方式</span>
			</li>
			<li>
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">闪电退款</a><br />
				<span>闪电退款是为京东优质会员提供的快速退款服务</span>
			</li>
			<li>
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">极速审核</a><br />
				<span>极速审核指商家为用户提供的针对售后退换货流程的专项服务，开通后售后服务单会在24H内审核完毕；</span>
			</li>
			<li style="border-bottom: none;">
				<img src="../../assets/images/correct-c-o.png" />
				<a href="#">过敏无忧</a><br />
				<span>签收60天内，使用出现过敏问题，商家48小时内处理，提供售后保障。</span>
			</li>
			<h5>确定</h5>
			<!--<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>-->
		</ul>

		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				menuShow:false
			}
		}
	}
</script>

<style>
	body {
		margin: 0px;
	}
	.committted {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 60px;
		display: flex;
		border-bottom:5px solid #E8E8ED;
	}
	
	.committted a {
		color: #252525;
		text-decoration: none;
	}
	
	.committted .slot {
		flex: 1;
	}
	
	.committted .correct {
		width: 100%;
		padding-left: 10px;
		margin-top: 10px;
	}
	
	.committted .correct a {
		font-size: 12px;
	}
	
	.committted .correct span {
		padding-right: 20px;
		line-height: 22px;
		text-align: center;
	}
	
	.committted .correct span img {
		width: 12px;
		height: 12px;
		margin-right: 5px;
	}
	
	.committted .menu {
		width: 35px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.committted .menu a {
		line-height: 44px;
	}
	
	.committted .menu-list {
		position: fixed;
		z-index: 9999;
		width: 100%;
		bottom: 0px;
		left: 0px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		text-align: left;
		background-color: #fff;
		list-style: none;
	}
	
	.committted .menu-list h5 {
		width: 100%;
		font-size: 16px;
		text-align: center;
		line-height: 50px;
		background-color: #e4393c;
		height: 50px;
		padding-left: 13px;
		color: white;
	}
	
	.committted .menu-list p {
		font-size: 14px;
		margin-bottom: 2px;
		margin-left: 13px;
	}
	
	.committted .menu-list p span {
		font-size: 14px;
	}
	
	.committted .menu-list a {
		color: #333333;
		text-decoration: none;
		line-height: 24px;
		font-size: 12px;
		display: inline-block;
	}
	
	.committted .menu-list li {
		margin: 5px 20px 0px;
		padding: 10px;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		list-style: none;
	}
	.committted .menu-list li img {
		width: 12px;
		height: 12px;
		margin-left: -16px;
		margin-right:3px;
	}
	
	.committtedv .menu-list span {
		font-size: 12px;
		margin-top: 5px;
		color: #999;
		line-height: 24px;
	}
	
	/*.committted .menu-list .header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
	}*/
	
	.committted .go-back p {
		font-size: 12px;
		display: inline-block;
		line-height: 44px;
	}
	
	.c {
		color: #ccc;
	}
	
	.committted .menu-list .title {
		background-color: #f3f2f8;
		height: 40px;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	
	.committted .menu-list .title span {
		font-size: 14px;
		line-height: 33px;
		padding-left: 13px;
		float: left;
		display: block;
		color: #333;
	}
	
	.committted .menu-list .title .close {
		width: 20px;
		height: 20px;
		padding-top: 10px;
		float: right;
		padding-right: 13px;
	}
</style>