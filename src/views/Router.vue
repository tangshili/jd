<template>
	<div>
		<button @click="$router.push('/')">首页</button>
		<button @click="$router.push({path:'/category'})">分类</button>
		<button @click="$router.push({name:'search',params:{userId:123},query:{plan:'private'}})">搜索</button>
		<button @click="$router.push({ path: '/search', params: { userId: 123 }, query: { plan: 'private' }})">购物车</button>
		<button>个人中心</button>
	</div>
</template>

<script>
</script>

<style>
	button{
		margin:10px;
		font-size:16px;
	}
</style>