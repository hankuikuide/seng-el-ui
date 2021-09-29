let menuData = [{
        "Id": "D3D9446802A44259755D38E6D163E820",
        "menuId": 1,
        "parentId": 0,
        "text": "系统功能",
        "menuView": null,
        "icon": "el-icon-s-home",
        "affix": true
    },
    {
        "Id": "D3D9446802A44259755D38E6D163E820",
        "menuId": 2,
        "parentId": 1,
        "text": "链接测试111",
        "menuView": "/components/imp/LinkTest",
        "icon": "el-icon-s-home"
    },
    {
        "Id": "D3D9446802A44259755D38E6D163E820",
        "menuId": 222,
        "parentId": 1,
        "text": "链接测试222",
        "menuView": "/components/imp/LinkTest2",
        "icon": "el-icon-s-home"
    },
    {
        "Id": "D3D9446802A44259755D38E6D163E820",
        "menuId": 3,
        "parentId": 1,
        "text": "首页",
        "menuView": "/components/imp/HelloWorld",
        "icon": "el-icon-s-home",
        "affix": true
    },
    {
        "Id": "CE840AA9583592E71F3DB26EE6E41703",
        "menuId": 4,
        "parentId": 1,
        "text": "分组管理",
        "menuView": "/components/imp/HelloWorld2",
        "icon": null
    },
    {
        "Id": "CE840AA9583592E71F3DB26EE6E41753",
        "menuId": 5,
        "parentId": 1,
        "text": "图表",
        "menuView": "/components/imp/ECharts",
        "icon": null
    },
    {
        "Id": "F899139DF5E1059396431415E770C6DD",
        "menuId": 6,
        "parentId": 1,
        "text": "外部链接",
        "menuView": "link:///imp",
        "icon": null
    },
    {
        "Id": "CE840AA9583592E71F3DB26EE6E41753",
        "menuId": 7,
        "parentId": 2,
        "text": "图表1",
        "menuView": "/components/imp/ECharts",
        "icon": null,
        noCache: true,
        keepAlive: false,
        activeMenu: '/3'
    },
    {
        "Id": "CE840AA9583592E71F3DB26EE6E41753",
        "menuId": 8,
        "parentId": 3,
        "text": "图表2",
        "menuView": "/components/imp/ECharts",
        "icon": null,
        noCache: true,
        keepAlive: false,
        activeMenu: '/4'
    }
]

let currentUser = {
    id: "1",
    userCode: "admin",
    userNickName: "系统管理员",
    userType: "1",
    loginDate: '20210715'
}


export function getInfo() {
    return new Promise((resolve) => {
        // throw '401:登录失败'
        resolve({
            menus: menuData,
            currentUser: currentUser
        })
    })
}