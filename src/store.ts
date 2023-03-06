import { createStore } from 'vuex'

const state = {
  selected: 0,
  userInfo: {
    avatarUrl: '',
    nickName: '',
    gender: 0
  },
  appId: ""
}

const mutations = {
  SET_SELECTED (state, payload) {
    state.selected = payload
  }
}

const actions = {
  setSelected (context, index) {
    context.commit('SET_SELECTED', index)
  }
}

const getters = {
  getSelected(state) {
    return state.selected
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
