const prod_webpackMerge = require('webpack-merge');
const prod_baseConfig = require('./webpack.config.base');

const prodConfig = {
    mode: 'production',
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);