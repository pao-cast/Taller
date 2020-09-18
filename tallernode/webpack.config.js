const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html'
    })
]
