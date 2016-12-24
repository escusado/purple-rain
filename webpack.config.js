'use strict';

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //   test: /\.js$/,
            //   exclude: /(node_modules)/,
            //   loader: 'babel-loader',
            //   query: {
            //     presets: ['es2015']
            //   }
            // },
            {
              test: /\.html$/,
              loader: 'html'
            }
        ]
    }
};
