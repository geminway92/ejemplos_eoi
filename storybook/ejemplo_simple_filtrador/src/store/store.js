import { createStore } from 'vuex';

const store = createStore({
  state(){
    return{
      filtered: '',
      counter: ''
    }
  },

  mutations:{
    SET_FILTERED(state, newFiltered){
      state.filtered = newFiltered;
      state.counter++;
    }

  },

  actions:{
    setFiltered({commit}, newFiltered){
      commit('SET_FILTERED', newFiltered);
    }
  }
})


export default store;
