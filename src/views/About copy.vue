<template>
  <div class="about">
    <h1>This is an about page</h1>

    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        :field-names="fieldNames"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

    <van-picker
      show-toolbar
      :columns="areas"
      :field-names="fieldNames"
      @change="areaChange"
      @confirm="onConfirmArea"
      @cancel="showArea = false"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],

      cities: [],

      showArea: false,
      // areas1: [
      //   // 第一列
      //   {
      //     values: ['周一', '周二', '周三', '周四', '周五'],
      //     defaultIndex: 2,
      //   },
      //   // 第二列
      //   {
      //     values: ['上午', '下午', '晚上'],
      //     defaultIndex: 1,
      //   },
      // ],
      areas: [],
      fieldNames: {
        text: "name",
        value: "code",
        children: "items",
      },
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },

    getProvices() {
      let res = {
        msg: "成功",
        code: "0",
        data: [
          { parentCd: "100000", value: "340000", text: "安徽省" },
          { parentCd: "100000", code: "820000", name: "澳门特别行政区" },
          { parentCd: "100000", code: "110000", name: "北京市" },
          { parentCd: "100000", code: "350000", name: "福建省" },
          { parentCd: "100000", code: "440000", name: "广东省" },
          { parentCd: "100000", code: "620000", name: "甘肃省" },
          { parentCd: "100000", code: "450000", name: "广西壮族自治区" },
          { parentCd: "100000", code: "520000", name: "贵州省" },
          { parentCd: "100000", code: "130000", name: "河北省" },
          { parentCd: "100000", code: "420000", name: "湖北省" },
          { parentCd: "100000", code: "230000", name: "黑龙江省" },
          { parentCd: "100000", code: "410000", name: "河南省" },
          { parentCd: "100000", code: "430000", name: "湖南省" },
          { parentCd: "100000", code: "460000", name: "海南省" },
          { parentCd: "100000", code: "220000", name: "吉林省" },
          { parentCd: "100000", code: "320000", name: "江苏省" },
          { parentCd: "100000", code: "360000", name: "江西省" },
          { parentCd: "100000", code: "210000", name: "辽宁省" },
          { parentCd: "100000", code: "150000", name: "内蒙古自治区" },
          { parentCd: "100000", code: "640000", name: "宁夏回族自治区" },
          { parentCd: "100000", code: "630000", name: "青海省" },
          { parentCd: "100000", code: "510000", name: "四川省" },
          { parentCd: "100000", code: "370000", name: "山东省" },
          { parentCd: "100000", code: "310000", name: "上海市" },
          { parentCd: "100000", code: "140000", name: "山西省" },
          { parentCd: "100000", code: "610000", name: "陕西省" },
          { parentCd: "100000", code: "120000", name: "天津市" },
          { parentCd: "100000", code: "710000", name: "台湾省" },
          { parentCd: "100000", code: "540000", name: "西藏自治区" },
          { parentCd: "100000", code: "810000", name: "香港特别行政区" },
          { parentCd: "100000", code: "650000", name: "新疆维吾尔自治区" },
          { parentCd: "100000", code: "530000", name: "云南省" },
          { parentCd: "100000", code: "330000", name: "浙江省" },
          { parentCd: "100000", code: "500000", name: "重庆市" },
        ],
        throwable: null,
        desensitized: null,
        page: null,
        convertCode: null,
      };
      this.cities = res.data;
      this.areas = [{ values: this.cities }, { values: this.cities["浙江"] }];
      console.log("ares", this.areas);
    },

    showAreaPicker() {
      this.showArea = true;
    },
    areaChange(picker, val, index) {
      console.log("areasChange", val, index);
      picker.setColumnValues(1, this.cities[val[0]]);
    },
    onConfirmArea() {},
  },
  created() {
    this.getProvices();
  },
};
</script>

