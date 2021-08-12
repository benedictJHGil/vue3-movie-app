const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    entry: './src/main.js',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "~/scss/main";'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 제외할 경로
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin(),
    ],

    devServer: {
        host: 'localhost'
    }
}