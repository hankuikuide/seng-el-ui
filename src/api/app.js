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
    "menuView": "/views/dashboard/index",
    "icon": "el-icon-s-home",
    "affix": true
},
{
    "Id": "CE840AA9583592E71F3DB26EE6E41703",
    "menuId": 4,
    "parentId": 1,
    "text": "分组管理",
    "menuView": "/views/group/index",
    "icon": null
},
{
    "Id": "CE840AA9583592E71F3DB26EE6E41753",
    "menuId": 5,
    "parentId": 1,
    "text": "图表",
    "menuView": "/views/chart/index",
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

let config = {
    //应用编码
    appKey: "0",
    //程序版本号
    version: "9.0.2731.3017",
    //地区编码
    areaCode: "Default",
    //集成页面标题
    appEntranceTitle: '医保服务云平台_动态修改值',
    //程序title
    impTitle: "\u96C6\u6210\u7BA1\u7406\u7CFB\u7EDF_动态修改值",
    //版权信息
    copyrightInfo: "\u7248\u6743\u6240\u6709:\u56FD\u65B0\u5065\u5EB7\u4FDD\u969C\u670D\u52A1\u6709\u9650\u516C\u53F8",
    //首页默认打开的菜单
    defaultMenu: "3",
    //默认分页条数
    defaultPageRowCount: 10,
    //post 超时时间 单位ms
    ajaxTimeOut: 90000000,
    //url前缀 （针对虚拟目录或应用程序部署方式）
    urlStartWith: "/imp",
    //前端公用静态文件服务器
    cisCdnServer: "/sso_static",
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

export function getConfig() {
    return new Promise((resolve) => {
        resolve(config)
    })
}