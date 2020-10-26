module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "@typescript-eslint"
    ],
    "settings":{
        react: {
            version: "detect"
        }
    },
    "rules": {
        "no-use-before-define": 0,
        "react/jsx-filename-extension": 0,
        "import/extensions": 0,
        "react/prop-types": 0,
    }
};