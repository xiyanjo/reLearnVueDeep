let currentPosition, timer;
let _this = this;
let step = "";
timer = setInterval(function () {
  currentPosition = _this.$refs.box.scrollTop;
  step = _this.$refs.box.scrollTop / 50;
  currentPosition -= step;

  // 大于400，滚到400再小滚
  if (currentPosition > 300) {
    _this.$refs.box.scrollTop = 300;
  } else if (currentPosition > 0) {
    _this.$refs.box.scrollTop = currentPosition;
  } else {
    _this.$refs.box.scrollTop = 0;
    clearInterval(timer);
  }
}, 1);
