const initialState = () => ({
  pokemons: [],
  singlePokemon: {},
  sorting: false,
  dataObject: {},
  apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
  selected: 'none'
});

const state = initialState();

const getters = {
}

const mutations = {
  clearPokemons(state: any) {
    state.pokemons = []
  },
  updateDataObject(state: any, payload: any) {
    state.dataObject = payload.dataObject
  },
  pushToPokemons(state: any, payload: any) {
    state.pokemons.push(payload.pokeData)
  },
  sortById(state: any) {
    state.pokemons.sort((a: any, b: any) => a.id - b.id)
  },
  changeStateApiUrl(state: any, payload: any) {
    if(payload !== null) {
      state.apiUrl = payload
    }
  },
  changeSelected(state: any, payload: any ) {
    console.log('SELECTED: ', payload)
    state.selected = payload
  },
  updatePokemon(state: any, payload: any) {
    console.log('UPDATEPOKEMON: ', payload)
    state.singlePokemon = payload.pokemon
    console.log('state.singlePokemon', state.singlePokemon)
  },
}

const actions = {
  fetchAllPokemon({ commit, dispatch, state }: any) {
    commit('clearPokemons')
    fetch(state.apiUrl, { method: "get"})
      .then(response => response.json())
      .then(response => {
        commit('updateDataObject', { dataObject: response })
        response.results.forEach((pokemon: any) => {
          dispatch({
            type: 'fetchPokemonData',
            payload: pokemon
          })
        })
      })
      .catch(error => console.log("error: ", error))
  },
  fetchPokemonData({commit }: any, { payload }: any) {
    const url = payload.url;
    fetch(url, { method: "get"})
      .then(response => response.json())
      .then((pokeData: any) => commit('pushToPokemons', { pokeData }))
      .then(() => commit('sortById'))
      .catch(error => console.log("error: ", error))
  },
  fetchPokemon({ commit }: any, payload: any) {
    console.log('PAYLOAD IN FETCH: ', payload)
    fetch(`https://pokeapi.co/api/v2/pokemon/${payload}`, { method: "get" })
      .then(response => response.json())
      .then(pokemon => commit('updatePokemon', { pokemon }))
      .catch(error => console.log("error: ", error))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}