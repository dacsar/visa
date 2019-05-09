import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

const dist = path.resolve(__dirname, 'src/static/js');

export default {
  mode : 'development',
  entry : path.resolve(__dirname, 'src/static/jsx/index.jsx'),

  output : {
    path : dist,
    filename : 'bundle.js'
  },

  module:{
    rules:[
      {
        test : /\.jsx$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        use : [
          'style-loader',
          {
            loader : 'css-loader',
            options : {url : false}
          }
        ]
      },
      {
        test : /\.(jpg|png|gif)$/,
        loader : 'url-loader'
      }
    ]
  },

  resolve : {
    extensions : ['.js', '.jsx']
  },

  plugins : [
    new htmlWebpackPlugin({
      template : path.resolve(__dirname, 'src/templates/index.html'),
      filename : 'index.html'
    })
  ]
}