const webpackMerge = require('webpack-merge');
const baseConfig = require("./webpack.config.base");
const path = require("path");

const devServer = {
    port: 3000,
    host: "localhost",
    contentBase: [
        path.join(__dirname, "../public"),
        path.join(__dirname, "../assets"),
    ],
    watchContentBase: true,
    publicPath: "/",
    compress: true,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: "error",
    // watchOptions: {
    //     ignored: /node_modules/,
    // },
}

const devConfig = {
    mode: "development",
    devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
