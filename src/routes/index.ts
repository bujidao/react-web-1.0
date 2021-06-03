const Layout = '@/layouts/index'

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/user',
        component: '@/pages/user'
      },
      {
        path: '/about',
        component: '@/pages/about'
      },
      {
        path: '/home',
        component: '@/pages/home'
      }
    ]
  }
]

export default routes
