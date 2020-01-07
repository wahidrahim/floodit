import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  entry: 'client/index.tsx',
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

export default config
