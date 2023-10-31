const path = require('path');

module.exports = {
    mode: 'production',
    // mode: 'development',
    entry: ['./src/index.ts'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',  // 2. Then pass the output to Babel
                    'ts-loader'      // 1. First transpile TS to JS
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,  // matches JavaScript files
                exclude: /node_modules/,  // exclude node_modules directory
                use: 'babel-loader'  // use babel-loader to transpile
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
