const path = require("path");

module.exports = {
    // 1
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"],

            // several examples !
            emitError: true,

            emitWarning: true,

            failOnError: true,

            quiet: true,
            cache: true,
            eslintPath: path.join(__dirname, 'reusable-eslint'),
            // default value
            formatter: "stylish",

            formatter: require('eslint-friendly-formatter'),

            // custom formatter
            formatter: function(results) {
                // `results` format is available here
                // http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()

                // you should return a string
                // DO NOT USE console.*() directly !
                return 'OUTPUT';
            },

        }, ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    // 2
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    // 3
    devServer: {
        contentBase: "./dist",
    },
};