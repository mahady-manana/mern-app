const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugins = require("html-webpack-plugin");

const CWD = process.cwd();

const config = {
    name : "client",
    mode : "development",
    devtool : "eval-source-map",
    entry : [
        'webpack-hot-middleware/client?reload=true',
        path.join(CWD, "client/index.js")
    ],
    output : {
        path : path.resolve(__dirname, "/build/"),
        filename : "bundle.js",
        publicPath : "/build/"
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, exclude : /node_modules/, use : ["babel-loader"]},
            {test : /\.(css|scss)$/, use : ["style-loader","css-loader"]},
            {test : /\.(png|jpg|jpeg|svg|gif|pdf)$/, use : ["file-loader"]}
        ]
    },
    plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
    ],
	resolve : {
		alias : {
			'react-dom' : '@hot-loader/react-dom'
		}
	}

}
module.exports = config;