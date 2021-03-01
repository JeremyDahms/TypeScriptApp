/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.svg$/,
                use: 'url-loader',
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
            },
        ],
    },
    devServer: { historyApiFallback: true },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
};
