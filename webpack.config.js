const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: './js/index',
    output: {
        path: path.resolve('/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'sibiya666',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './Index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
		host: '0.0.0.0'
    },
}
