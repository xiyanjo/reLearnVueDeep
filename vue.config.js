//主要是用于分析项目的大小占比的，不需要的话可以注释掉
// const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
// const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  //部署应用的子路径：根路径'/'或子路径'/my-app/',也可用相对路径(存在使用限制)cli3.3以上baseUrl弃用
  publicPath: "/learn-vue-deep/",
  // // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  //   outputDir: process.env.NODE_ENV == "production" ? "../dist" : "dist", // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  outputDir: "dist", // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  // // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录(默认'')
  assetsDir: "assets",
  // // 指定生成的 index.html 的输出路径 (相对于 outputDir)，也可以是一个绝对路径。
  indexPath: "index.html",
  // // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 检查代码(在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== "production",
  // // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  // // 生产环境是否生成 sourceMap 文件,如果你不需要生产环境的 source map,可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    //所有 webpack-dev-server 的选项都支持。
    //主要是用于交互接口的调试
    disableHostCheck: true,
    host: "10.136.221.94", //localhost
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    overlay: {
      //配置eslint报错的级别
      // warnings: true,
      // error: true
    },
    proxy: {
      // 配置多个代理(配置一个 proxy: 'http://localhost:4000' // 本地模拟数据服务器)
      "/dd": {
        target: "https://direct.cn", //431
        ws: true,
        changeOrigin: true,
      },
    },
  },
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      // hints:false,
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100,
      }),
      //   new WebpackBundleAnalyzerPlugin(),
    ],
  },
  css: {
    // 当为true时，css文件名可省略 module 默认为 false
    modules: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    // 默认生产环境下是 true，开发环境下是 false
    //是否使用css分离插件 ExtractTextPlugin 开启CSS分离之后每个组件的css会单独打包，造成页面上有大量请求，所以在正式环境中将CSS分离关闭
    extract: process.env.NODE_ENV == "production" ? true : false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // requireModuleExtension: false,// 启用 CSS modules for all css / pre-processor files.
    //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    //css预设器配置项
    loaderOptions: {
      css: {},
      less: {
        javascriptEnabled: true,
      },
    },
  },
  pluginOptions: {},

  // // Babel 显式转译列表，暂时没有用到
  // transpileDependencies: [],
  // // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  // crossorigin: '',
  // // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  // integrity: false,
  // // 构建多页面应用，页面的配置，一般用不到
  // pages: {
  //     index: {
  // // page 的入口
  //         entry: 'src/index/main.js',
  // // 模板来源
  //         template: 'public/index.html',
  // // 在 dist/index.html 的输出
  //         filename: 'index.html',
  // // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //         title: 'Index Page',
  // // 在这个页面中包含的块，默认情况下会包含
  // // 提取出来的通用 chunk 和 vendor chunk。
  //         chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  // // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`，并且如果找不到的话，就回退到 `public/index.html`。
  // // 输出文件名会被推导为 `subpage.html`。
  //     subpage: 'src/subpage/main.js'
  // },
  // // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  // chainWebpack: (config) => {
  //     // if (IS_PROD) {
  //     //主要是对打包的文件生成配置，可以将某些引用的第三方插件单独打包出来
  //     config.optimization.splitChunks({
  //         minSize: 30000, //依赖包超过300000bit将被单独打包
  //         minChunks: 1, // 模块的最小被引用次数
  //         // maxAsyncRequests: 5, // 按需加载的最大并行请求数
  //         // maxInitialRequests: 3, // 一个入口最大并行请求数
  //         // automaticNameDelimiter: '~', // 文件名的连接符
  //         name: true,
  //         cacheGroups: {
  //             common: {
  //                 name: 'chunk-common', // 打包后的文件名
  //                 chunks: 'initial', //可选值有：'all'（所有代码块），'async'（按需加载的代码块），'initial'（初始化代码块）
  //                 maxInitialRequests: 5,
  //                 priority: 1,//缓存组打包的先后优先级，数值大的优先
  //                 reuseExistingChunk: true//如果当前代码块包含的模块已经有了，就不在产生一个新的代码块
  //             },
  //             vendors: {
  //                 name: 'chunk-vendors',
  //                 test: /[\\/]node_modules[\\/]/,
  //                 chunks: 'initial',
  //                 priority: 2,
  //                 reuseExistingChunk: true,
  //                 enforce: true
  //             },
  //             antDesignVue: {
  //                 name: 'chunk-ant-design-vue',
  //                 test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
  //                 chunks: 'initial',
  //                 priority: 3,
  //                 reuseExistingChunk: true,
  //                 enforce: true
  //             },
  //             moment: {
  //                 name: 'moment',
  //                 test: /[\\/]node_modules[\\/]moment[\\/]/,
  //                 chunks: 'initial',
  //                 priority: 4,
  //                 reuseExistingChunk: true,
  //                 enforce: true
  //             },
  //             coreJs: {
  //                 name: 'chunk-core-js',
  //                 test: /[\\/]node_modules[\\/]core-js[\\/]/,
  //                 chunks: 'initial',
  //                 priority: 5,
  //                 reuseExistingChunk: true,
  //                 enforce: true
  //             }
  //             // styles: {
  //             //     name: 'styles',
  //             //     test: /\.(sa|sc|c)ss$/,
  //             //     chunks: 'all',
  //             //     enforce: true,
  //             // },
  //         }
  //     })
  //     // }
  // },
  // // css的处理

  // // 是否为 Babel 或 TypeScript 使用 thread-loader 一般用不到
  // parallel: require('os').cpus().length > 1,
  // // 向 PWA 插件传递选项 一般用不到
  // pwa: {},
  // // 可以用来传递任何第三方插件选项 一般用不到
};
