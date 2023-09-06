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
						<ProductCard :product="product"></ProductCard>
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
import ProductCard from '../components/ProductCard.vue'

	export default {
		name: 'restorantViev',
		components: {
			ProductCard
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
