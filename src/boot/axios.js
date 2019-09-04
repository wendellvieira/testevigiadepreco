import axios from 'axios'

export default async ({ Vue }) => {
  let instance = axios.create({
    baseURL: 'http://localhost:3000'
  });
  
  Vue.prototype.$axios = axios
}
