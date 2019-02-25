import Vue from "vue"
import Vuex from "vuex"

import { createPersistedState, createSharedMutations } from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState(), createSharedMutations()],
state: {
  config_money:{
    monto:'1000',
    separator: '.',
    precision: 0,
    currency:'$'
  }

},
getters: {
  getMoneyConfig(state) {
    return state.config_money
  }
},
mutations: {
  configMoney(state, payload){
    state.config_money.monto = payload.monto
  }

},


  strict: process.env.NODE_ENV !== "production"
})
