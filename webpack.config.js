const path = require('path');

module.exports = {
    entry: {
        service: './src/run.js',
        index: './src/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', include: [path.resolve(__dirname, 'src')] }
        ]
    }
};
