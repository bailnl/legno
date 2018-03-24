const path = require("path")
module.exports = {
  configureWebpack: {
    entry: {
      app: "./examples/main.js",
    },
    resolve: {
      alias: {
        legno: path.resolve(__dirname, "./src/index.js"),
      },
    },
  },
  lintOnSave: false,
}
