export const state = () => ({
  user: {}
})

export const getters = {
  userNameLength (state) {
    return (state.user.name || '').length
  }
}

export const mutations = {
  'SET_USER' (state, payload) {
    state.user = { ...payload }
  }
}

export const actions = {
  'GET_USER' ({ commit }, payload) {
    setTimeout(() => {
      commit('SET_USER', payload)
    }, 1000)
  }
}