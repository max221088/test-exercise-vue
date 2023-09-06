import { createStore } from 'vuex'

export default createStore({
  state: {
		db: {},
		footBand: {},
		gusiLebedi: {},
		palkiSkalki: {},
		partners: {},
		pizzaBurger: {},
		pizzaPlus: {},
		tanuki: {},
		isOpenCart: false,
  },
  getters: {
		getIsOpenCart (state) {
			return state.isOpenCart
		},
		getPartners (state) {
			return state.partners
		}
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
		fetchRestorantByID (context) {
			context.state.pizzaBurger = require('../db/pizza-burger')
		},
  },
  modules: {
  }
})
