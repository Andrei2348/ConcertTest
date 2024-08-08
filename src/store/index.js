import { createStore } from 'vuex';
import axiosClient from '../axiosClient';

const store = createStore({
    state: {
        startSearching: false,
        searchParam: '',
        searchResults: [],
        isLoading: false,
        totalResults: 0,
        selectedPage: 1,
        totalPages: 0
    },
    mutations: {
        setSearchParam(state, payload) {
            state.searchParam = payload;
            state.startSearching = (state.searchParam.length > 0);
        },
        setSearchResults(state, payload) {
            state.searchResults = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setTotalResults(state, payload) {
            state.totalResults = payload;
        },
        setTotalPages(state, payload) {
            state.totalPages = Math.ceil(payload/10);
        },
        setCurrentPage(state, payload) {
            state.selectedPage = payload;
        },
    },
    getters: {},
      
    actions: {
        setSearchParamToStore({ commit, dispatch }, value) {
            commit('setSearchParam', value);
            if(value.length > 0){
                dispatch('asyncGetData', value)
            }
        },

        setCurrentPage({commit, dispatch, state}, value){
            commit('setCurrentPage', value)
            dispatch('asyncGetData', state.searchParam)
        },

        async asyncGetData({ commit, state }, value){
            try {
                commit('setIsLoading', true)
                const response = await axiosClient.get(`${value}&page=${state.selectedPage}`);
                commit('setSearchResults', response.data.Search)
                commit('setTotalResults', response.data.totalResults)
                commit('setTotalPages', response.data.totalResults)
            } catch (error) {
                console.log(error);
                commit('setSearchResults', [])
                commit('setTotalResults', 0)
                commit('setTotalPages', 0)
                commit('setIsLoading', false)
            } finally {
                commit('setIsLoading', false)
            }
        }
    }
});
      
        //   Получение данных о корзине пользователя из бд
        // async asyncGetCartInfo({ commit, dispatch }) {
        //   try {
        //     commit('setIsLoading', true);
        //     const userData = setUserInfo();
        //     const response = await axiosClient.get(`cart?user_id=${userData.userId}`, { headers: { Authorization: userData.token } });
        //     const productsList = response.data[0].products;
        //     if (productsList.length > 0) {
        //       dispatch('getSum', productsList);
        //     } else {
        //       commit('setSumCount', 0);
        //       commit('setSumPrice', 0);
        //       commit('setCartIsEmpty', true);
        //     }
        //     commit('setCartContainer', productsList);
        //   } catch (error) {
        //     console.log(error);
        //     commit('setCartIsEmpty', true);
        //     commit('setCartContainer', []);
        //   } finally {
        //     commit('setIsLoading', false);
        //   }
        // },
      
        
      
    
    

export default store;