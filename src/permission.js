import { Message } from 'element-ui'
import router from './router'
import store from './store'
import XEUtils from 'xe-utils'

router.beforeEach(async(to, from, next) => {

    try {
        const hasMenus = store.getters.menus
        if (hasMenus) {
            next()
        } else {
            const { menus } = await store.dispatch('app/getInfo')
            router.addRoute({
                path: '/imp',
                name: 'imp',
                component: () =>
                    import ('./components/app-layout'),
                children: []
            })
            XEUtils.arrayEach(menus, (menu) => {
                if (menu.menuView) {
                    if (XEUtils.startsWith(menu.menuView, 'link://')) {
                        menu.path = menu.menuView
                    } else {
                        menu.path = "/" + menu.menuId
                    }
                    if (menu.menuId === 7) {
                        menu.activeMenu = "/3"
                    }
                    if (menu.menuId === 8) {
                        menu.activeMenu = "/4"
                    }
                    router.addRoute('imp', {
                        path: '/' + menu.menuId,
                        component: () =>
                            import ('.' + menu.menuView),
                        name: menu.menuId.toString(),
                        meta: menu
                    })
                }
            })
            next({...to, replace: true })
        }
    } catch (error) {
        Message.error(error || "router beforeEach error")
    }

})