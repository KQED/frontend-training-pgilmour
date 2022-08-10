// import path from 'path'
const path = require('path')
// import HtmlWebpackPlugin from 'html-webpack-plugin' 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import ESLintPlugin from 'eslint-webpack-plugin'
const ESLintPlugin = require('eslint-webpack-plugin')


module.exports={
  mode: 'development',
  entry: './react-app/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_react_bundle.js'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src'),
    },
    extensions: ['*','.js','.jsx','.json'] 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './react-app/src/index.html',
      publicPath: '/',
    }),
    new ESLintPlugin(
      {
      extensions:['js', 'jsx', 'json']
      }
    ),
  ],
  watch: true,
  watchOptions: {
    ignored: 'path.resolve(__dirname, node_modules)',
  }
}
