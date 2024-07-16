import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
  baseURL: 'http://localhost:8899',  // 基础URL
  timeout: 5000,  // 请求超时时间
  headers: {
    'Content-Type': 'application/json' // 设置默认的请求头
  }
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做些什么
  return response;
}, error => {
  // 对响应错误做些什么
  return Promise.reject(error);
});

export default instance;
