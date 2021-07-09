import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  responseType:'blob'//下载文件时设置响应类型
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 处理文件下载开始
    if (res.size > 0) {
      let attrs = response.headers['content-disposition'].split(';');//一般存储文件名称信息
      // 获取文件名
      let fileName = ''
      // 不用管fileName在第几个位置，只要=前面是fileName,就取=后面的值
      for (let i = 0, l = attrs.length; i < l; i++) {
        let temp = attrs[i].split('=')
        if (temp.length > 1 && temp[0] === 'fileName') {
          fileName = temp[1]
          break
        }
      }
      fileName = decodeURIComponent(fileName)
      let type = response.headers['content-type'].split(';')[0];// 获取数据类型
      let blob = new Blob([res], { type: type })
      const a = document.createElement('a')
      const blobUrl = window.URL.createObjectURL(blob);// 创建URL
      a.download = fileName
      a.href = blobUrl
      document.body.appendChild(a)
      a.click();// 下载文件
      // 释放内存
      URL.revokeObjectURL(blobUrl)
      document.body.removeChild(a)
    } else {
      // 提示错误信息
      Message.error(下载失败)
      return Promise.reject(res)
    }
    // 处理文件下载结束
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
