import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './auth';
import incomes from './incomes'


// import example from './module-example'

Vue.use(Vuex)


export default new Vuex.Store( {
    strict: false,
      plugins: [createPersistedState()],
      modules: {
        auth,
        incomes
      }

});
