var webpack = require('webpack');
var baseConfig = require('./config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  module: {
    loaders: baseConfig.module.loaders.concat([{
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }])
  },
  devtool: '#eval-source-map'
});
