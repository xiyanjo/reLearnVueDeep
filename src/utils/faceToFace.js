// 原型方面面试题
function protoFace(){
  //一、 构造函数返回一个对象，对象代替this
  // var fun = function(){
  //   this.name = 'peter';
  //   return {
  //     name: 'jack',
  //     total:{
  //       yuwen:89,
  //       shuxue:98,
  //     }
  //   };
  // }
  // var p = new fun(); //{ name:'jack',total:{}}
  // p.name='p2';
  // p.total.yuwen=12
  // console.log('p.name',p,p.name)


  //二、 构造函数返回一个值，还是this
  // var fun = function(){
  //   this.name = 'peter';
  //   return 'jack';    
  // }
  // var p = new fun();// fun{this.name='petter'} 
  // p.name='p2';
  // console.log('p.name',p,p.name)

 
  /** _________________________________________________________________________________________
   * 三、原型上的属性
   *  类型为对象时：若实例上没有info，则添加到info.name到原型上，共享一个数据
   *  类型为基本类型时： 若实例上没有base ,则添加base到实例上，不改变原型上的基本类型的同名字段
   */
  var fun = function(){}
  fun.prototype = {
      info : {
        name : 'peter',
        age : 25
      },
      base:'common' 
  }
  var a = new fun();
  var b = new fun();
  // a.info.name = 'jack';  
  b.info.name = 'tom';
  a.info={name:'jack'}
  a.base = 'a'; 
  b.base = 'b';
  console.log('a,b',a,b)//fun {base:'a',__proto__:{info:{},base:'common'}}

  /**
   * 四、构造函数私有属性
   *  类型为对象/基本类型时，各自拥有各自的属性
   *  实例本身属性 > 原型上的属性
   */
  // var fun = function(){
  //   this.info = {
  //     name : 'peter',
  //     age : 25
  //   };
  //   this.sex='mail';
  // }
  // fun.prototype = {
  //   info : {
  //     name : 'protopePeter',
  //     age : 14
  //   },
  // }
  // var a = new fun();
  // var b = new fun();
  // a.info.name = 'jack';
  // b.info.name = 'tom';
  // a.sex='a';
  // b.sex='b';
  // console.log('a,b',a,b) 
  //fun{sex:'a',info:{name:jack,age:25},__proto__:{info:{name}}  
  //fun{sex:'b',info:{name:tom,age:25},__proto__:{info:{name}}
}
/**
 * 闭包：
 *  函数内部可以直接读取全局变量，函数外部无法读取局部变量
 *  目的：读取其他函数内部变量的函数
 *  形式：定义在一个函数内部的函数
 * 
 * 
 */
