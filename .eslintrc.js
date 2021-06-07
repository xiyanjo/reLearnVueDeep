module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-console': 0, // 开发模式允许使用console
    'no-redeclare': [2, {builtinGlobals: true}],// 不允许重复声明变量
    "no-unused-vars": 0,
    "vue/no-unused-components": 0,
    //就是这一句，禁用import和require必须出现在顶层作用域的验证规则
    "global-require": 0//这里应该0代表off之前写错了写成了false
  },
};
