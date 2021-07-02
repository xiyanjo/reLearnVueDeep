var arrFun={
  learnReduce:function(){
    // 当前函数需要返回值
    let numbers = [1,2,3,4,5,3,3,3,3,2];
    // reduce第二个参数：第一次调用callback的第一个参数
    let countArr ={};
 

    // 找出一个数组中的最大数和值

    // 第一种
    // for(let i in numbers){
    //   if(countArr[numbers[i]]){
    //     countArr[numbers[i]]++
    //   }else{
    //     countArr[numbers[i]]=1
    //   }
    // }

    // 第二种方法 reduce
    countArr = numbers.reduce((total,num)=>{
      // num为数组的每一项
      // total初始值, 或者计算结束后的返回值
      // reduce第二个参数initialValue，传递给函数的初始值，不传默认使用数组的第一项
      total[num]?total[num]++:total[num]=1
      return total
    },{})

    let max ={
      name:'',
      count:0
    }
    for(let i in countArr){
      if(countArr[i] > max.count){
        max.count = countArr[i];
        max.name = i
      }
    }
    console.log('max',max)
  }
  
}

 
export default arrFun