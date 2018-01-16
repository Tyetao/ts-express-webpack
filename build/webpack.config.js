const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    cache: true,
    entry: '../src/app.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    context: __dirname,
    target: 'node',
    externals: nodeModules,
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader'
        }]
    },
    plugins: [
       
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
}

