<template>
  <div class="about">
    <h1>This is an about page</h1>

    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="cascader"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
        @change="change"
      />
    </van-popup>
  </div>
</template>
<script>
const provinceData = [
  { parentCd: "100000", code: "340000", name: "安徽省" },
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
];
const cityData = [
  { parentCd: "230000", code: "230600", name: "大庆市" },
  { parentCd: "230000", code: "232700", name: "大兴安岭地区" },
  { parentCd: "230000", code: "230100", name: "哈尔滨市" },
  { parentCd: "230000", code: "230400", name: "鹤岗市" },
  { parentCd: "230000", code: "231100", name: "黑河市" },
  { parentCd: "230000", code: "230800", name: "佳木斯市" },
  { parentCd: "230000", code: "230300", name: "鸡西市" },
  { parentCd: "230000", code: "231000", name: "牡丹江市" },
  { parentCd: "230000", code: "230200", name: "齐齐哈尔市" },
  { parentCd: "230000", code: "230900", name: "七台河市" },
  { parentCd: "230000", code: "231200", name: "绥化市" },
  { parentCd: "230000", code: "230500", name: "双鸭山市" },
  { parentCd: "230000", code: "230700", name: "伊春市" },
];
const countyData = [
  { parentCd: "230300", code: "230306", name: "城子河区" },
  { parentCd: "230300", code: "230304", name: "滴道区" },
  { parentCd: "230300", code: "230381", name: "虎林市" },
  { parentCd: "230300", code: "230303", name: "恒山区" },
  { parentCd: "230300", code: "230321", name: "鸡东县" },
  { parentCd: "230300", code: "230302", name: "鸡冠区" },
  { parentCd: "230300", code: "230305", name: "梨树区" },
  { parentCd: "230300", code: "230307", name: "麻山区" },
  { parentCd: "230300", code: "230382", name: "密山市" },
  { parentCd: "230300", code: "230301", name: "市辖区" },
];
console.log(provinceData, cityData, countyData);
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
          children: [],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    change(val, ind) {
      console.log(val, ind);
      if (val.tabIndex == 1 || val.tabIndex == 0) {
        let newOptions = JSON.parse(JSON.stringify(this.options));
        newOptions.forEach((item, index) => {
          if (item.value == val.value) {
            this.$set(this.options[index], "children", [
              { text: "杭州市", value: "330100" },
            ]);
          }
        });
      }
    },
  },
  created() {},
};
</script>
