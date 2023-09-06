<template>
		<div>
			<img :src="require(`../assets/${product.image}`)" alt="image" class="card-image" />
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title card-title-reg">{{ product.name }}</h3>
				</div>
				<!-- /.card-heading -->
				<div class="card-info">
					<div class="ingredients">{{ product.description }}
					</div>
				</div>
				<!-- /.card-info -->
				<div class="card-buttons">
					<button @click="addToCart(product)" class="button button-primary button-add-cart">
						<span class="button-card-text">В корзину</span>
						<span class="button-cart-svg"></span>
					</button>
					<strong class="card-price-bold">{{ product.price }} ₽</strong>
				</div>
			</div>
			<!-- /.card-text -->
		</div>
		<!-- /.card -->
</template>

<script>
	export default {
		name: 'ProductsCard',
		props: {
			product: Object
		},
		methods: {
			addToCart(product) {
        product.amount = "1";
        this.$store.commit('addProductToCard', product)
      },
		}
	}
</script>