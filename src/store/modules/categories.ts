const initialState = () => ({
  generations: [],
  generationUrl: "https://pokeapi.co/api/v2/generation"
});

const state = initialState();

const getters = {
}

const mutations = {
  updateGenerations(state: any, payload: any) {
    state.generations = payload
  }
}

const actions = {
  fetchGenerations({ commit, state}: any) {
    fetch(state.generationUrl, { method: "get"})
      .then(response => response.json())
      .then(response => {
        commit('updateGenerations', response.results)
      })
      .catch(error => console.log("error: ", error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}