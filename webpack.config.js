const path = require('path')

module.exports = {
  entry: {
    fizika: './10-fizika/main',
    trigonometrija: './20-trigonometrija/main'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['core', 'node_modules']
  }
}
