const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
});

module.exports = () => {
  process.env.NODE_ENV = process.env.ENV || 'development';
  const isProd = process.env.NODE_ENV === 'production';

  return {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: '/node_modules',
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [htmlPlugin],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
  };
};
