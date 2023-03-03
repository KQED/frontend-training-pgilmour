const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const srcPath = (...filePath) => path.resolve('src', ...filePath)

module.exports={
  devtool: 'source-map',
  mode: 'development',
  entry: '/react-app/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_react_bundle.js'
  },
  stats: {
    loggingDebug: ['sass-loader'],
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
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[path]__[name]__[local]',
                localIdentContext: srcPath()
              }
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[path]__[name]__[local]',
                localIdentContext: srcPath()
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  srcPath('styles')
                ]
              }
            }
          }
        ]
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
    new MiniCssExtractPlugin(),
  ],
  watchOptions: {
    ignored: path.resolve(__dirname, 'node_modules'),
  }
}