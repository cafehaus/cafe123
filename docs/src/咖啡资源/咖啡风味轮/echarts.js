// 引入 echarts 核心模块 和 Canvas 渲染器
import * as echarts from 'echarts/core'

// 渲染器
// import { CanvasRenderer } from 'echarts/renderers'
import renderers from 'echarts/renderers'
const { CanvasRenderer } = renderers // 不这样引用 build 时会报错

// 引入图表
import { SunburstChart } from 'echarts/charts'

// 引入图表里用到的组件
import { TitleComponent } from 'echarts/components'

// 注册必须的组件
echarts.use([
  TitleComponent,
  CanvasRenderer,
  SunburstChart
])

export default echarts