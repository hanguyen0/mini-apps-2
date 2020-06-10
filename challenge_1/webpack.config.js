const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      }
    }
  ]
};