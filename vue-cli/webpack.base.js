const { join } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 将一个文件拷贝到另一个文件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const APP_PATH = join(__dirname, "src"); // 把路径赋予，方便使用
const BUILD_PATH = join(__dirname, "dist");

module.exports = {
  entry: {
    index: join(__dirname, "src/index.js"),
  },
  output: {
    path: BUILD_PATH,
    publicPath: "/", // 配置发布到线上资源的 URL 前缀
    crossOriginLoading: "anonymous", //配置异步时插入的标签的 crossorigin 值。
    filename: "[name].min.js",
    chunkFilename: "[name].min.js", // 配置无入口的 Chunk 在输出时的文件名称
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   include: /src/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         cache: true,
      //         formatter: require('eslint-friendly-formatter'),
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader",],
      },
      {
        test: /\.css$/, //处理css
        exclude: /node_modules/,
        use: [
          {
            loader:
              process.env.NODE_ENV === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ["url-loader"],
        include: [APP_PATH],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: ["url-loader"],
        include: [APP_PATH],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ["url-loader"],
        include: [APP_PATH],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ["*", ".js", ".vue"],
    alias: {
      "@": APP_PATH, // 为该路径配置别名。在项目中可以使用该别名代替该路径
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "yes RPG",
      filename: "index.html",
      template: "./index.html",
      favicon: "./icon.jpg",
      inject: "body", // 插入文件位置
      minify: {
        caseSensitive: true, // 是否大小写敏感  默认false
        collapseBooleanAttributes: true, // 是否简写boolean格式的属性 默认false
        collapseWhitespace: true, // 是否去除空格 默认false
        minifyCSS: true, // 是否压缩html里的CSS （clean-css） 默认false
        minifyJS: true, //是否压缩html里的js（使用uglify-js进行的压缩）
        preventAttributesEscaping: true, //防止属性值转义
        removeAttributeQuotes: true, //是否移除属性的引号 默认false
        removeComments: true, //是否移除注释 默认false
        removeCommentsFromCDATA: true, //从脚本和样式中删除注释 默认false
        removeEmptyAttributes: true, //是否删除空属性，默认false
        removeOptionalTags: false, //  删除可选标签

        removeRedundantAttributes: true, //删除多余的属性
        removeScriptTypeAttributes: true, //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
        removeStyleLinkTypeAttributes: true, //删除style的类型属性， type="text/css" 同上
        useShortDoctype: true, //使用短的文档类型，默认false
      },
      chunks: ["dll", "index"], // 多入口文件的使用。
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${APP_PATH}/assets/`,
          to: `${BUILD_PATH}/assets/`,
        },
      ],
    }),
  ],
};
