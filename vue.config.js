module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer:{
    https: false, // https
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api':{ // 替换代理地址名称
        target:'http://apifgb.fenggubao.com/', // 代理地址
        changeOrigin:true, // 可否跨域
        pathRewrite:{
          '^/api':'' // 重写接口
        }
      }
    }
  }
}
