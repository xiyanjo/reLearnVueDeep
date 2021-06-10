<template>
  <div style="background: lightblue;">
    <h4>程序化的事件监听器</h4>
    <button @click="$router.push('/')">主页</button>

  </div>
</template>
<script>
  export default {
    name: 'borderSituation',
    props: ['value'],
    data() {
      return {
        // value:''
        borderData: {
          name: 'fromBorder',

        }
      }
    },
    computed: {

    },
    methods: {

    },
    created() {
      this.$once('hook:beforeDestroy', function () {
        console.log('hook:beforeDestroy')
      })
    },


    active() {
      console.log('active')
    },
    updated() {
      console.log('updated')
    },
    //  v-if切换组件及路由跳转都会触发 beforeDestroy和destroyed
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroyed() {
      console.log('destroyed')
    },

  }
</script>