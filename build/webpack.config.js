const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    mode: 'production',
    // mode: 'development',

    entry: {
        'weapp-adapter': path.join(__dirname, '../src/index'),
        'weapp-adapter.min': path.join(__dirname, '../src/index')
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    output: { comments: false },
                    warnings: false
                },
                warningsFilter: () => false
            })
        ]
    },

    plugins: [
        new ESLintPlugin(),
        new CleanWebpackPlugin()
    ]
}
