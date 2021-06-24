// 关于继承思想的理解--阮一峰
function getFoo(){
  /** 
 *  构造函数
 *  new + 构造函数  -> 原型对象生成实例对象，prototype原型链实现继承
 *  构造函数第一个字母大写
 *  this指向实例对象本身
 *  this.__proto__    ->  Foo.prototype
 *  this.constructor ->指向Foo
 *  实例对象的方法分为： 本地  this上的
 *                     引用  Foo.prototype上的
 *  instancof
 *  isPrototypeOf
 *  hasOwnPrototype
 * 
 * */  
function Foo(obj){
  this.name=obj.name;
  this.age=12;
  console.log( 'Foo',this.__proto__,this.constructor )
}
Foo.prototype.lover="animal";
  let foo = new Foo({name:'foo'});
  let fo2 = new Foo({name:'fo2'});
  fo2.age=13;
  console.log('foo',foo,fo2);
  foo instanceof Foo //验证原型对象和实例对象关系
  Foo.prototype.des="children";
  console.log('foo',foo.des,fo2)
}
// 继承的五种方法
function inheritTypes(){
  /**
   * 第一种 构造函数绑定
   *    使用call/apply/bind方法，将父对象的构造函数绑定到子对象上
   *    call/apply/bind 改变函数上下文环境 this
   *    call/apply 入参不同，立即执行
   *    bind 返回一个函数非立即执行
   * 第二种 cat.prototype=new animal() 改变cat.prototype.constructor
   *     所有猫的实例继承animal的实例
   * 第三种 cat.prototype=animal.prototype
   *     缺点：prototype指向同一个对象，互相影响
   * 第四种 利用空对象作为中介
   *    空对象 指向 Parent.prototype
   *    child.prototype 指向 空对实例
   *    child.uber 指向Parent.prototype
   * 第五种 拷贝继承
   *    parent.prototype 拷贝给child.prototype
   */
  function Animal(type,age,obj){
    //this都是指向animal上的实例
    this.type=type;
    this.age=age;
    this.common="animal";
    this.commonObj=obj
  }
  Animal.prototype.common2 = 'inheritFromAnimalPrototype'
  function Cat(obj){
    // 一、构造函数绑定
    Animal.apply(this,[obj.type,obj.age,obj]);
    // Animal.call(this,'catCall',18)
    // Animal.bind(this,'catBind',21)()
    // 二、prototype模式
    // this.__proto__ = new Animal( obj.type,obj.age);
    // this.__proto__.constructor=Cat;
    this.name=obj.name;
    this.color = obj.color;
  }
  // 二、prototype模式
  // Cat.prototype = new Animal( 'CatPrototype',25);
  // Cat.prototype.constructor = Cat;
  // 三、直接继承protoptype
  // Cat.prototype = Animal.prototype;
  // Cat.prototype.constructor = Cat;
  /**
  
   */
  function extend(Child,Parent){
    var F = function(){}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
  }
  // extend(Cat,Animal);

  let blackCat = new Cat({name:'小黑',color:'#000',type:'cat',age:23})
  let blackCat2 = new Cat({name:'小黑2',color:'#000',type:'cat2',age:24})
  blackCat2.type='cat3'
  let animalOne = new Animal('dog',4);
  console.log('Cat',blackCat,blackCat2,blackCat.common2,animalOne)


}

// 非构造函数的继承
function noConstrusctFInherit(){
  /**
   * 一、object() 把子对象.prototype指向父对象
   * 二、浅拷贝 extend 把父对象的属性全部拷贝给子对象
   * 三、深拷贝  递归调用浅拷贝
   */
  //  object()
  let chinese={
    nation:'中国',
    proviences:[1,2,3],
    sexScale:{
      faMil:1,
      mil:2
    }
  }
  function object(o){
    function F (){}
    F.prototype = o;
    return new F()
  }
  // var doctor = object(chinese);
  // doctor.career = '医生';
  // console.log('doctor',doctor)

  // 浅拷贝-- prototype为对象时，互相影响
  function extendCopy(p){
    let c = {};
    for(let i in p){
      c[i]=p[i];
    }
    c.uber = p;
    return c
  }
  // let doc2 = extendCopy(chinese);
  // doc2.nation = 'china';
  // doc2.proviences.push('5');
  // console.log('extendCopy(chinese)',doc2,chinese);

  // let chinese={
  //   nation:'中国',
  //   proviences:[1,2,3],
  //   sexScale:{
  //     faMil:1,
  //     mil:2
  //   }
  // }
  function deepCopy(p,c){
     c=c||{};
    for(let i in p){
      if(typeof p[i] == 'object'){
        c[i]=(p[i].constructor===Array)?[]:{};
        deepCopy(p[i],c[i]);
      }else{
        c[i]=p[i];
      }
    }
    return c
  }
  let doc3 = deepCopy(chinese);
  doc3.proviences.push('67');
  // chinese.birthPlaces=['北京','上海','香港'];
  // doc3.birthPlaces.push('厦门');
  function F (){}
  console.log('deepCopy(chinese)',doc3,chinese);

}

function prototypeFun(){
  getFoo();
  inheritTypes();
  noConstrusctFInherit();
}


export {prototypeFun}