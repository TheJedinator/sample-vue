import Vue from 'vue'
import Vuex from 'vuex'
import mySpecificModule from './modules/mySpecificModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    mySpecificModule
  }
})
