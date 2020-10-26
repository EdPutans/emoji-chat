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
        "import/resolver": {
            "typescript": {} // this loads <rootdir>/tsconfig.json to eslint
        },
        react: {
            version: "detect"
        }
    },
    "rules": {
        "max-len": 0,
        "react/jsx-props-no-spreading": 0,
        "no-use-before-define": 0,
        "react/jsx-filename-extension": 0,
        "import/extensions": 0,
        "react/prop-types": 0,
        '@typescript-eslint/no-explicit-any': 0
    }
};