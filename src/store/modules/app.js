import { Cookies } from '@/utils'
import { getInfo, getConfig } from '@/api/app'
import i18n from '@/i18n'

const state = {
    sidebarOpened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    config: null,
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
    },
    SET_CONFIG: (state, config) => {
        state.config = config
        i18n.setLocaleMessage('zh_CN', {
            "impTitle": config.impTitle,
            "appEntranceTitle": config.appEntranceTitle
        });
    }
}

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    getConfig({ commit, state }) {
        return new Promise((resolve, reject) => {
            getConfig().then((config) => {
                commit('SET_CONFIG', config)
                resolve(config)
            }).catch(error => {
                reject(error)
            })
        })
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