<template>
  <div>
		<Header @openAuthModal="isOpenAuthmodal()"></Header>
		<router-view/>
		<Footer></Footer>
		<modalAuth ref="modalAuth"></modalAuth>
		<modalCart></modalCart>
	</div>
</template>

<script>
import Header from "./components/HeaderComponent.vue"
import Footer from "./components/FooterComponents.vue"
import modalAuth from "./components/modal/modalAuth.vue"
import modalCart from "./components/modal/modalCart.vue"

	export default {
		components: {
			Header,
			Footer,
			modalAuth,
			modalCart
		},
		methods: {
			isOpenAuthmodal() {
				this.$refs.modalAuth.openModalAuth();
			}
		},
	}
</script>

<style lang="less">
@import './assets/css/index.css';
</style>
