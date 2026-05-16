import { defineClientConfig } from 'vuepress/client'
import './theme/styles/index.css'
// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app, router }) {
    router.afterEach((to) => {
      if (typeof window !== "undefined") {
        localStorage.setItem('to.path', to.fullPath);
      }
    });
    router.beforeEach((to, from, next) => {
      if (typeof window !== "undefined") {
        const topath = localStorage.getItem('to.path');
        if (to.fullPath === '/' && from.fullPath === '/' && topath) {
          router.push(topath);
        }
      }
      next();
    });
  },
})