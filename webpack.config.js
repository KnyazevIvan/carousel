const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
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
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}