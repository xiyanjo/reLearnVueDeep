<template>
  <div class="left-menu">
    <div
      style="
        width: 200px;
        height: 100%;
        background: #ccc;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
      "
    >
      <ul>
        <li
          style="margin: 5px; padding: 10px"
          v-for="(item, index) in menus"
          :key="index"
          @click="$router.push(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- <transition name="slide"> -->
    <router-view style="margin-left: 200px" />
    <!-- </transition> -->
    <router-view name="toTop"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { path: "/", name: "home" },
        { path: "/resuable/990", name: "可复用&组件/resuable/:id" },
        { path: "/about", name: "About" },
        { path: "/borderSituation", name: "borderSituation" },
        // { path: "/resuable/", name: "resuable" }, //不传id无法打开页面
        { path: "/cssAbout", name: "cssAbout" },
        { path: "/refInVFor", name: "refInVFor" },
      ],
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
<style scoped lang="less">
.left-menu {
  overflow: auto;
  height: 100%;
}
</style>
