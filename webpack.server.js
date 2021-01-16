const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CWD = process.cwd();

const config = {
    name : "server",
    target : "node",
    mode : "development",
    entry : [path.join(CWD, "./server/index.js")],
    output : {
        path : path.join(CWD, "/build/"),
        filename : "build.server.js",
        publicPath : "/build",
        libraryTarget : "commonjs2"
    },
    externals : [nodeExternals()],
    module : {
        rules : [
            {test : /\.(js|jsx)$/, exclude : /node_modules/, use : ["babel-loader"]},
            {test : /\.(css|scss)$/, use : ["style-loader","css-loader"]},
            {test : /\.(png|jpg|jpeg|svg|gif|pdf)$/, use : ["file-loader"]}
        ]
    }
}
module.exports = config;
