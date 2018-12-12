<template>
	<div class="comtainer">
		<button class="btn btn-primary">btn-primary</button>
		<div class="row">
			<table class="table table-bordered table-hover">
				<tbody>
					<tr>
						<th>Header</th>
						<th>Header</th>
						<th>Header</th>
						<th>Header</th>
						<th>Header</th>
						<th>Header</th>
					</tr>
					<tr>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
					</tr>
					<tr>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
					</tr>
					<tr>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
						<td>Data</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row">
			<tabs>
				<tab>Tab content A.</tab><br />
				<tab>Tab content B.</tab>
			</tabs>
		</div>
		<btn>Default</btn>
		<btn type="primary">Primary</btn>
		<btn type="success">Success</btn>
		<btn type="info">Info</btn>
		<btn type="warning">Warning</btn>
		<btn type="danger">Danger</btn>
		<btn type="link">Link</btn>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				open:false
			}
		}
	}
</script>

<style>
	.comtainer {
		margin: 10px;
	}
	
	.comtainer .row {
		margin: 10px;
	}
</style>