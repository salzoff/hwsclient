const path = require('path');

module.exports = {
    entry: {
        service: './src/index.js',
        client: './src/client/index.js',
        requestClasses: './src/classes/request/index.js',
        responseClasses: './src/classes/response/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', include: [path.resolve(__dirname, 'src')] }
        ]
    }
};
