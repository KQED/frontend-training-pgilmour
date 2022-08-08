const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={

    mode: "development", 

    entry: "./react-app/src/index.js", 
    output: {

        path: path.resolve(__dirname, "dist"),

        filename: "main_react_bundle.js"
    },
    resolve: {

        extensions: ['*','.js','.jsx','.json'] 
    },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", {"runtime": "automatic"}]
                ],
                plugins: ["@babel/plugin-transform-runtime"],
              },
            }
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./react-app/src/index.html",
          publicPath: "/",
        }), 
        ["@html-eslint"]
      ],
    overrides: [
        {
          files: ["*.html"],
          parser: "@html-eslint/parser",
          extends: ["plugin:@html-eslint/recommended"],
        },
      ]
}