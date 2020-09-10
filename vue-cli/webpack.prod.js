
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 删除webpack打包后的文件夹以及文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // 压缩js文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');  // 压缩css文件

const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].min.css?v=[hash:8]',
      chunkFilename: 'assets/css/[name].min.css?v=[chunkhash:8]',
    }),
  ],
  optimization: {  // 优化
    minimizer: [  // 覆盖默认压缩
      new UglifyJsPlugin({
        exclude: /\.min\.js$/,
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: false,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: true,
      }),
    ],
    splitChunks: { // 动态导入模块的分块策略
      chunks: 'all',
      cacheGroups: {
        dll: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router|babel-polyfill|mobx|mobx-react|mobx-react-dom|antd|@ant-design)/,
          minChunks: 1,
          priority: 2,
          name: 'dll',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: 1,
          name: 'vendors',
        },
      },
    },
  },
});
