<template>
  <div style="background-color: pink; width: 300px">
    <!-- .sync双向绑定语法糖 -->
    <h5>sync修饰符：</h5>
    <span>{{ notingNum }}</span>
    <button @click="click">add</button>
    <div>{{ "v-bind.sync绑定对象所有属性" + "--" + name + "---" + age }}</div>
  </div>
</template>
<script>
export default {
  name: "syncModifier",
  props: ["notingNum", "name", "age"],
  data() {
    return {};
  },
  methods: {
    //点击按钮notingNum+1
    click() {
      this.$emit("update:notingNum", this.notingNum + 1);
    },
  },
  created() {
    // console.log('created-SyncDefineEvent')
  },
  activated() {
    // console.log('activated-SyncDefineEvent')
  },
  deactivated() {
    // console.log('deactivatedSyncDefineEvent')
  },
};
</script>
