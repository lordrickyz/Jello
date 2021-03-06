const path = require('path');

module.exports = {
  mode: 'production',
  entry: './frontend/jello.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      { test: /\.(png|svg|jpg|gif)$/,
        use: {
        loader: "file-loader",
        options: {
          name: "[name][md5:hash].[ext]",
          outputPath: "webpack-assets/",
          publicPath: "/assets/webpack-assets/",
          },
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      assets: path.resolve(__dirname, "app", "assets"),
      images: path.resolve(__dirname, "app", "assets", "images"),
    },
  }
};