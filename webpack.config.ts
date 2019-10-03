var webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './index.ts',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  devtool: false,
  target: 'node',
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
}