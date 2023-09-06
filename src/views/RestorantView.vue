<template>
  <main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<div class="section-heading-info">
						<h2 class="section-title restaurant-title">{{ partners[index].name }}</h2>
						<div class="card-info">
							<div class="rating">
								{{ partners[index].stars }}
							</div>
							<div class="price">От {{ partners[index].price }} ₽</div>
							<div class="category">{{ partners[index].kitchen }}</div>
						</div>
					</div>
					<!-- /.card-info --> 
					<div class="filter-section">
							<select @change="sortByPrice()" v-model="sortParam" class="select">
								<option value="1">Сначала дорогие</option>
								<option value="2">Сначала дешевые</option>
							</select>
						</div>
				</div>
				<div class="cards cards-menu" v-if="products">
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
			index: String
		},
		data () {
			return {
				sortParam: '1'
			}
		},
		methods: {
			addToCart(product) {
        product.amount = "1";
        this.$store.commit('addProductToCard', product)
      },
			sortByPrice() {
				this.products.sort(function(a,b) {
					if (this.sortParam == '1') {
						return (b.price - a.price)
					} else {
						return (a.price - b.price)
					}
				}.bind(this))
			}
		},
		computed: {
			products () {
				return this.$store.getters['getProducts'];
			},
			partners () {
			return this.$store.getters['getPartners'];
			}
		},
		created () {
			let partnerPuth = this.partners[this.index].products
			this.$store.dispatch('fetchProductsByRestourant', partnerPuth)
		}
	}
</script>
