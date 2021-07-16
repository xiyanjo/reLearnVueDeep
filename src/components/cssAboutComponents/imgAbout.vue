<template>
  <div>
    <h5>图片圆角</h5>
    <div class="imgBox">
      <img class="centerRadio" :src="imgUrl" alt="" />
      <span>描述</span>
    </div>
    <!-- <div class="con" contenteditable="true"></div> -->
    <!-- <div>
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
    </div> -->
    <!-- <template> -->
    <!-- <h5>元素上下居中一</h5>
      <div class="outBox">
        <div class="inner innerBox"></div>
      </div> -->
    <!-- </template> -->

    <!-- <template>
      <h5>清除浮动的两种方法</h5>
      <div class="clearFloat">
        <div style="float: left">float: left</div>
        <div style="float: right">float: right</div>
        <div v-if="false" style="clear: both">方法一</div>
      </div>
    </template> -->

    <!-- <template>
      <div style="width: 400px; height: 400px; background: #ccc">
        <h6>拖拽</h6>
        <div
          style="width: 30px; height: 30px; background: pink"
          draggable="true"
          @dragstart="dragstart"
          @dragover="dragover"
          @drop="drop"
          @dragleave="dragleave"
          @drag="drag"
          @dragend="dragend"
        ></div>
      </div>
    </template> -->
    <!-- <template>
      <h6>inline-block缝隙<h6>
      <div>
        <span
          style="
            display: inline-block;
            width: 100px;
            padding: 20px;
            background: goldenrod;
          "
          >缝隙</span
        >
        <span
          style="
            display: inline-block;
            width: 100px;
            padding: 20px;
            background: goldenrod;
          "
          >缝隙</span
        >
        <span
          style="
            display: inline-block;
            width: 100px;
            padding: 20px;
            background: goldenrod;
          "
          >缝隙</span
        >
        <span
          style="
            display: inline-block;
            width: 100px;
            padding: 20px;
            background: goldenrod;
          "
          >缝隙</span
        >
      </div>
    </template> -->
    <!-- <template>
      <h6>flex布局</h6>
    </template> -->
    <template>
      <h6>BFC应用</h6>
      <section>
        <ul style="overflow: auto">
          <li
            style="float: left; width: 100px; height: 100px; background: pink"
          ></li>
        </ul>
        <span>外部文案</span>
      </section>
      <section>
        <h6>
          浮动元素脱离正常流，正常流与浮动元素重叠,给后面的块级元素设置bfc
        </h6>
        <span style="float: left">浮动元素</span>
        <span>dkjfdkfj</span>
        <!-- <div
          style="
            display: inline-block;
            width: 100px;
            height: 100px;
            background: pink;
          "
        ></div> -->
      </section>
      <section>
        <h6>父元素没有高度，子元素浮动不能撑开父元素，给父元素设置bfc</h6>
        <ul style="background: lightpink; display: inline-block; width: 100%">
          <li style="float: left; height: 30px">2222</li>
        </ul>
      </section>
      <section>
        <div style="column-count: 3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </section>
    </template>
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
  methods: {
    dragstart(e) {
      console.log(999, e);
    },
    dragenter(e) {
      console.log("dragenter", e);
    },
    dragover(e) {
      console.log("dragover", e);
    },
    drop(e) {
      console.log("drop", e);
    },
    dragleave(e) {
      console.log("dragleave", e);
    },
    drag(e) {
      console.log("drag", e);
    },
    dragend(e) {
      console.log("dragend", e);
    },
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
/* 元素上下居中 */
.outBox {
  width: 70%;
  height: 200px;
  border: 1px solid pink;
  position: relative;
  .inner {
    width: 100px;
    height: 100px;
    border: 1px solid pink;
  }
  .innerBox {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .innerBox2 {
  }
}

/* .clearFloat::after {
  clear: both;
  zoom: 1;
} */
.clearFloat {
  border: 1px solid pink;
  /* 清除浮动的方法二 */
  &:after {
    clear: both;
    content: "";
    display: block;
  }
}
</style>
