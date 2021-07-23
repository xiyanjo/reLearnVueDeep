function pushState() {
  let i = 1;
  let myinterval;
  myinterval = setInterval(function () {
    if (i < 10) {
      i++;
      history.pushState({ conunt: i }, "最新状态", "?state=" + i);
    } else {
      clearInterval(myinterval);
    }
    console.log(i);
  }, 300);
}
//history.back和history.forward触发该事件
window.onpopstate = function (e) {
  console.log("onpopstate", e.state);
};
function learnFileReader() {
  if (window.FileReader) {
    var fr = new FileReader();
    // add your code here
  }
}

function historyApi() {
  pushState();
}
export default historyApi;
