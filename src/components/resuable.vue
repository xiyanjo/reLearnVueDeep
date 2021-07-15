<template>
  <div style="background: lightslategrey; position: relative">
    <h5>可复用组件:{{ tab }}</h5>
    <p>{{ userInfo }}</p>
    <!-- 自定义指令 -->
    <input type="text" v-focus:init="7" v-model="value" placeholder="请输入" />
    <!-- 动态指令参数 -->
    <div
      v-posi:[left]="100"
      style="width: 20px; height: 20px; background: pink"
    ></div>
  </div>
</template>
<script>
import mixinDemo from "@/components/mixins/mixinDemo.js";
export default {
  mixins: [mixinDemo],
  directives: {
    posi: {
      bind(el, binding, vnode) {
        el.style.position = "absolute";
        el.style[binding.arg] = binding.value + "px";
      },
    },
    focus: {
      /*
      * el:指令所绑定的元素，可操作dom
      * binding{
          name:指令名称，
          value:指令的绑定值，
          oldValue：指令绑定的前一个值
          expression：字符串形式的指令表达式
          arg：传给指令的参数
        }
      * vnode：Vue 编译生成的虚拟节点
      * oldVnode：上一个虚拟节点
      */
      // 指令绑定到元素
      bind: function (el, binding, vnode) {
        // console.log('bind',el, binding, vnode)
      },
      // 被绑定元素插入父节点（有父节点，不一定已经插入文档）
      inserted: function (el, binding, vnode, oldVnode) {
        // console.log('inserted',el, binding, vnode,oldVnode)
        el.focus();
        el.value = binding.name;
      },
      // // 所有组件的VNode更新时调用（可能发生在子VNode更新前）
      // update:function(el, binding, vnode){
      //   console.log('update',el, binding, vnode)
      // },
      // // 指令所在组件VNode 及子VNode全部更新完
      // componentUpdated:function(el, binding, vnode){
      //   console.log('componentUpdated',el, binding, vnode)
      // },
      // // 指令与元素解除绑定时
      // unbind:function(el, binding, vnode){
      //   console.log('unbind',el, binding, vnode)
      // },
    },
  },
  data() {
    return {
      tab: ["resuable", "dfdf"],
      value: "",
      left: "left",
    };
  },
  created() {
    this.getUserInfo();
  },
};
</script>
