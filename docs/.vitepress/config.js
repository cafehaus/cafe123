const sidebar = require('./sidebar')

module.exports = {
  title: '咖啡教室',
  titleTemplate: '分享跟咖啡相关的一切',
  description: '咖啡教室主页，咖啡教程、咖啡拉花、咖啡资讯、咖啡文化、咖啡馆、咖啡师、手冲咖啡、鸡尾酒、饮品...在咖啡教室，有关于咖啡的各种内容',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  sirDir: 'docs/src',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '微博', link: 'https://weibo.com/u/3503148914' },
      { text: '知乎', link: 'https://www.zhihu.com/people/cafehaus' },
      { text: 'B站', link: 'https://space.bilibili.com/25400077' },
      { text: '公众号', link: 'https://mp.weixin.qq.com/s/VlgEKvGjd70VNcog0x-slw' },
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
