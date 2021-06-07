import { defineConfig } from 'umi';
import routes from '../src/routes/index';
import settings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  base: '/',
  title: settings.title,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  ssr: {
    devServerRender: false,
  },
  fastRefresh: {},
});
