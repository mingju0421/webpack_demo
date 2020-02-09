// let path = require('path')
module.exports = {
    entry: './src/index.js',  // 入口文件
    output: {  // 输出配置
        filename: './index.js',  // 输出文件名
    },
    mode: 'development',  // 模式，默认两种模式，生产模式，开发模式 production development
    devServer: {
        publicPath: '/dist',
        contentBase: './src', // index.html 所在的目录
    }
}