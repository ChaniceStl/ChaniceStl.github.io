
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./frontend/entry.jsx"],
  output: {
    path: __dirname + "/frontend/public",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [{
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx"],
    enforceExtension:false
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
