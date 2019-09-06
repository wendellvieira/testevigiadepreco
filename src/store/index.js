import Vue from 'vue'
import Vuex from 'vuex'

import GERENCIAR_POSTS from 'pages/gerenciar-posts/vuex'
import DASHBOARD from 'pages/dashboard/vuex'
import LAYOUTAPP from 'layouts/app/vuex' 

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      GERENCIAR_POSTS,
      DASHBOARD,
      LAYOUTAPP
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
