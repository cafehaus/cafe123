<template>
  <div class="page">
    <div
      v-for="(item, index) in webList"
      :key="index"
    >
      <p class="title">{{ item.title }}</p>
      <div class="list">
        <div
          v-for="(itm, idx) in item.webs"
          :key="idx"
          class="card"
          @click="goto(itm.url)"
        >
          <div class="info">
            <img :src="itm.icon || '/logo.svg'" class="img" />
            <span class="name">{{ itm.name }}</span>
          </div>
          <p class="des">{{ itm.des }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      webList: [
        {
          title: '咖啡博客',
          webs: [
            {
              name: 'Perfect Daily Grind',
              url: 'https://perfectdailygrind.com/',
              icon: 'https://perfectdailygrind.com/wp-content/uploads/2020/04/download.png',
              des: 'Perfect Daily Grind is a specialty coffee and coffee news publication. We cover coffee brewing, roasting, production, coffee shops and more.'
            },
            {
              name: 'Barista Hustle',
              url: 'http://www.baristahustle.com',
              icon: 'https://www.baristahustle.com/wp-content/uploads/2018/08/BH-Logo-New-512-1-400x400-300x300.png',
              des: 'The world\'s most advanced coffee information and online Barista training. Join our barista classes & certification courses, and read our free coffee blog.'
            },
            {
              name: 'Roasty Coffee',
              url: 'http://www.roastycoffee.com',
              icon: 'https://www.roastycoffee.com/wp-content/uploads/cropped-roasty-coffee-favicon-65x65.png',
              des: 'Learn how to find, brew and drink coffee so good it would make a hipster cry. Watch the best coffee brewing video tutorials and resources right now.'
            },
            {
              name: 'Daily Coffee News',
              url: 'https://dailycoffeenews.com/',
              icon: 'https://dailycoffeenews.com/wp-content/themes/dailycoffeenews/favicon.ico',
              des: 'Daily Coffee News by Roast magazine provides essential only news and resources for specialty coffee professionals. Daily Coffee News covers coffee news from seed to cup, including stories on coffee origin, imports, exports, logistics, supply chains, sustainability, retail, baristas, roasting and consumer trends.'
            },
            {
              name: 'Fourth Estate Coffee',
              url: 'https://www.fourthestatecoffee.com/',
              icon: 'https://www.fourthestatecoffee.com/wp-content/uploads/2020/06/favicon-lg.png',
              des: 'Welcome to the Fourth Estate Coffee blog. Here you can find what you need to know about coffee. It\'s for the average beverage drinker, experts and baristas.'
            },
            {
              name: 'Coffee Geek',
              url: 'https://www.coffeegeek.com/',
              // icon: 'https://www.coffeegeek.com/wp-content/uploads/2020/12/CGLogo2021_revA1300-500x227.png', // 网站限制了跨域访问
              des: 'A global community and education website for specialty coffee lovers, CoffeeGeek is where you\'ll learn to make coffee and espresso better.'
            },
            {
              name: 'Coffee Review',
              url: 'https://www.coffeereview.com/',
              icon: 'https://www.coffeereview.com/wp-content/uploads/2018/06/cropped-coffee-review-logo-512x512-300x300.webp',
              des: 'Coffee reviews, espresso ratings, informative articles, and coffee blogs by Kenneth Davids and other coffee experts.'
            },
          ]
        },
        {
          title: '咖啡组织',
          webs: [
            {
              name: 'World Coffee Research',
              url: 'https://worldcoffeeresearch.org/',
              icon: 'https://worldcoffeeresearch.org/favicon.ico',
              des: 'World Coffee Research (WCR) is a non-profit agricultural research organization formed by the global coffee industry in 2012 to drive collaborative…'
            },
            {
              name: 'Specialty Coffee Association',
              url: 'https://sca.coffee/',
              icon: 'https://sca.coffee/favicon.ico',
              des: 'The Specialty Coffee Association is a nonprofit, membership-based organization that represents thousands of coffee professionals, from producers to baristas all over the world.'
            },
          ]
        },
        {
          title: '咖啡馆',
          webs: [
            {
              name: 'European Coffee Trip',
              url: 'https://europeancoffeetrip.com',
              icon: 'https://europeancoffeetrip.com/wp-content/uploads/2016/11/cropped-coffee_bean-european-coffee-trip1-32x32.png',
              des: 'European Coffee Trip is an online magazine and a guide featuring Speciality coffee culture in Europe. We create articles, interviews, photos and videos!'
            },
            {
              name: 'Blue Bottle Coffee',
              url: 'http://bluebottlecoffee.com',
              icon: 'https://bluebottlecoffee.com/favicon.ico',
              des: 'Blue Bottle Coffee is a specialty coffee roaster with cafes in LA, SF, NYC, & Japan. Enjoy our freshly roasted coffee, brewers and guides online & in-store.'
            },
            {
              name: 'Counter Culture Coffee',
              url: 'https://counterculturecoffee.com/',
              icon: 'https://cdn.shopifycdn.net/s/files/1/0249/4283/7837/files/CCC_Favicon_32x32.png',
              des: 'Counter Culture Coffee is a specialty coffee roaster sourcing exceptional single-origin and specialty coffee. Fresh-roasted coffee to your doorstep.'
            },
          ]
        },
        {
          title: '有意思的咖啡馆网站',
          webs: [
            {
              name: 'Counter Culture Santafe',
              url: 'https://www.counterculturesantafe.com',
              icon: 'https://www.counterculturesantafe.com/graphics/header/counter-culture-logo.png',
              des: 'Artsy, cash-only hangout offering coffee, tea, sandwiches, soups, pastries & an ample patio.'
            },
          ]
        },
      ],
    }
  },

  methods: {
    goto(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="stylus" scoped>
  .page
    .title
      color var(--vp-c-gray-light-1)
    .list
      display grid
      grid-template-columns 1fr 1fr
      grid-gap 16px
      margin 10px 0 20px
    .card
      border-radius 6px
      padding 10px
      overflow hidden
      border 1px solid var(--vp-c-divider-light-2)
      cursor pointer
      .info
        display flex
        align-items center
        .img
          width 30px
          height 30px
          border-radius 50%
          vertical-align middle
        .name
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          flex 1
          margin-left 10px
          font-size 14px
          font-weight bold
          color var(--vp-c-indigo-soft)
      .des
        font-size 12px
        color var(--vp-c-text-1)
        line-height 2
        display -webkit-box
        overflow hidden
        text-overflow ellipsis
        word-break break-all
        -webkit-box-orient vertical
        -webkit-line-clamp 3
        margin-top 10px
</style>