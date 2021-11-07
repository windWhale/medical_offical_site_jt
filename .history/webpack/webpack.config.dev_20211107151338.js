const webpackMerge = require('webpack-merge');
const baseConfig = require("./webpack.config.base");
const path = require("path");

const devServer = {
    port: 3000,
    allowedHosts: ["localhost"],
    static: {
        directory: path.join(__dirname, "../public"),
        assets: path.join(__dirname, "../assets"),
    },
    watchContentBase: true,
    publicPath: "/",
    compress: true,
    historyApiFallback: true,
    hot: true,
    // clientLogLevel: "error",
    // watchOptions: {
    //     ignored: /node_modules/,
    // },
}

const devConfig = {
    mode: "development",
    devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
