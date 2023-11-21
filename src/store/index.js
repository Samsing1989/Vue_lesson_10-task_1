import { createStore } from 'vuex'
import boysList from '@/data/boysList.json'
import girlsList from '@/data/girlsList.json'

export default createStore({
    state: {
        boysList: null,
        girlsList: null,
        selectedCouples: [],
        selectedCouple: {
            boy: null,
            girl: null,
        },
    },
    getters: {
        getBoysList: ({ boysList }) => boysList,
        getGirlsList: ({ girlsList }) => girlsList,
        getSelectedCouples(state) {
            return state.selectedCouples
        },
        getSelectedBoys: (state) => (id) => {
            return state.selectedCouple.boy === id
        },
        getSelectedGirls: (state) => (id) => {
            return state.selectedCouple.girl === id
        },
        isLackOfDancer(state) {
            return !state.boysList.length || !state.girlsList.length
        },
    },
    mutations: {
        setBoysList(state, boysList) {
            state.boysList = boysList
        },
        setGirlsList(state, girlsList) {
            state.girlsList = girlsList
        },
        selectedBoy(state, id) {
            state.selectedCouple.boy === id ? (state.selectedCouple.boy = null) : (state.selectedCouple.boy = id)
        },
        selectedGirl(state, id) {
            state.selectedCouple.girl === id ? (state.selectedCouple.girl = null) : (state.selectedCouple.girl = id)
        },

        addCouple(state) {
            state.selectedCouples.push({
                id: Date.now(),
                boy: state.boysList.find((boy) => boy.id === state.selectedCouple.boy),
                girl: state.girlsList.find((girl) => girl.id === state.selectedCouple.girl),
            })
            state.boysList = state.boysList.filter((boy) => boy.id !== state.selectedCouple.boy)
            state.girlsList = state.girlsList.filter((girl) => girl.id !== state.selectedCouple.girl)
        },
    },
    actions: {
        loadBoysList({ commit }) {
            commit('setBoysList', boysList)
        },
        loadGirlsList({ commit }) {
            commit('setGirlsList', girlsList)
        },

        selectedBoy({ commit }, id) {
            commit('selectedBoy', id)
        },
        selectedGirl({ commit }, id) {
            commit('selectedGirl', id)
        },
        addCouple({ commit }) {
            commit('addCouple')
        },
    },
    modules: {},
})
