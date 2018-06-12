import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // request timeout
})

service.interceptors.request.use(config => {

  console.log('请求', config)

  return config

}, error => {

  console.log(error)

  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(

  response => {

    console.log('返回', response)

    const { resultCode } = response.data

    if (resultCode == '0') {

      return response.data
    }

    return Promise.reject('错误')
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  })

export default service
