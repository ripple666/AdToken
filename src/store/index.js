import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/table'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		islogin:false,
	    todos: [
	      { id: 1, text: '...', done: true },
	      { id: 2, text: '...', done: false }
	    ],
	    tableData:{
	    	
	    }
	},
	getters: {  //和compute类似
	    doneTodos: (state, getters) => {
	      return state.todos.filter(todo => todo.done)
	    }
    },
    mutations: {  //store.commit({ type: 'increment', amount: 10 })
	    increment (state) {
		    // 变更状态
		    state.count++
	    },
	    login : (state,loginStaus) => {
	        state.islogin = loginStaus
	    }
	},
	actions: { //store.dispatch({ type: 'incrementAsync', amount: 10 })
	    increment (context) {
	      context.commit('increment')
	    },
	    incrementAsync ({ commit }) {
		    setTimeout(() => {
		      commit('increment')
		    }, 1000)
		},
		login({ commit }){
		     commit('login')
		}
	},
    modules: {
        table
    },
    strict: debug
})