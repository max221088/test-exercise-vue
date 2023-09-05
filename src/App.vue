<template>
  <div>
		<Header></Header>
		<router-view/>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from "./components/HeaderComponent.vue"
import Footer from "./components/FooterComponents.vue"

	export default {
		components: {
			Header,
			Footer,
		},
		props: {
			
		},
		created () {
			
		}

	}
</script>

<style lang="less">
@import './assets/css/index.css';
</style>
