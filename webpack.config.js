var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0',
    port: 8000,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
