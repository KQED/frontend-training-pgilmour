const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')
// const sass = require('sass')

module.exports={
  mode: 'development',
  entry: './react-app/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_react_bundle.js',
    sourceMapFilename: '[name].js.map'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
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
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
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
    new SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
  ],
  watchOptions: {
    ignored: path.resolve(__dirname, 'node_modules'),
  }
}