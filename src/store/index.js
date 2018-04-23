import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/table'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
	    todos: [
	      { id: 1, text: '...', done: true },
	      { id: 2, text: '...', done: false }
	    ],
	    dateData:{
	    	monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
			months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), 
			weeks: '一_二_三_四_五_六_日'.split('_')
		},
		isLogin:false,
		detailIndex:{//详情页当前的位置
			nowFirstIndex:0,
			nowSconIndex:0
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
	    login : (state,isLogin) => {
	        state.isLogin = isLogin
	    },
	    setDetailIndex(state,detailIndex){
	    	 state.detailIndex = detailIndex
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