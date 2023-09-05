<template>
	<router-link to="/restorant" href="restaurant.html" class="card card-restaurant">
		<img src="../assets/img/pizza-plus/preview.jpg" alt="image" class="card-image" />
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title">Пицца плюс</h3>
				<span class="card-tag tag">50 мин</span>
			</div>
			<!-- /.card-heading -->
			<div class="card-info">
				<div class="rating">
					4.5
				</div>
				<div class="price">От 900 ₽</div>
				<div class="category">Пицца</div>
			</div>
			<!-- /.card-info -->
		</div>
		<!-- /.card-text -->
	</router-link>
	<!-- /.card -->
</template>

<script>
	export default {
		name: 'RestorantCard',
		components: {
			
		}
	}
</script>