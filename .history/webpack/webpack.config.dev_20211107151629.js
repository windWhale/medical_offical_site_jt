const webpackMerge = require('webpack-merge');
const baseConfig = require("./webpack.config.base");
const path = require("path");

const devServer = {
    port: 3000,
    host: "localhost",
    static: {
        directory: path.join(__dirname, "../public"),
        assets: path.join(__dirname, "../assets"),
        watch: true,
        publicPath: "/",
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    client: {
        logging: "error",
    }
}

const devConfig = {
    mode: "development",
    devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
