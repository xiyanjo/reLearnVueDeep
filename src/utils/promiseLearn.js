function basePro() {
  // function fakeAjax(url) {
  //   return new Promise(function (resolve, reject) {
  //     // setTimeouts are for effect, typically we would handle XHR
  //     if (!url) {
  //       return setTimeout(reject, 1000);
  //     }
  //     return setTimeout(resolve, 1000);
  //   });
  // }

  // // no url, promise rejected
  // fakeAjax().then(
  //   function () {
  //     console.log("success");
  //   },
  //   function () {
  //     console.log("fail");
  //   }
  // );
  function promiseFn(url) {
    return new Promise(function (resolve, reject) {
      if (url) {
        resolve();
      }
      reject();
    });
  }
  promiseFn("url").then(
    function () {
      console.log("url");
    },
    function () {
      console.log("noUrl");
    }
  );
}
function entrancePromise() {
  basePro();
}
export { entrancePromise };
