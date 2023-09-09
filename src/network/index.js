
import axios from 'axios'
import aes from './aes'

let BaseUrl = ''
if (process.env.NODE_ENV == 'development') {
  BaseUrl = '/api'
} else {
  BaseUrl = ''
}

const instance = axios.create({
  baseURL: BaseUrl, // 接口统一域名
  timeout: 6000, // 设置超时
  withCredentials: true
})

let message = ''
instance.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem('t')

  config.headers.token = token
  if (config.url.indexOf('upload') == -1) {
    let cd = config?.data ? JSON.parse(JSON.stringify(config.data)) : {}
    let cd_enc = aes.Xztt(JSON.stringify(cd));
    config.data = { data: cd_enc }
  }

  return config
}, (error) => {
  Promise.reject(error)
}
)


instance.interceptors.response.use((response) => {
  let resp = aes.XZtt_H(response?.data)
	response.data = JSON.parse(resp)
  console.log('resssssssssssssssssssssss',response.data)

  return response
}, (error) => {

  if (error.response && error.response.status) {

    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '请求错误'
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
    }
    console.log(message + "error : ======================>");
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

 export default instance



