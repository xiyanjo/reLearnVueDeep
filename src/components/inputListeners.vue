<template>
  <div style="background: lightblue">
    <h5>
      在组件的根元素上绑定事件： 1 普通元素直接 .native 2 input $listeners
      将所有的事件监听器指向特定组件 和input相同的attribute都可以工作
    </h5>
    <label for="">
      点击label，input focus
      <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
    </label>
  </div>
</template>
<script>
export default {
  name: "inputListeners",
  inheritAttrs: false, //禁止根元素继承父组件property
  props: ["value"],
  data() {
    return {
      // value:''
    };
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
          // focus:function(event){
          //   vm.$emit('focus',event.target.value)
          // },
          // change:function(e){
          //   vm.$emit('change',event.target.value)
          // }
        }
      );
    },
  },
  methods: {},
};
</script>
