const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports={
  mode: 'development',
  entry: './react-app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_react_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-react-inline-elements'
            ],
          },
        }
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './react-app/index.html',
      publicPath: '/',
    }),
    new ESLintPlugin({
      extensions:['js', 'jsx', 'json']
    }),
  ],
  watchOptions: {
    ignored: path.resolve(__dirname, 'node_modules'),
  }
}