var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'with-styles',
    libraryTarget: 'umd',
    filename: 'with-styles.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
       rules: [
           {
               test: /\.jsx?$/,
               loader: 'babel-loader',
               exclude: /node_modules/
           }
       ]
   },
   externals: {
      'lodash': true,
      'react': true
    }
};
