const webpack = require("webpack");
const { merge } = require("webpack-merge");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'); // 友好的错误提示
const portFinder = require('portfinder'); // 当端口被占用时，会让端口数+1，保证正常运行

const webpackNaseConfig=require('./webpack.base');
const webpackDevConfig =merge(webpackNaseConfig,{
    mode:'development',
    devtool:'#cheap-module-eval-source-map', // 改变调试过程和速度
    context:__dirname, // 上下文 用于从配置中解析入口起点(entry point)和 loade
    devServer:{
        compress:true, // 是否启用gzip压缩，压缩文件
        historyApiFallback:true, // 当找不到页面时返回到首页
        host:'localhost',
        hot:true,
        open:true,
        quiet:true, // 将编译时候的信息只在第一次输出
        overlay:{ // 浏览器中显示错误
            warnings:true,
            errors:true,
        },
    },
    watchOptions:{ // 监听
        ignored:[ // 不被监听项
            /node_modules/,
        ],
    },
    plugins:[
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});

module.exports=portFinder.getPortPromise({
    port:8080,
}).then((port)=>merge(webpackDevConfig,{
    devServer:{
        port,
    },
}))
