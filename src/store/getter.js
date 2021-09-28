const getters = {
    sidebarOpened: state => state.app.sidebarOpened,
    menus: state => state.app.menus,
    currentUser: state => state.app.currentUser,
    config: state => state.app.config
}
export default getters