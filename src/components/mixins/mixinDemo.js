export default{
  data(){
    return{
      userInfo:'lili',
      tab:'default',//
    }
  },
  methods:{
    getUserInfo(){
      console.log(this.userInfo);
    }
  }
}