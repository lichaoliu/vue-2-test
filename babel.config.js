// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = []

if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 发布项目用到的插件数组
  plugins: [
    ...prodPlugins
  ]
}