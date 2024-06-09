const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/<battleship>/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
        favicon: './src/assets/icons/battleship.png'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/icons", to: "icons" },
        { from: "./src/assets/fonts", to: "fonts" },
      ],
    }),
  ],
};