let stringA = "aaa";
let numberA = 23232;
let booleanA = true;
let undefinedA = undefined;
let nullA = null;
let dateA = new Date();
let arrayA = [];
let objA = {};

console.log(
  typeof stringA,
  typeof numberA,
  typeof booleanA,
  typeof undefinedA,
  typeof nullA,
  typeof dateA,
  typeof arrayA,
  typeof objA,
  "----------",
  getType(stringA),
  getType(numberA),
  getType(booleanA),
  getType(undefinedA),
  getType(nullA),
  getType(dateA),
  getType(arrayA),
  getType(objA),
  getType(getType)
);

function getType(variate) {
  // Object.prototype.toString---默认返回调用者的具体类型
  // 如果直接调用toString, 会访问自身重写的toString方法;
  return Object.prototype.toString.call(variate);
}
