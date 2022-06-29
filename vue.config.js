// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js')
      // 压缩打包
      // config.set('externals', {
      //   vue: 'Vue',
      //   'vue-router': 'VueRouter',
      //   axios: 'axios',
      //   lodash: '_',
      //   echarts: 'echarts',
      //   nprogress: 'NProgress',
      //   'vue-quill-editor': 'vueQuillEditor'
      // })
    })

    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')
    })
  }
}