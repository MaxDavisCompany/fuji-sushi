var path = require('path');

module.exports = {
  entry: {
    App: "./assets/scripts/app.js",
    Vendor: "./assets/scripts/Vendor.js"
  },
  output: {
    path:"./temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node-modules/
        }
    ]
  }
}
