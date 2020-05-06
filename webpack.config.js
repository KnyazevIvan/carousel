const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}