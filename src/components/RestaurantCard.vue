<template>
		<router-link  :to="`/restorant/${index}`"
			class="card card-restaurant">
			<img :src="require(`../assets/${partner.image}`)" alt="image" class="card-image" />
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
</template>

<script>
	export default {
		name: 'RestorantCard',
		props: {
			partner: Object,
			index: Number
		},
	}
</script>