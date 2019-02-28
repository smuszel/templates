const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

/** @type {webpack.Configuration} */
module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            { test: /\.vue/, use: 'vue-loader' },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin({ template: './src/index.html' }),
        new VueLoaderPlugin(),
    ]
}