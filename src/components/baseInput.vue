<template>
  <div>
    <label for="label">baseInput组件自定义事件:
    <!-- 在组建的根元素上监听一个原生事件 -->
       <slot></slot>
      {{checked}}
      <input type="checkbox"  v-bind="$attrs"
      :checked="checked" v-on="inputListeners">
    </label>
    
    <!-- 一个简单的input组件v-model -->
    <!-- <input type="checkbox" :value="value" @input="input"> -->

  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: ['checked'],
    model: {
      prop: 'checked',
      event: 'change'
    },
    data() {
      return {

      }
    },
    computed:{
      inputListeners:function(){
        var vm = this;
        
        return Object.assign({},//将所有对象合并为一个新对象
        this.$listeners,//从父级添加所有的监听器
        {//添加自定义监听器、覆写一些监听器
          // input:function(event){//v-model
          //   vm.$emit('input',event.target.value)
          // },
          change:function(event){
            vm.$emit('change',event.target.checked)
          }
        })
      }
    },
    methods: {
      input($event) {
        this.$emit('input', $event.target.value)
      },
    },
    created() {
    }
  }
</script>
<style>
</style>