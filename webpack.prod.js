const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            // new TerserPlugin({
            //     terserOptions: {
            //         compress: {
            //             format: {
            //                 comments: false,
            //             },
            //             drop_console: true,
            //             extractComments: false,
            //         },
            //     },
            // }),
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                        ecma: 2015,
                    },
                    compress: {
                        drop_console: true,
                        ecma: 2015,
                        module: true,
                        toplevel: true,
                    },
                },
            }),
            // new CopyPlugin([
            //     { from: 'bundle', to: 'bundle', context: './' },
            //     { from: 'styles.css', to: 'styles.css', context: './' },
            // ]),
        ],
    },
});
