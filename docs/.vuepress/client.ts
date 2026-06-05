import { defineClientConfig } from 'vuepress/client'
import './theme/styles/index.css'
// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app, router }) {
    router.afterEach((to, from) => {
      if (typeof window !== "undefined") {
        const topath = localStorage.getItem('to.path');
        if (to.fullPath === '/' && from.fullPath === '/' && topath && topath !== '/') {
          router.push({path: topath});
        } else {
          localStorage.setItem('to.path', to.fullPath);
        }
      }
    });
  },
})