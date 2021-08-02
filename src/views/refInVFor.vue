<template>
  <div>
    <ul ref="ulList">
      <li v-for="item in list" :key="item.id" ref="itemName">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: 22, id: 34 },
        { name: 33, id: 33 },
        { name: 44, id: 44 },
        { name: 55, id: 55 },
      ],
    };
  },
  methods: {
    getRef() {
      console.log("this.refs", this.$refs.itemName);
      this.$refs.itemName[0].style.background = "pink";
      this.$refs.itemName[2].style.background = "pink";
    },
  },
  mounted() {
    this.getRef();
  },
};
</script>
