const sidebar = require('./sidebar')

module.exports = {
  title: '咖啡教室',
  description: '咖啡教室主页，分享跟咖啡相关的一切',
  // base: '/cafe123/',
  sirDir: 'docs/src',
  lastUpdated: true,
  // lastUpdatedText: '最近更新',
  themeConfig: {
    nav: [
      { text: '微博', link: 'https://weibo.com/u/3503148914' },
      { text: '知乎', link: 'https://www.zhihu.com/people/cafehaus' },
      { text: 'B站', link: 'https://space.bilibili.com/25400077' },
    ],
    sidebar,
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText: '最近更新',
    footer: {
      message: 'Hello coffee.',
      copyright: 'Copyright © 2014-2023 cafehaus'
    }
  },
}
