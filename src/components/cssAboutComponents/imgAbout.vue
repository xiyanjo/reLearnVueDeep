<template>
  <div>
    <h5>图片圆角</h5>
    <div class="imgBox">
      <img class="centerRadio" :src="imgUrl" alt="" />
      <span>描述</span>
    </div>
    <!-- <div class="con" contenteditable="true"></div> -->
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="100" height="50" fill="red">
          <animate
            attributeType="XML"
            attributeName="x"
            from="50"
            to="400"
            dur="5s"
            fill="freeze"
          ></animate>
        </rect>
        <rect x="50" y="150" width="100" height="50" fill="green">
          <animate
            attributeType="XML"
            attributeName="x"
            from="50"
            by="400"
            dur="5s"
            fill="freeze"
          ></animate>
        </rect>
        <rect x="50" y="250" width="100" height="50" fill="blue">
          <animate
            attributeType="XML"
            attributeName="x"
            values="50;450;50"
            dur="10s"
          ></animate>
        </rect>
        <rect x="50" y="350" width="100" height="50" fill="orange">
          <animate
            attributeType="XML"
            attributeName="x"
            dur="10s"
            values="50;450;50"
            calcMode="spline"
            keySplines=".5 0 .5 1; 0 0 1 1"
            fill="freeze"
          ></animate>
        </rect>
        <rect x="50" y="450" width="100" height="50" fill="black">
          <animate
            attributeType="XML"
            attributeName="x"
            from="50"
            by="400"
            dur="5s"
            calcMode="spline"
            keySplines=".5 0 .5 1; 0 0 1 1"
            fill="freeze"
          ></animate>
        </rect>
      </svg>
    </div>
  </div>
</template>
<script>
import free from "@/assets/free.jpg";
export default {
  name: "imgAbout",
  data() {
    return {
      imgUrl: free,
    };
  },
};
</script>
<style scoped lang="less">
.imgBox {
  width: 300px;
  height: 300px;
  line-height: 300px;
  background: lightsalmon;
  .centerRadio {
    width: 50%;
    height: auto;
    border-radius: 8px;
    vertical-align: middle;
  }
}

.con {
  width: 400px;
  height: 400px;
  border: 1px solid #4ec844;
  outline: none;
}
.con:empty:before {
  content: "说点啥好呢？";
  color: gray;
}
.con:focus:before {
  content: none;
}
</style>
