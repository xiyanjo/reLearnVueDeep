<template>
  <div style="background:lightslategrey;">
      <h5>可复用组件:{{tab}}</h5>
      <p>{{userInfo}}</p>
  </div>
</template>
<script>
import  mixinDemo from '@/components/mixins/mixinDemo.js'
export default{
  mixins:[mixinDemo],
  data(){
    return{
      tab:['resuable','dfdf'],

    }
  },
  created(){
    this.getUserInfo();
  }

}
</script>
