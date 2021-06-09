<template>
  <div style="background: lightpink;">
    <div ref="provide">
      <span>i am {{name()}}</span>
      <span>text {{text}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    name:'provideinjec',
    inject:['name','text'],//可以访问父级组件中实例及方法，非响应式的
    data(){
      return{

      }
    },
  }
</script>