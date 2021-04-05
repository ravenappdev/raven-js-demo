const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/raven/firebase-messaging-sw.js", to: "firebase-messaging-sw.js" },
            ],
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};