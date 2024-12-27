import { createStore } from 'vuex';

export default createStore({
    state: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
    },
    mutations: {
        setAuthenticated(state, value) {
            state.isAuthenticated = value;
            localStorage.setItem('isAuthenticated', value);
        }
    },
    actions: {

    },
    modules: {

    }
});
