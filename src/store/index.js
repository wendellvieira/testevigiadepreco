import Vue from 'vue'
import Vuex from 'vuex'

import GERENCIAR_POSTS from 'pages/gerenciar-posts/vuex'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      GERENCIAR_POSTS
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
