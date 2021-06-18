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

    <template>
      <!-- native修饰符可以绑定组件根元素一个原生事件 -->
      <!-- update:myPropName的触发事件，标明来源 -->
      <sync-modifier :notingNum="notingNum" @click.native="alert('888')" @update:notingNum="updateNoting">
      </sync-modifier>

      <!-- .sync  双向绑定语法糖  功能同上-->
      <!--v-bind.sync="noSize" noSize 作为独立的porp传进去 -->
      <sync-modifier :notingNum.sync="notingNum" v-bind.sync="noSize">
      </sync-modifier>
    </template>



    <!-- #[dynamicSlotName]="slotProps"  语法糖-->
    <others-slot :todos="todos" v-slot="slotProps">
      <span v-if="slotProps.todo.id==1">*</span>
      {{slotProps.todo.text}}
    </others-slot>


    <template>
      <div>
        <span style="margin-right: 20px;" v-for="(item,index) in components" :key="index"
          @click="currentComponent = item.name">{{item.name}}</span>
      </div>
      <!-- 失活的组件将被缓存 -->
      <!-- include 缓存的组件  exclude 不缓存的组件 -->
      <keep-alive exclude="syncDefineEvent">
        <!-- 切换时，vue会创建新的currentTabComponent实例，组件created会执行 -->
        <component :is="currentComponent" v-bind.sync="propValiteData"></component>
        <!-- prop-demo组件入参 v-bind.sync="propValiteData -->
      </keep-alive>
    </template>

    <custom-input v-model="customDes" @input="focus" @change="customChange" />

    <input-listeners v-model="customDes" @focus="focus" @change="customChange" />
    <!-- 依赖注入 -->
    <provide-inject></provide-inject>
    <!-- 边界情况 -->
    <border-situation inline-template v-if="showBorderSituation">
      <div>
        <p> {{customDes}}无法使用父组件的属性？？</p>
        <div> name:{{borderData.name}}</div>
      </div>
    </border-situation> 
    <button @click="showBorderSituation=!showBorderSituation">切换事件监听</button>
    <!-- <button @click="$router.push('/borderSituation')">切换事件监听</button> -->


    <resuable  ></resuable>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  import syncModifier from "@/components/syncModifier.vue";
  import othersSlot from "@/components/othersSlot.vue";
  import {getFoo,inheritTypes,noConstrusctFInherit} from '@/utils/prototype'
  import * as m from "@/utils/even.js"
  export default {
    name: "Home",
    components: {
      HelloWorld, syncModifier, othersSlot,
      'propDemo': () => import("@/components/propDemo.vue"),
      'customInput': () => import("@/components/customInput.vue"),
      'inputListeners': () => import("@/components/inputListeners.vue"),
      'border-situation': () => import("@/components/borderSituation.vue"),
      'provide-inject': () => import("@/components/provideInject.vue"),
      'resuable': () => import("@/components/resuable.vue"),

    },
    provide() {//很多后代组件使用的情况， 注入属性或方法，中inject来使用，非响应
      return {
        name: function () {
          console.log('this', this)//这里的this为函数执行的环境，子组件中没有num property
          return 'provideFa'
        },
        text: '99999'
      }
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
        checkbox: '',
        notingNum: 0,
        noSize: {
          name: 'aa',
          age: 18
        },
        dynamicSlotName: 'default',
        todos: [{
          id: 1,
          text: '泰迪'
        }, {
          id: 2,
          text: '哈士奇'
        }],
        currentComponent: 'othersSlot',
        components: [
          { name: 'syncDefineEvent' },
          { name: 'othersSlot' },
          { name: 'propDemo' },
        ],
        propValiteData: {
          propA: 2,
          propB: '',
          propC: '',
          propD: '成绩的咖啡机',
          propF: 'ui'
        },
        customDes: 'customDes',
        showBorderSituation: true,
      }
    },
    methods: {
      nativeClick() {
        console.log(8888, this.checkbox)
      },
      alert(code) {
        // this.num=8;
        console.log(code)
      },
      updateNoting(event) {
        this.notingNum = event;
        console.log(999, event)
      },
      focus(e) {
        console.log('homeFocus', e)
      },
      customChange(e) {
        console.log('customChange', e.target.value)

      }
    },
    created(){
      // getFoo();
      // inheritTypes();
      // noConstrusctFInherit();
      m.even(10);
      console.log(' m.counter', m.counter)
    },
    beforeDestory() {
      console.log(5555)
    },
    destroyed() {
      console.log(6666)
    },
  };
</script>