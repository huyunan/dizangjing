/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '地藏经全文', link: '/' },
  { text: '地藏经原文', link: '/notes/source/1.忉利天宫神通品第一.md', activeMatch: '^/source/' },
])
