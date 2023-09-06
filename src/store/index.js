import { createStore } from 'vuex'

export default createStore({
  state: {
		db: {},
		partners: {},
		isOpenCart: false,
		products: {},
		cart: []
  },
  getters: {
		getCartProducts(state) {
			return state.cart
		},
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
		incrementAmount (state, index) {
      let newValue = state.cart[index];
      newValue.amount++;
      state.cart.splice(index, 1, newValue)
      window.sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrementAmount(state, index) {
      if (state.cart[index].amount > 1) {
        let newValue = state.cart[index];
        newValue.amount--;
        state.cart.splice(index, 1, newValue)
      }
      window.sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
		getCartFromSession (state, cart) {
      state.cart = cart;
    },
		addProductToCard (state, prod) {
      let copy = 0;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === prod.id) {
          copy++
        }
      } 
      if (copy === 0) {
        state.cart.push(prod);
      }
      window.sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
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
			console.log(context.state.partners)
		},
		fetchProductsByRestourant (context, puth) {
			context.state.products = require(`../db/${puth}`)
			console.log(context.state.products)
		},
  },
  modules: {
  }
})
