var webpack = require('webpack');
var path = require('path');

var config = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    "stats": {
        "colors": true
    }
};

module.exports = config;