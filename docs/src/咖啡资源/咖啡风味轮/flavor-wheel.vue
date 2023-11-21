<template>
  <div class="flavor-wheel">
    <div class="action">
      <span class="btn" @click="onChange">切换为{{ type === '1' ? '英文' : '中文' }}版</span>
    </div>
    <div class="echart" id="echart"></div>
  </div>
</template>

<script>
import echarts from './echarts'
import option from './option.js' // 中文版数据
import optionEn from './optionEn.js' // 英文版数据

export default {
  data() {
    return {
      chart: null,
      type: '1',
    }
  },

  mounted() {
    this.initChart()
  },

  methods: {
    initChart() {
      const dom = document.getElementById('echart')
      this.chart = echarts.init(dom)
      this.chart.setOption(option)
    },

    onChange() {
      let t = this.type
      let type = t === '1' ? '2' : '1'
      let opt = type === '1' ? option : optionEn

      this.chart.setOption(opt)
      this.type = type
    }
  },
}
</script>

<style lang="stylus" scoped>
.flavor-wheel
  .action
    text-align center
    .btn
      font-size 14px
      font-weight bold
      color #57bc78
      cursor pointer
  .echart
    width @height
    height 80vh
</style>
