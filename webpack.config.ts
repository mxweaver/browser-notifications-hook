import { resolve, join } from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: WebpackConfiguration & WebpackDevServerConfiguration = {
  mode: 'development',
  entry: './demo/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
      '.js',
      '.tsx',
      '.ts',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './demo/index.html',
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
  },
};

export default config;
