const dev_path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

module.exports = {
    entry: {
        app: "./src/index.tsx",
    },
    output: {
        path: dev_path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", '.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_muldes/ },
            { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },
            { 
                test: /\.(css|less)$/, 
                exclude: /\.module\.less$/, 
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"] 
            },
            {
                test: /\.module\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                getLocalIdent: getCSSModuleLocalIdent,
                            }
                        }
                    },
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        // "antd": "antd",
    }
}
