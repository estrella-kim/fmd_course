const path = require('path');

module.exports = {
    entry : './src',
    output : {
        path : path.resolve(__dirname, './public'),
        filename : 'index.bundle.js'
    },
    module : {
        rules : [
            {

                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            },
            {
                enforce: 'pre',
                test : /\.js$/,
                exclude : /node_mdules/,
                loader : 'eslint-loader'
            }
        ]
    }
}
