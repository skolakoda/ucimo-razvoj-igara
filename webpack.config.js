module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: ["core", "node_modules"]
  }
}
