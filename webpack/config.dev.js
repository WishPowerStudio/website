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
  postcss: function (webpack) {
    return [require('postcss-import')({
      addDependencyTo: webpack
    }), require('autoprefixer'), require('precss'), require('postcss-custom-media')];
  },
  devtool: '#eval-source-map'
});
