const path = require('path')

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js', // Check this name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
      },
    ],
  },
}

module.exports = [serverConfig]
