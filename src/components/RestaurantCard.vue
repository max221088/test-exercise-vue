<template>
	<div class="cards cards-restaurants">
		<router-link v-for="partner, index in partners" :key="index" to="/restorant" href="restaurant.html" class="card card-restaurant">
			<img :src="partner.image" alt="image" class="card-image" />
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title">{{ partner.name }}</h3>
					<span class="card-tag tag">{{ partner.time_of_delivery }}</span>
				</div>
				<!-- /.card-heading -->
				<div class="card-info">
					<div class="rating">
						{{ partner.stars }}
					</div>
					<div class="price">От {{ partner.price }} ₽</div>
					<div class="category">{{ partner.kitchen }}</div>
				</div>
				<!-- /.card-info -->
			</div>
			<!-- /.card-text -->
		</router-link>
	<!-- /.card -->
</div>
</template>

<script>
	export default {
		name: 'RestorantCard',
		props: {
			partners: Object
		},
		components: {
			
		}
	}
</script>