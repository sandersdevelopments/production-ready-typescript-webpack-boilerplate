const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.ts',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        filename: '[name].bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'VS',
        libraryTarget: 'umd',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html',
            inject: 'head',
        }),
        // new CopyPlugin([{ from: 'bundle', to: path.resolve(__dirname, 'dist/bundle') }]),
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
