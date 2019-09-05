import axios from 'axios'

export const serverUrl = 'http://localhost:3000'

export default async ({ Vue }) => {  

  const instance = axios.create({
    baseURL: serverUrl
  });  
  Vue.prototype.$axios = instance

  Vue.prototype.$getImage = image => {
    return `${serverUrl}/file/${image}`
  }
}
