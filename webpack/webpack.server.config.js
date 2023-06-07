const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const ESLintPlugin = require('eslint-webpack-plugin')
const srcPath = (...filePath) => path.resolve('src', ...filePath)

module.exports = {
  mode: 'development',
  entry: './servers/server.ssr.mjs',
  target: 'node', // This with the following line omit node_modules
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  },
  output : {
    path: path.resolve(__dirname, '../dist/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // import: true,
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
              // import: true,
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
                  path.resolve(__dirname, 'src/styles')
                  // srcPath('styles')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './react-app/index.html',
      // publicPath: '/',
      favicon: './react-app/src/icons8-ufo-emoji-32.png'
    }),
    new ESLintPlugin({
      extensions:['js', 'jsx', 'json', 'mjs']
    }),
  ]
}