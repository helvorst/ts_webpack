import * as path from 'path';
import * as webpack from 'webpack';
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {

    devtool: 'inline-source-map',

    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    entry: path.resolve(__dirname, 'src'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};

export default config;
