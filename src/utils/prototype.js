// 关于继承思想的理解--阮一峰
function getFoo(){
  /** 
 *  构造函数
 *  new + 构造函数  -> 原型对象生成实例对象，prototype原型链实现继承
 *  this指向实例对象本身
 *  this.__proto__    ->  Foo.prototype
 *  实例对象的方法分为： 本地  this上的
 *                     引用  Foo.prototype上的
 * */  
function Foo(obj){
  this.name=obj.name;
  this.age=12;
  console.log( this.__proto__ )
}
Foo.prototype.lover="animal";
  let foo = new Foo({name:'foo'});
  let fo2 = new Foo({name:'fo2'});
  fo2.age=13;
  console.log('foo',foo,fo2)
  Foo.prototype.des="children";
  console.log('foo',foo.des,fo2)
}
export {getFoo}