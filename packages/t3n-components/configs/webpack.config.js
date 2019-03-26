/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../build')
  },
  mode: 'production',
  context: resolve(__dirname, '../src'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              forceIsolatedModules: true,
              useCache: true,
              useBabel: true,
              babelCore: '@babel/core',
              reportFiles: ['src/**/*.{ts,tsx}']
            }
          }
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     cache: true
          //   }
          // }
        ]
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loaders: [
          'babel-loader',
          'source-map-loader'
          // 'eslint-loader'
        ]
      }
    ]
  },
  plugins: [new WebpackNotifierPlugin({ title: 't3n-components' })]
};
