const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'source'),
    mode: 'development',
    entry: ['@babel/polyfill', './src/js/app.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jQuery'
        }),
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebPackPlugin([
            {
                from: path.resolve(__dirname, './source/src/images/favicon.ico'),
                to: path.resolve(__dirname, 'build')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    }, 
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    }, 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}