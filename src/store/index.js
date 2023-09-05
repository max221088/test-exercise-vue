import { createStore } from 'vuex'

export default createStore({
  state: {
		db: {},
		isOpenCart: true,
  },
  getters: {
		getIsOpenCart (state) {
			return state.isOpenCart
		}
  },
  mutations: {
		isOpenCart (state) {
			state.isOpenCart = !state.isOpenCart
		}
  },
  actions: {
		
  },
  modules: {
  }
})
