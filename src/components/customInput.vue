<template>
  <div style="background: lightgray;">
    <!-- 一个简单得v-model：使用value和input -->
     <label for="checkbox">
      组件上的v-model: 可以更改event类型，在父组件上只能访问这里绑定的事件
      <input type="text" :value="value"  @input="$emit('input',$event.target.value)">
    </label>

  </div>
</template>
<script>
  export default {
    props: ['value'],
    //v-model 默认使用 value和input，可以使用model property配置其他事件（prop，event）
    model: {
      prop: 'value',
      event: 'input'//event 可以是change等
    },
    data() {
      return {
      }
    },
    methods: {
      // selectChange(event) {
      //   console.log(7777, this.value);
      //   this.$emit('change', event.target.value)
      // }
    }
  }
</script>