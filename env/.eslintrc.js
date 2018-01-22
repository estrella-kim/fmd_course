module.exports = {
    "extends" : ["eslint:recommended","plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion" : 6,
        "ecmaFeatures" : {
            "jsx": true
        },
        "sourceType" : "module"
    },
    "env" : {
        "browser" : true,
        "node": true
    },
    "rules" : {
        "padded-blocks": 0,
        "no-console" : 0,
        "no-unused-vars" : 1,
        "brace-style": 0
    },
    "plugins" : [
        "react"
        /*new webpack.optimize.UglifyJsPlugin()*/
    ]
};