// 闭包方面面试题
function closeArea(){
  // function sayHello(name){
  //   var text = 'hello-'+name;
  //   var sayAlert=function(){
  //     console.log(text);
  //   }
  //   sayAlert();
  // }
  // sayHello('bb');

  // function sayHello2(name) {
  // var text = 'Hello ' + name; // 局部变量
  // var sayAlert = function() { console.log(text); }
  //   return sayAlert;
  // }
  
  // var say2 = sayHello2("Jane");
  // say2(); // 输出"Hello Jane"

  /**
   * 二、作用域：
   * 函数的上一级作用域：函数声明的作用域
   * var变量提升：变量提升到所在作用域顶部，不赋值，不会覆盖同名函数（赋值时才覆盖同名函数）
   * 函数声明提升：优先变量提升，函数提升覆盖同名函数
   * let 声明的变量：在声明的块级作用域有效，声明变量必须在声明后使用
   *    在该作用域内，let声明前使用该变量会报错
   *    因为let typeof 声明前使用也会报错，非百分比安全
   *    相同作用域下不允许重复声明同一变量
   * es5作用域：全局作用域、函数作用域
   * es6作用域：全局作用域、块级作用域
   * 块级作用域：
   *    块级作用域替代立即执行匿名函数 iife
   *    块级作用域内最好使用函数表达式，不要使用函数声明式
   *    块级作用域必须有{}
   *  
   */
  // 2.1、考核词法作用域
  // function fn(callback){
  //   var age=18;
  //   console.log(age)
  //   callback()
  // }
  // fn(function(){
  //   console.log('age',age)  // 上一级作用域为全局，window,window中没有age
  // })
  // 2.2.1、考核函数变量提升
  // var x = "globol value";
  // function getValue(){
  //     // var x; // 声明变量，不进行赋值，默认值为undefined
  //     console.log(x);
  //     var x = "local value";
  //     console.log(x);
  // } 
  // getValue();

  // 2.2.2 let 不存在变量提升
  // var x = "globol value";
  // function getValue(){
  //     console.log('x1',x);//报错，不存在变量提升
  //     let x = "local value";
  //     console.log('x2',x);
  // }
  // getValue();

  // 2.3、函数提升先于变量提升
  // function test() {
  //   // function foo() {   return 'hello' }//函数提升
  //   // var foo=undefined//变量提升,不会覆盖同名函数
  //   // var bar; 变量提升
  //   console.log(foo)  //fun
  //   console.log(bar) //undefined
  //   var foo = 'hello'
  //   // foo='hello'
  //   console.log(foo) //'hello'
  //   var bar = function() {
  //       return 'world'
  //   }
  //   function foo() {
  //       return 'hello'
  //   }
  // } 
  // test();

  // 2.4 循环的面试题
  // var a;var i ;var a[0],a[1],a[2];//变量提升
  // i=0; a[0]=function(){console.log(i)};
  // i=1; a[1]=function(){console.log(i)};
  // a[6]()//i指向全局的i，i变为10
  // var a = [];
  // for (var i = 0; i < 10; i++) {
  //   a[i] = function () {
  //     console.log(i);
  //   };
  // }
  // a[5]();

  // 2.5 let
  // let a = [];
  // for (let i = 0; i < 10; i++) {//设置循环的是父级作用域
  //   a[i] = function () {
  //     // let i = 'child' //子作用域
  //     console.log(i);
  //   };
  // }
  // a[5]();


  // 2.6
  // var tmp = new Date();
  // function f() {
  //   // var tmp;//变量提升
  //   console.log(tmp);
  //   if (false) {
  //     var tmp = 'hello world';
  //   }
  // }
  // f(); 
  
  // 2.7块级作用域，内层不影响外层
  // function f1() {
  //   let n = 5;
  //   if (true) {
  //     let n = 10;
  //   }
  //   console.log(n); // 5
  // }
  // f1()

  // //2.8 IIFE 写法
  // (function () {
  //   var tmp = ''
  // }());
  // // 块级作用域写法
  // {
  //   let tmp = ''
  // }

  // 2.9 块级作用域内最好使用函数表达式，不要使用函数声明的方式
  // function f() { console.log('I am outside!'); }
  // (function () {
  //   if (false) {
  //     // 重复声明一次函数f
  //     let f = function () { console.log('I am inside1!'); }
  //     // function f () { console.log('I am inside2!'); }
  //   }
  //   f();
  // }());
  // if (true) {
  //   let f = function () { console.log('I am inside3!'); }
  //    f();
  // }
  // f();

// // this 指向调用这个函数的owner
//   var name = "The Window";
// 　var object = {
// 　　　name : "My Object1",
// 　　　getNameFunc : function(){
// 　　　　　return function(){
//             console.log('this',this)
// 　　　　　　　return this.name;
// 　　　　　};
// 　　　}
// 　};
//   console.log(object.getNameFunc()());
//   　var name = "The Window";
// 　　var object = {
// 　　　　name : "My Object2",
// 　　　　getNameFunc : function(){
// 　　　　　　var that = this;
// 　　　　　　return function(){
// 　　　　　　　　return that.name;
// 　　　　　　};
// 　　　　}
// 　　};
//   console.log(object.getNameFunc()());

  // function sayAlice() {
  // var sayAlert = function() { console.log(alice); }
  // var alice = 'Hello Alice';
  // return sayAlert;
  // }
  // var sayAlice2 = sayAlice();
  // sayAlice2();

  // function setupSomeGlobals() {
  //   var num = 666;
  //   gAlertNumber = function() { console.log(num); }
  //   gIncreaseNumber = function() { num++; }
  //   gSetNumber = function(x) { num = x; }
  // }
  // setupSomeGlobals();
  // gAlertNumber(); // 输出666
  // gIncreaseNumber();
  // gAlertNumber(); // 输出667
  // gSetNumber(5);
  // gAlertNumber(); // 输出5

}
//重复一个字符串
function repeatStr(){

}
function faceToFace(){
  // protoFace();//原型面试题
  // closeArea();//作用域闭包面试题
  repeatStr();//重复一个字符串
}
export {faceToFace}