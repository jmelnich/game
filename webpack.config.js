const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new ExtractTextPlugin('css/styles.css'),
  ],
  mode: 'development',
  module: {
    rules:
     [
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader'],
         }),
       },
       { test: /\.css$/, use: ['style-loader', 'css-loader'] },
       {
         test: /\.(jpe?g|png|gif|svg)$/i,
         use: [{ loader: 'url-loader', options: { name: '[path][name].[ext]', limit: 5000 } }],
       },
       {
         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/' } }],
       },
       {
         test: /\.js$/,
         exclude: /(node_modules)/,
         include: [path.join(__dirname, 'src/')],
         use: { loader: 'babel-loader' },
       },
     ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
