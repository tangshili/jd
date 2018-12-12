<template>
	<div class="count-down">
		<div class="h-1">
			<h1 class="h-1">京东秒杀</h1></div>
		<div class="span-1"><span>14：00场</span></div>
		<div class="span-2">
			<span class="span" v-text="h<10?('0'+h):h"></span>
			<span>:</span>
			<span class="span" v-text="m<10?('0'+m):m"></span>
			<span>:</span>
			<span class="span" v-text="s<10?('0'+s):s"></span>
		</div>
		<div class="a-1">
			<a href="#">更多秒杀<img src="img/gengduo.png" /></a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				duration: 1000,
			};
		},
		created: function() {
			var self = this;
			setInterval(function() {
				self.duration--;
				if(self.duration < 1) {
					self.duration = 1000;
				}
			}, 1000);
		},
		computed: {
			h: function() {
				return Math.floor(this.duration / 3600);
			},
			m: function() {
				return Math.floor(this.duration / 60);
			},
			s: function() {
				return this.duration % 60;
			}
		}
	}
</script>

<style>
	.count-down {
		display: flex;
		display: -webkit-flex;
	}
	
	.count-down {
		margin: 5px;
	}
	
	.count-down h1 {
		font-size: 20px;
		color: #F02B2B;
		margin-right: 5px;
	}
	
	.count-down .a-1 {
		margin-top: 5px;
	}
	
	.count-down .a-1 a {
		text-decoration: none;
		color: #F23030;
		font-size: 12px;
		padding-top: 5px;
	}
	
	.count-down .a-1 a img {
		width: 12px;
		height: 12px;
		padding-left: 3px;
	}
	
	.count-down span {
		font-size: 12px;
		margin-right: 5px;
		margin-top: 5px;
		  
	}
	
	.count-down .span{
		  border: 1px solid #ccc;
    padding: 1px 2px;
	}
	
	
	
	.count-down .span-2 {
		padding-top: 5px;
	}
	
	.count-down .span-1 {
		padding-top: 5px;
	}
</style>