import { Cookies } from '@/utils'
import { getInfo } from '@/api/app'

const state = {
    sidebarOpened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    currentUser: null,
    menus: null
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebarOpened = !state.sidebarOpened
        if (state.sidebarOpened) {
            Cookies.set('sidebarStatus', 1)
        } else {
            Cookies.set('sidebarStatus', 0)
        }
    },
    SET_MENUS: (state, menus) => {
        state.menus = menus
    },
    SET_CURRENT_USER: (state, user) => {
        state.currentUser = user
    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    getInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getInfo().then((info) => {
                commit('SET_CURRENT_USER', info.currentUser)
                commit('SET_MENUS', info.menus)
                resolve(info)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}