var path = require('path');

module.exports = {
  entry: {
    app: './src/a1atscript.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'a1atscript.bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          optional: ['es7.decorators'],
          stage: 0
        }
      }
    ]
  },
  devtool: 'source-map'
}
