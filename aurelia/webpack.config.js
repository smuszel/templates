const { AureliaPlugin } = require('aurelia-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path')

/** @type {webpack.Configuration} */
module.exports = {

    entry: { app: 'aurelia-bootstrapper' },
    resolve: {
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new AureliaPlugin({
            aureliaConfig: [
                'defaultBindingLanguage',
                'defaultResources',
                'developmentLogging',
            ],
            features: {
                ie: false,
                svg: false,
                unparser: false,
                polyfills: 'esnext'
            }
        }),
        new HtmlPlugin({ template: 'index.html' }),
        // new BundleAnalyzerPlugin()
    ],
    devtool: 'source-map'
}