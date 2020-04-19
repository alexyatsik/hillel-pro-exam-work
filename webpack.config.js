const path = require('path');

module.exports = {
    mode: 'development',
    entry: './source/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}