import webpack from 'webpack'

import { paths } from './gulpconfig/config'

const path = require('path')

var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  mode: process.env.NODE_ENV ? 'production' : 'development',
  // devtool: 'source-map',

  entry: {
    app: paths.scripts.src
  },
  output: {
    filename: '[name].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSize: 0
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true
    })
  ],

  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules/'),
      Components: path.resolve(__dirname, 'src/scripts/components/'),
      Utils: path.resolve(__dirname, 'src/scripts/utils/')
    }
  }
}
