<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <input type="search" name="date" placeholder="请输入" /> -->

    <template v-if="loginType === true">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </template>
    <button @click="loginType=!loginType">toggle</button>


    <template>
      <h5>事件修饰符{{num}}</h5>
      <div @click="num-=5">
        <div @click="num+=3">
          <button @click.stop="num+=6">name</button>
        </div>
      </div>
    </template>
    <input v-model.number="age" type="number" placeholder="age">
    <input v-model="age" type="number" placeholder="age">


    <blog-post v-for="post in posts" :key="post.id" :post="post"></blog-post>
    
    <!-- input组件的v-model， -->
    <!-- $listeners将所有的事件监听器指向组件特定子元素 -->
    <base-checkbox v-model="checkbox"   @change="nativeClick" >
      <span>好好学习</span>
    </base-checkbox>
    
    <template>
      <!-- native修饰符可以绑定组件根元素一个原生事件 -->
      <!-- update:myPropName的触发事件，标明来源 -->
      <sync-define-event  :notingNum="notingNum" @click.native="alert('888')"
      @update:notingNum="updateNoting"></sync-define-event>

      <!-- .sync  双向绑定语法糖  功能同上-->
      <!--v-bind.sync="noSize" noSize 作为独立的porp传进去 -->
      <sync-define-event  :notingNum.sync="notingNum" v-bind.sync="noSize">
      </sync-define-event>
    </template>

   

    <!-- #[dynamicSlotName]="slotProps"  语法糖-->
    <others-slot  :todos="todos"  v-slot="slotProps">
      <span v-if="slotProps.todo.id==1">*</span> 
      {{slotProps.todo.text}}
    </others-slot>


    <template>
      <div>
        <span  style="margin-right: 20px;" v-for="(item,index) in components" :key="index" 
        @click="currentComponent = item.name"
        >{{item.name}}</span>
      </div>
      <!-- 失活的组件将被缓存 -->
      <!-- include 缓存的组件  exclude 不缓存的组件 -->
      <keep-alive exclude="syncDefineEvent">
       <!-- 切换时，vue会创建新的currentTabComponent实例，组件created会执行 -->
        <component :is="currentComponent"  v-bind.sync="propValiteData" ></component>
        <!-- prop-demo组件入参 v-bind.sync="propValiteData -->
      </keep-alive>
    </template>

      {{tenYearLater}}
    <custom-input v-model="customDes"></custom-input> 
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import baseCheckbox from "@/components/baseInput.vue";
  import syncDefineEvent from "@/components/syncDefineEvent.vue";
  import othersSlot from "@/components/othersSlot.vue";
  import propDemo from "@/components/propDemo.vue";
  

  import customInput from "@/components/customInput.vue";

  export default {
    name: "Home",
    components: {
      HelloWorld, baseCheckbox,syncDefineEvent,othersSlot,
      propDemo,customInput
    },
    data() {
      return {       
        tenYearLater: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
        loginType: false,
        num: 0,
        age: '',
        posts: [
          { 'title': 'o1', 'content': 'sjfkdj' },
          { 'title': 'o1', 'content': 'sjfkdj' },
        ],
        form: {
          placeholder: '请输入',
          label: "姓名",
          value: ''
        },
        checkbox:'',
        notingNum:0,
        noSize:{
          name:'aa',
          age:18
        },
        dynamicSlotName:'default',
        todos:[{
          id:1,
          text:'泰迪'
        },{
          id:2,
          text:'哈士奇'
        }],
        currentComponent:'othersSlot',
        components:[
          {name:'syncDefineEvent'},
          {name:'othersSlot'},
          {name:'baseCheckbox'},
          {name:'propDemo'},
        ],
        propValiteData:{
          propA:2,
          propB:'',
          propC:'',
          propD:'成绩的咖啡机',
          propF:'ui'
        },
        customDes:'customDes'
      }
    },
    methods:{
      nativeClick(){
        console.log(8888,this.checkbox)
      },
      alert(code){
        // this.num=8;
        console.log(code)
      },
      updateNoting(event){
        this.notingNum = event;
        console.log(999,event)
      }
    }
  };
</script>