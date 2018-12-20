import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
			login:false
  },
  mutations: {
			login:(state,flag)=>{
				state.login = flag;
			}
			
  },
  actions: {

  },
});
