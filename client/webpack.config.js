const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.resolve(__dirname, 'index.tsx')

module.exports = {
  entry: entryPath,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'client/public/index.html' })],
  // resolve: {
  //   modules: [__dirname, 'node_modules'],
  //   extensions: ['.ts', '.tsx', '.js']
  // },
  module: {
    rules: [{ test: /\.ts|\.tsx$/, use: 'ts-loader' }]
  }
}
