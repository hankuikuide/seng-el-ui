import { Cookies } from '@/utils'

const state = {
    sidebarOpened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebarOpened = !state.sidebarOpened
        if (state.sidebarOpened) {
            Cookies.set('sidebarStatus', 1)
        } else {
            Cookies.set('sidebarStatus', 0)
        }
    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}