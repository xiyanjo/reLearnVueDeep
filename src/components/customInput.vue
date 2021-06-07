<template>
  <div>
    <!-- 一个简单得v-model：使用value和input -->
    <!-- <input type="text" :value="value"  @input="$emit('input',$event.target.value)"> -->
   
   <!-- 使用model（prop、event）:定义多个事件 -->
    <!-- <input type="checkbox" :checked="value" @change="$emit('change',$event.target.vaule)"> -->
    <select :select="value" @change="selectChange">
      <option value ="volvo">Volvo</option>
      <option value ="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>
<script>
export default{
  inheritAttrs:false,//禁止根元素继承父组件property
  props:['value'],
  //v-model 默认使用 value和input，可以使用model property配置其他事件（prop，event）
  model:{
    prop:'value',
    event:'change'
  },
  data(){
    return{
      // value:''
    }
  },
  methods:{
    selectChange(event){
      console.log(7777,this.value);
      this.$emit('change',event.target.value)
    }
  }
}
</script>