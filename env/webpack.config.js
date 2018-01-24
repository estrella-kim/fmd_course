const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        // path : path.resolve(__dirname, './public'),
        // filename : 'index.bundle.js'
        filename : 'public/index.bundle.js'
    },
    devServer : {
        inline : true,
        hot : true
    },
    module : {
        rules : [
            {

                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['env', 'react']
                }
            },
            {
                enforce: 'pre',
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'eslint-loader'
            },
            {
                test : /\.css$/,
                use : [
                    { loader : 'style-loader'},
                    { loader : 'css-loader'}
                ]
            }
        ]
    }
}
