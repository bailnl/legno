module.exports = {
  configureWebpack: {
    entry: {
      app: './examples/main.js',
    },
    alias: {
      legon: './src'
    },
  },
  baseUrl: '/',
  lintOnSave: false,
}