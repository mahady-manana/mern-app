const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugins = require("html-webpack-plugin");

const CWD = process.cwd();

const config = {
    name : "Mahady Manana - Official website",
    target : "node",
    entry : path.join(CWD, "client/index.js"),
    output : {
        path : path.join(CWD, "/build"),
        filename : "bundle.js",
        publicPath : "/build"
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, exclude : /node_modules/, use : ["babel-loader"]},
            {test : /\.(css|scss)$/, use : ["style-loader","css-loader"]},
            {test : /\.(png|jpg|jpeg|svg|gif|pdf)$/, use : ["file-loader"]}
        ]
    },

}
module.exports = config;