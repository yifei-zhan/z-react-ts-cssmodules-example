const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lessModuleRegex = /\.module\.less$/;

module.exports = {

  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      {
        test: /\.less$/,
        exclude: lessModuleRegex,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: lessModuleRegex,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};