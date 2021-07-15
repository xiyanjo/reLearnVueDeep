<template>
  <div>
    <ul style="width: 200px">
      <li
        style="border: 1px solid gray; margin: 5px"
        v-for="(item, index) in menus"
        :key="index"
        @click="$router.push(item.path)"
      >
        {{ item.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [{ path: "/resuable", name: "可复用&组件" }],
      level: 1,
    };
  },
  render: function (createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
};
</script>
