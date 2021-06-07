<template>
  <div style="background-color: #ccc;width: 300px;">
    <h4>slot</h4>
    <ul>
      <li v-for="todo in todos" :key="todo.id" >
        <!-- 插槽prop：子组件传给父组件的prop -->
         <slot :todo="todo">{{todo.text}}</slot>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:['todos'],
    data(){
      return{
       name:'slot'
       

      }
    },
    methods:{
    }
  }
</script>