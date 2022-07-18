/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './react-app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'frontend_index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}