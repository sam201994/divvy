var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');
console.log("herehrerere");
const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
         presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;