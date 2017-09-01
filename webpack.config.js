const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        }, {
          loader: 'postcss-loader',
        }],
      },
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
