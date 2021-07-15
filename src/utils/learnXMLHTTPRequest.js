function sendAjax() {
  var formData = new FormData();
  formData.append("username", "lili");
  formData.append("age", "17");

  var xhr = new XMLHttpRequest();
  xhr.timeout = 3000;
  xhr.responseType = "text";
  xhr.open("post", "./server", true);

  xhr.onload = function (e) {
    if (this.status == 200 || this.status == 304) {
      console.log(333);
    }
  };
  xhr.ontimeout = function (e) {};
  xhr.onerror = function (e) {};
  xhr.upload.onprogress = function (e) {};

  xhr.send(formData);
}
