const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const srcPath = (...filePath) => path.resolve('src', ...filePath)
// const Dotenv = require('dotenv-webpack')

module.exports = {
  target: 'node',
  externals: ['express'],
  entry: '../server/index.js',
  output : {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}