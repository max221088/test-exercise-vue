<template>
  <main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<h2 class="section-title restaurant-title">Пицца Плюс</h2>
					<div class="card-info">
						<div class="rating">
							4.5
						</div>
						<div class="price">От 900 ₽</div>
						<div class="category">Пицца</div>
					</div>
					<!-- /.card-info --> 
				</div>
				<div class="cards cards-menu">
					<div class="card" v-for="product in products" :key="product.id">
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
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">{{ product.price }} ₽</strong>
							</div>
						</div>
						<!-- /.card-text -->
					</div>
					<!-- /.card -->
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
	
</template>

<script>
	export default {
		name: 'restorantViev',
		components: {
			
		},
		props: {
			puth: String
		},
		data () {
			return {
				
			}
		},
		computed: {
		products () {
			return this.$store.getters['getProducts'];
		}
	},
	created () {
		this.$store.dispatch('fetchProductsByRestourant', this.puth)
	}
	}
</script>
