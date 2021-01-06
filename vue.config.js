const isProduction = process.env.NODE_ENV === "production" ? true : false; // 判断是否为生产环境
const PUBLIC_PATH = isProduction ? "./" : "/";

const version = new Date().getTime();

module.exports = {
  // lintOnSave: true,
  publicPath: PUBLIC_PATH,
  // ----------- 添加打包方式 ------------
  productionSourceMap: !isProduction, // 不生成map
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 192, // 换算的基数(设计图750的根字体为75)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
      // 添加版本号
      config.output.filename = `js/[name].[chunkhash].${version}.js`;
      config.output.chunkFilename = `js/[id].[chunkhash].${version}.js`;
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "智慧纪检数据中心";
      return args;
    });
  },
  // -------------- 打包方式 end -----------
  devServer: {
    port: 8080,
    proxy: {
      "/sjzx": {
        target: "http://192.168.21.103:8088",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/sjzx": "/sjzx"
        }
      }
    }
  }
};
