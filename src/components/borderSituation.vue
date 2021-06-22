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
    // beforeCreate(){
    //   console.log('2','beforeCreate')
    // },
    // created() {
    //   console.log('2','created')
    //   this.$once('hook:beforeDestroy', function () {
    //     console.log('hook:beforeDestroy')
    //   })
    // },
    // mounted(){
    //   console.log('2','mounted')
    // },
    // active() {
    //   console.log('2','active')
    // },
    // updated() {
    //   console.log('updated')
    // },
    // //  v-if切换组件及路由跳转都会触发 beforeDestroy和destroyed
    // beforeDestroy() {
    //   console.log('beforeDestroy')
    // },
    // destroyed() {
    //   console.log('destroyed')
    // },

  }
</script>