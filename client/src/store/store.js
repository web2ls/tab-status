import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
        strict: true,
        state: {
                token: null,
                user: null,
                isUserLoggedIn: null
        },
        mutations: {
                setToken(state, token) {
                        state.token = token;
                        if (token)
                                state.isUserLoggedIn = true;
                        else
                                state.isUserLoggedIn = false;
                },

                setUser(state, user) {
                        state.user = user;
                },

                logout(state) {
                        state.isUserLoggedIn = false;
                        state.user = null;
                        state.token = null;
                }
        },
        actions: {
                setToken({commit}, token) {
                        commit('setToken', token);
                },

                setUser({commit}, user) {
                        commit('setUser', user);
                },

                logout({commit}) {
                        commit('logout');
                }
        }
})