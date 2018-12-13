<template>
	<ul>
		<li v-for="(item,index) in nav" :class="{active:index==navIndex}" @click="tab(index)">
			<span v-text="item.title"></span>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: "商品"
				}, {
					title: "详情"
				}, {
					title: "评价"
				}, {
					title: "推荐"
				}],
				navIndex: 0,
			};
		},
		methods: {
			tab(index) {
				this.navIndex = index;
				
				this.$emit('change', index);
			}
		}
	}
</script>

<style>
	.top-bar .slot ul {
		height: 44px;
		background-color: #fff;
		border-bottom: solid 1px #ccc;
		margin: 0;
		padding: 0;
		list-style: none;
		line-height: 44px;
	}
	
	.top-bar .slot ul li {
		float: left;
		width: 25%;
		text-align: center;
	}
	
	.top-bar .slot ul li.active span {
		color: #FF0000;
		font-weight: bolder;
		padding-left: 13px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==);
		background-size: 8px;
		background-position: 3px center;
		background-repeat: no-repeat;
	}
</style>