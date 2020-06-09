// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-return': 'off',
    'no-unexpected-multiline': 'off',
    
    'indent': ['error', 2, {         //缩进风格
      'SwitchCase': 1,
      'VariableDeclarator': 2,
      'outerIIFEBody': 1,
      'ignoreComments': true
    }],
    'no-multi-spaces': ['error', {
      'ignoreEOLComments': true,
      'exceptions': {                       // 允许任意数量空白对齐
        'Property': true,                   // 允许object属性
        'VariableDeclarator': true,         // 允许var
        'ImportDeclaration': true           // 允许import
      }
    }],
    'space-in-parens': ["error", "never"],

    'padded-blocks': 'off',
    'camelcase': 'off',
    'one-var': 'off',
    'semi': 'off',
    'no-multiple-empty-lines': ["error", {
      'max': 3,
      'maxBOF': 3,
      'maxEOF': 2
    }],
    'handle-callback-err': 'off'
  }
}
