const Layout = '@/layouts/index';

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/user',
        component: '@/pages/user',
        meta: {
          title: '用户中心',
        },
      },
      {
        path: '/about',
        component: '@/pages/about',
        meta: {
          title: '关于我们',
        },
      },
      {
        path: '/home',
        component: '@/pages/home',
        meta: {
          title: '首页',
        },
      },
      {
        path: '/list',
        component: '@/pages/list',
        meta: {
          title: '列表测试',
        },
      },
      {
        component: './404',
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default routes;
