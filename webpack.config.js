// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // Bisa juga 'production' atau 'none'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
