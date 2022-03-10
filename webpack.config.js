const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'), filename: 'bundle.js', clean: true
    }, devServer: {
        static: path.resolve(__dirname, 'dist'), port: 8080, open: true,
    }, plugins: [new HTMLPlugin({
        filename: 'index.html', template: './src/index.html'
    })], resolve: {
        extensions: ['.js']
    }, module: {
        rules: [{
            test: /\.m?js$/, exclude: /(node_modules|bower_components)/, use: {
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env']
                }
            }
        },]
    }
}