'use strict'

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = 'Crhms Admin' // page title

module.exports = {
    publicPath: '/seng',
    devServer: {
        //自动打开浏览器
        open: true
    },

    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        //便于开发调度源码
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}