var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./config.base');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  output: {
    path: 'docs',
    filename: 'build.js'
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {
        from: './assets',
        to: 'assets',
      },
      {
        from: './favicon.png',
        to: 'favicon.png',
      },
      {
        from: './favicon.ico',
        to: 'favicon.ico',
      }
    ])
  ],
  module: {
    loaders: baseConfig.module.loaders.concat([{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css!postcss')
    }])
  }
});
