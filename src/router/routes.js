
const routes = [
  {
    path: '/',
    component: () => import('layouts/app'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: 'gerenciar-posts', component: () => import('pages/gerenciar-posts') },
      { path: 'editar-post/:id', component: () => import('pages/editar-post') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
