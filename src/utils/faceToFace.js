// 原型方面面试题
function protoFace() {
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
  var fun = function () {};
  fun.prototype = {
    info: {
      name: "peter",
      age: 25,
    },
    base: "common",
  };
  var a = new fun();
  var b = new fun();
  // a.info.name = 'jack';
  b.info.name = "tom";
  a.info = { name: "jack" };
  a.base = "a";
  b.base = "b";
  console.log("a,b", a, b); //fun {base:'a',__proto__:{info:{},base:'common'}}

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
function closeArea() {
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
function repeatStr(str, n) {
  let newStr = "";

  // 方法一 循环
  var repeatLoop = function () {
    let newStr = "";
    if (n <= 0) return str;
    // 方法1.1  for循环
    for (let i = 0; i < n; i++) {
      newStr += str;
    }
    // 方法1.2 while
    // while(n>0){
    //   newStr+=str;
    //   n--
    // }
    return newStr;
  };
  //newStr = repeatLoop();

  // 方法二 递归
  // function recursionRepeat (str,n){
  //   if(n>0){
  //     return  str + recursionRepeat(str,n-1);
  //   }else{
  //     return ''
  //   }
  // }
  // newStr =  recursionRepeat('abj',3);
  // 方法三、repeat方法
  // newStr =  'abj'.repeat(4);

  // console.log(newStr)
}
// 函数声明相关
function aboutFunctionVar() {
  var x = 1,
    y = 0,
    z = 0;
  // 1.1
  // function add(n){
  //     n=n+3;
  // }
  // y=add(x);//add函数没有返回值：undefined
  // z=x+y;//z=1+fun
  // console.log("y2:"+y,z);

  // 1.2
  function add(n) {
    return (n = n + 3);
  }
  y = add(x); //4
  z = x + y; //z=1+4
  console.log("y2:", x, y, z);
}
// 创建原生的方法
function addNativeFun() {
  String.prototype.repeatify =
    String.prototype.repeatify ||
    function (times) {
      var str = "";
      for (let i = 0; i < times; i++) {
        str += this;
      }
      return str;
    };
  var str = "abv";
  console.log(str.repeatify(5));
}
// this引用的是函数上下文，取决于调用时
function aboutThis() {
  var fullname = "John Doe";
  var obj = {
    fullname: "Colin Ihrig",
    prop: {
      fullname: "Aurelio De Rosa",
      getFullname: function () {
        return this.fullname;
      },
    },
  };
  console.log(obj.prop.getFullname());
  var test = obj.prop.getFullname;
  console.log(test());
}
// 闭包相关
function aboutClose() {
  var name = "The Window";
  var object = {
    name: "my obj",
    getNameFunc: function () {
      return function () {
        return this.name;
      };
    },
  };
  // console.log(object.getNameFunc()());
}
// 待看的
function todoss() {
  // 实现继承
  function inherit(Child, Parent) {
    // 继承原型上的属性
    Child.prototype = Object.create(Parent.prototype);
    // 修复 constructor
    Child.prototype.constructor = Child;
    // 存储超类
    Child.super = Parent;
    // 静态属性继承
    if (Object.setPrototypeOf) {
      // setPrototypeOf es6
      Object.setPrototypeOf(Child, Parent);
    } else if (Child.__proto__) {
      // __proto__ es6 引入，但是部分浏览器早已支持
      Child.__proto__ = Parent;
    } else {
      // 兼容 IE10 等陈旧浏览器
      // 将 Parent 上的静态属性和方法拷贝一份到 Child 上，不会覆盖 Child 上的方法
      for (var k in Parent) {
        if (
          Object.prototype.hasOwnProperty.call(Parent, "k") &&
          !(k in Child)
        ) {
          Child[k] = Parent[k];
        }
      }
    }
  }
}

function face4() {
  var age = 30;
  function fu4() {
    if (age) {
      age = 28;
    }
    console.log("age", age);
  }
  fu4();
}
function publishSubscribe() {
  // 观察者模式
  //有一家猎人工会，其中每个猎人都具有发布任务(publish)，订阅任务(subscribe)的功能
  //他们都有一个订阅列表来记录谁订阅了自己
  //定义一个猎人类
  //包括姓名，级别，订阅列表
  function Hunter(name, level) {
    this.name = name;
    this.level = level;
    this.list = [];
  }
  Hunter.prototype.publish = function (money) {
    console.log(this.level + "猎人" + this.name + "寻求帮助");
    this.list.forEach(function (item, index) {
      item(money);
    });
  };
  Hunter.prototype.subscribe = function (targrt, fn) {
    console.log(this.level + "猎人" + this.name + "订阅了" + targrt.name);
    targrt.list.push(fn);
  };

  //猎人工会走来了几个猎人
  let hunterMing = new Hunter("小明", "黄金");
  let hunterJin = new Hunter("小金", "白银");
  let hunterZhang = new Hunter("小张", "黄金");
  let hunterPeter = new Hunter("Peter", "青铜");

  //Peter等级较低，可能需要帮助，所以小明，小金，小张都订阅了Peter
  hunterMing.subscribe(hunterPeter, function (money) {
    console.log(
      "小明表示：" + (money > 200 ? "" : "暂时很忙，不能") + "给予帮助"
    );
  });
  hunterJin.subscribe(hunterPeter, function () {
    console.log("小金表示：给予帮助");
  });
  hunterZhang.subscribe(hunterPeter, function () {
    console.log("小金表示：给予帮助");
  });

  //Peter遇到困难，赏金198寻求帮助
  hunterPeter.publish(198);

  //猎人们(观察者)关联他们感兴趣的猎人(目标对象)，如Peter，当Peter有困难时，会自动通知给他们（观察者）

  // 发布订阅模式
  // //定义一家猎人工会
  // //主要功能包括任务发布大厅(topics)，以及订阅任务(subscribe)，发布任务(publish)
  // let HunterUnion = {
  //   type: "hunt",
  //   topics: Object.create(null),
  //   subscribe: function (topic, fn) {
  //     if (!this.topics[topic]) {
  //       this.topics[topic] = [];
  //     }
  //     this.topics[topic].push(fn);
  //   },
  //   publish: function (topic, money) {
  //     if (!this.topics[topic]) return;
  //     for (let fn of this.topics[topic]) {
  //       fn(money);
  //     }
  //   },
  // };

  // //定义一个猎人类
  // //包括姓名，级别
  // function Hunter(name, level) {
  //   this.name = name;
  //   this.level = level;
  // }
  // //猎人可在猎人工会发布订阅任务
  // Hunter.prototype.subscribe = function (topic, fn) {
  //   console.log(
  //     this.level + "猎人" + this.name + "订阅了狩猎" + topic + "的任务"
  //   );
  //   HunterUnion.subscribe(topic, fn);
  // };
  // Hunter.prototype.publish = function (topic, money) {
  //   console.log(
  //     this.level + "猎人" + this.name + "发布了狩猎" + topic + "的任务"
  //   );
  //   HunterUnion.publish(topic, money);
  // };

  // //猎人工会走来了几个猎人
  // let hunterMing = new Hunter("小明", "黄金");
  // let hunterJin = new Hunter("小金", "白银");
  // let hunterZhang = new Hunter("小张", "黄金");
  // let hunterPeter = new Hunter("Peter", "青铜");

  // //小明，小金，小张分别订阅了狩猎tiger的任务
  // hunterMing.subscribe("tiger", function (money) {
  //   console.log("小明表示：" + (money > 200 ? "" : "不") + "接取任务");
  // });
  // hunterJin.subscribe("tiger", function (money) {
  //   console.log("小金表示：接取任务");
  // });
  // hunterZhang.subscribe("tiger", function (money) {
  //   console.log("小张表示：接取任务");
  // });
  // //Peter订阅了狩猎sheep的任务
  // hunterPeter.subscribe("sheep", function (money) {
  //   console.log("Peter表示：接取任务");
  // });

  // //Peter发布了狩猎tiger的任务
  // hunterPeter.publish("tiger", 198);
  // console.log(HunterUnion.topics);
}
function aboutFoEach() {
  //  forEach和for区别
  function getName(menubar) {
    menubar.forEach((item, index) => {
      console.log(888, index, item);
      if (item.name == "aa") {
        return "a";
      }
    });
    // for (var i = 0; i < menubar.length; i++) {
    //   if (menubar[i].name == "aa") {
    //     console.log(999);
    //     return "aa";
    //   }
    // }
    return null;
  }
  let menus = [{ name: "aa" }, { name: "bb" }];
  console.log(getName(menus));
}
Object.assign(Array.prototype, {
  bubbleSort() {
    for (let i = 0, l = this.length; i < l - 1; i++) {
      for (let j = i + 1; j < l - 1; j++) {
        if (this[i] > this[j]) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }
  },
});
// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比

        var temp = arr[j + 1]; // 元素交换

        arr[j + 1] = arr[j];

        arr[j] = temp;
      }
    }
  }

  return arr;
}
// 插入排序;
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];

    while (preIndex >= 0 && arr[preIndex] > current) {
      // console.log(2222, i);
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
// var quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [];
//   var right = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// };

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [],
    right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// 事件执行
function aboutEventLoop() {
  debugger;
  console.log(1);
  setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
      console.log(3);
    });
  });
  new Promise((resolve, reject) => {
    console.log(4);
    resolve(5);
  }).then((data) => {
    console.log(data);
  });
  setTimeout(() => {
    console.log(6);
  });
  console.log(7);
}
function faceToFace() {
  let arr = [23, 44, 38, 5, 47, 16, 51, 9];
  // protoFace();//原型面试题
  // closeArea();//作用域闭包面试题
  // repeatStr()//重复一个字符串
  // aboutFunctionVar();//函数声明相关
  // addNativeFun();//创建原生的方法
  // aboutThis()//this指向
  // face4();
  // publishSubscribe();
  // aboutFoEach()
  // bubbleSort(arr);
  // console.log(insertionSort(arr));
  // console.log(quickSort(arr));
  // log22();
}

export { faceToFace };
