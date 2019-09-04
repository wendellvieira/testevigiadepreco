import axios from 'axios'

export default async ({ Vue }) => {
  const serverUrl = 'http://localhost:3000'

  const instance = axios.create({
    baseURL: serverUrl
  });  
  Vue.prototype.$axios = instance

  Vue.prototype.$getImage = image => {
    return `${serverUrl}/file/${image}`
  }
}
