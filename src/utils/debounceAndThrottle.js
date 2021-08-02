/**
 * 防抖: 用户持续触发事件不会执行fn,
 * 2种实现方式:先执行或或执行,用户触发重新计时,n秒只执行1次
 * 逻辑:
 * 1 后执行 声明变量保存定时器,返回函数,函数内部(有定时器--清除定时器,设置n秒后执行fn)
 *    if(timer) clearTimeout(timer)
 *    timer = setTimeout(function () {fn()},wait);
 * 2 立即执行 声明变量保存定时器,返回函数,函数内部(
 *    if(timer) clearTimeout(timer)
 *    if(!timer) fn()
 *    timer = setTimeout(function () { timer = null},wait);
 */
function debounce(fn, wait, type) {
  let timer = null; // 定义一个函数内的变量保存timer
  // 返回一个函数,保证每个函数调用时有自己独立的空间
  return function () {
    // debugger;
    if (timer) clearTimeout(timer); //用户触发函数就会清除定时器重新计时
    //1-- 非立即执行版本:用户触发行为停止后n秒
    if (type == "next") {
      //n秒后执行函数
      timer = setTimeout(function () {
        fn();
        // timer = null;
      }, wait);
      //2-- 立即执行版本:
    } else if (type == "immer") {
      let noTimer = !timer;
      if (noTimer) fn(); //没有计时执行一次
      // 每次触发都会触发计时功能, (n秒后timer = null);
      timer = setTimeout(function () {
        timer = null;
      }, wait);
    }
  };
}

/**
 * 节流: n秒执行1次,与用户行为无关
 * 2种实现方式:
 *    1 时间戳版本(立即执行):
 *          声明preTime 存储当前事件
 *          return function(){//独立的空间
 *              时间间隔大于n秒,执行函数,preTime=Date.now()
 *    2 定时器版本(后执行):
 *         let timer = null;
 *         return function(){
 *            没有timer,创建定时器
 *            定时器内timer = null; fn()
 *         }
 */
function throttle(fn, wait, type) {
  if (type == "date") {
    let preTime = 0;
    return function () {
      if (Date.now() - preTime > wait) {
        fn();
        preTime = Date.now();
      }
    };
  } else if (type == "timer") {
    let timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          fn();
        }, wait);
      }
    };
  }
}

function onSrollBody() {
  console.log("我滚动了^");
}

// document.onmousemove = debounce(onSrollBody, 1000, "next");
document.onmousemove = throttle(onSrollBody, 2000, "date");
