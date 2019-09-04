import axios from 'axios'

export default async ({ Vue }) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // transformRequest: data => {
    //   const formData = new FormData
    //   formData.append('teste', 'teste')
    //   return formData
    // }
  });
  
  Vue.prototype.$axios = instance
}
