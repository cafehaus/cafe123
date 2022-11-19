const fs = require('node:fs')
const path = require('node:path')

// 自动读取 note 文件夹目录生成侧边栏菜单
let sidebar = {}
const menuList = fs.readdirSync(path.join(__dirname, '../pages'))

menuList.map(m => {
  let subDir = fs.readdirSync(path.join(__dirname, '../pages/' + m))
  let curDir = `/pages/${m}/`

  let items = []
  subDir.map(n => {
    items.push({
      text: n,
      link: `/pages/${m}/${n}/index`
    })
  })

  if (!sidebar[curDir]) sidebar[curDir] = [{
    text: m,
    items: []
  }]
  sidebar[curDir][0].items = items
})

module.exports =  sidebar