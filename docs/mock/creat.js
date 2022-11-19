const fs = require('node:fs')
const path = require('node:path')
const CATE = require('./cate')
const CATE_INFO = require('./cate-info')

CATE.map((m, i) => {
  const title = m.title
  let content = ''
  let list = CATE_INFO[i]
  list.map(n => {
    content +=`
<div class="box" style="padding: 20px;margin-bottom: 20px;background: #fff;border-radius: 8px;box-shadow: 1px 1px 6px #e1e4fb;">
  <p class="name" style="font-size: 20px;font-weight: 500;line-height: 1;color: #666;border-bottom: 1px solid #eee;padding-bottom: 20px;">${n.name}</p>
  <p class="english" style="font-size: 24px;
  font-weight: 500;
  color: #453e7b;
  line-height: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;">${n.nameEn}</p>
  <p class="phonetic" style="  font-size: 14px;
  color: #999;
  line-height: 1;
  margin-top: 4px;">音标：${n.phonetic}</p>
</div>`
  })

  // 拼上标题
  const allContent = `# ${title}
${m.des}

${content}
`

  const dir = path.join(__dirname, `../pages/咖啡词典/${title}`)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  fs.writeFileSync(path.join(dir, 'index.md'), allContent)
})