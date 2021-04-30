import Vue from 'vue'
// import Vuex from 'vuex'

const vState = {
  myObject: {},
}

const getters = {
  myObject(state) {
    return state.myObject
  }
}

const actions = {
  setMyObject(store, thing) {
    store.commit('SET_MY_OBJECT', thing)
    return store.getters.myObject
  }
}

const mutations = {
  SET_MY_OBJECT(state, thing) {
    Vue.set(state, 'myObject', {"thing": thing})
  }
}

export default {
  state: vState,
  getters,
  actions,
  mutations,
}