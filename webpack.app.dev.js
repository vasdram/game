const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = (env) => {
    return merge(common(env), {
        mode: 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.[contenthash].js',
            path: path.resolve(__dirname, './dist/'),
            publicPath: '/',
            clean: true,
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
        },
    });
};
