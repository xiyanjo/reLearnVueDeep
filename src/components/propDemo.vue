<template>
  <div>
    <div>{{propA}}</div>
    <div>{{propD}}</div>

  </div>
</template>
<script>
export default{
  name:'propDemo',
  props:{//prop在组件实例创建前进行验证
    propA:Number,
    propB:[String,Number],
    propC:{
      type:[String,Number],//prop类型
      required:true,//prop是否必传
    },
    propE:{
      //对象和数组默认值必须从一个工厂函数获取
      type:Object,
      default:function(){
        return {msg:'hello'}
      }
    },
    propF:{//自定义验证函数
      validator:function(value){
        return ['a','b','c'].indexOf(value)!==-1
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>