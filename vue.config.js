const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('custom-markdown-loader')
      .loader(require.resolve('./customMarkdownLoader.js'))
      .end();
  },
  devServer: {
    client: {
      overlay: false, // 禁用服务器错误遮罩层
    },
  }
})
