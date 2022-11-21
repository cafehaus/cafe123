const fs = require('node:fs')
const path = require('node:path')

// 自动读取 note 文件夹目录生成侧边栏菜单
let sidebar = {}
const menuList = fs.readdirSync(path.join(__dirname, '../src'))

menuList.map(m => {
  let subDir = fs.readdirSync(path.join(__dirname, '../src/' + m))
  let curDir = `/src/${m}/`

  let items = []
  subDir.map(n => {
    items.push({
      text: n,
      link: `/src/${m}/${n}/index.md`
    })
  })

  if (!sidebar[curDir]) sidebar[curDir] = [{
    text: m,
    items: []
  }]
  sidebar[curDir][0].items = items
})

module.exports =  sidebar