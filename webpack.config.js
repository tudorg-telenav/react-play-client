var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_ROOT = 'client';

module.exports = {
  devtool: 'source-map', // for being able to debug things
  entry: './' + APP_ROOT + '/App.js',
  output: {
      path: __dirname,
      filename: 'bundle.js'
    },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'], // this is instead of using .babelrc
          plugins: ['transform-decorators-legacy'] // this is here for the @Radium decorator to work with Babel 6
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // read about thus plugin online
          template: './' + APP_ROOT + '/index.html'
    })
  ]
};