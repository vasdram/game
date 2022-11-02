const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { darkTheme } = require('@ant-design/dark-theme');
const customTheme = require('./src/theme');
const path = require('path');

module.exports = (env) => {
    return {
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
            },
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
        },
        plugins: [
            new Dotenv({
                path: `./.env.${env.environment}`,
            }),
            new HTMLWebpackPlagin({
                template: './index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
            new ESLintPlugin({
                extensions: ['js', 'jsx', 'ts', 'tsx'],
            }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'favicon.ico'), to: '' },
                    { from: path.resolve(__dirname, 'favicon2x.ico'), to: '' },
                    { from: path.resolve(__dirname, 'locales'), to: 'locales' },
                ],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|sass)$/,
                    exclude: /\.module\.(scss|sass)$/,
                    use: [
                        // to inject the result into the DOM as a style block
                        'style-loader',
                        // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in
                        // output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                        { loader: 'css-loader', options: { modules: false } },
                        // to convert SASS to CSS
                        'sass-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.less$/i,
                    use: [
                        // compiles Less to CSS
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    modifyVars: { ...darkTheme, ...customTheme },
                                    javascriptEnabled: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.module\.(scss|sass)$/,
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { modules: true } },
                        'sass-loader',
                        'postcss-loader',
                    ],
                },
                { test: /\.tsx?$/, loader: 'babel-loader' },
                {
                    test: /\.(png|jpg|gif|webp)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 20480,
                            },
                        },
                    ],
                },
                { test: /\.svg$/i, use: ['@svgr/webpack', 'file-loader'] },
                {
                    test: /\.(woff(2)?|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    options: {
                        filterSourceMappingUrl: (url, resourcePath) => {
                            if (/.*\/node_modules\/.*/.test(resourcePath)) {
                                return false;
                            }

                            return true;
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
            ],
        },
    };
};
