import axios from "axios";
import { MessageBox, Message } from "element-ui";
// import store from '@/store'
import Cookie from "js-cookie";
import router from "@/router";
// import { getToken } from '@/utils/auth'

//  创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置路径基准地址
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // 延时时间
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 判断cookie有没有token
    if (Cookie.get("successToken")) {
      // 获取token添加到请求头中
      config.headers["token"] = Cookie.get("successToken");
      // ! token数据删除
      // console.log(Cookie.get('successToken'))
    }
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    //     if (store.getters.token) {
    //       config.headers['X-Token'] = getToken()
    //     }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 判断状态码
    if (res.code === 200) {
      // 响应成功时!
      return res;
    } else if (res.code === 2003) {
      // 用户认证失败时!提示信息
      Message.error(res.msg);
      // 删除本地token
      Cookie.remove("successToken");
      // 跳转至登录页面
      router.push("http://10.130.213.28/login");
      return Promise.reject(new Error(res.msg));
    } else if (res.code === 2002 && res.msg === "无数据!") {
      // 判断权限数据获取不到时，退出
      Cookie.remove("authorization");
      Cookie.remove("portalCd");
      Cookie.remove("successToken");
      window.location = "http://10.130.213.28/index";
    } else {
      // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //   confirmButtonText: 'Re-Login',
      //   cancelButtonText: 'Cancel',
      //   type: 'warning'
      // }).then(() => {
      //   store.dispatch('user/resetToken').then(() => {
      //     location.reload()
      //   })
      // })
      // 提示错误信息
      Message.error(res.msg);
      return Promise.reject(res);
    }
  },
  (error) => {
    console.dir("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
export default service;
