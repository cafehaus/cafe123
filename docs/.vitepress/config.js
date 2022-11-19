const sidebar = require('./sidebar')

module.exports = {
  title: '咖啡教室',
  description: '咖啡教室主页，分享跟咖啡相关的一切',
  // base: '/cafe123/',
  themeConfig: {
    nav: [
      { text: '微博', link: 'https://weibo.com/u/3503148914' },
      { text: '知乎', link: 'https://www.zhihu.com/people/cafehaus' },
      { text: 'B站', link: 'https://space.bilibili.com/25400077' },
    ],
    sidebar,
  },
}
