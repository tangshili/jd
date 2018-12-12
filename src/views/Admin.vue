<template>
	<div class="admin">
		<header>
			<router-view name="header"></router-view>
		</header>
		<div class="main">
			<aside>
				<router-view name="aside"></router-view>
			</aside>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	html,
	body,
	#app,
	.admin,
	.main {
		height: 100%;
	}
	
	.admin {
		width: 100%;
		height: 100%;
	}
	.admin .main {
		height: 100%;
		box-sizing: border-box;
	}
	.admin header {
		width:100%;
		height: 60px;
		background-color: deeppink;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #ccc;
	}
	
	.admin aside {
		width: 260px;
		height:100%;
		background-color: gold;
		position:fixed;
		top:60px;
		left:0px;
		box-sizing: border-box;
		border-right: 1px solid #ccc;
	}
	
	.admin .content {
		width: 100%;
		height:100%;
		padding-top:60px;
		padding-left: 260px;
		background-color: deepskyblue;
		box-sizing: border-box;
		overflow-x: auto;
		overflow-y: auto;
	}
</style>