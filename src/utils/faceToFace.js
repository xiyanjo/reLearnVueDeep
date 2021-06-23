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


function closeArea(){
  // function sayHello(name){
  //   var text = 'hello-'+name;
  //   var sayAlert=function(){
  //     console.log(text);
  //   }
  //   sayAlert();
  // }
  // sayHello('bb');

  function sayHello2(name) {
  var text = 'Hello ' + name; // 局部变量
  var sayAlert = function() { console.log(text); }
    return sayAlert;
  }

  var say2 = sayHello2("Jane");
  say2(); // 输出"Hello Jane"
}

export {protoFace,closeArea}