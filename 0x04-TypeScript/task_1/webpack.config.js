const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",

  entry: "./js/main.ts",
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  // ✅ Correct devServer position
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000,
    open: true
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
