import { createStore } from 'vuex'

export default createStore({
  state: {
		db: {},
		partners: {},
		isOpenCart: false,
		products: {}
  },
  getters: {
		getIsOpenCart (state) {
			return state.isOpenCart
		},
		getPartners (state) {
			return state.partners
		},
		getProducts (state) {
			return state.products
		},
  },
  mutations: {
		isOpenCart (state) {
			state.isOpenCart = !state.isOpenCart
		}
  },
  actions: {
		fetchDB (context) {
			context.state.db = require('../db/db.json').db
			console.log(context.state.db)
		},
		fetchPartners (context) {
			context.state.partners = require('../db/partners')
		},
		fetchProductsByRestourant (context, puth) {
			context.state.products = require(`../db/${puth}`)
		},
  },
  modules: {
  }
})
