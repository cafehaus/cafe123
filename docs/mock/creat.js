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
<div class="box" style="padding: 20px;margin-bottom: 20px;background: var(--vp-c-bg);border-radius: 8px;box-shadow: var(--vp-shadow-2);">
  <p class="english" style="font-size: 24px;font-weight: 500;color: #453e7b;line-height: 1;display: flex;justify-content: space-between;margin:0;border-bottom: 1px solid var(--vp-c-divider-light-2);padding-bottom: 10px;">${n.nameEn}</p>
  <p class="name" style="font-size: 16px;line-height: 2;margin: 0;">${n.name}</p>
  ${n.phonetic ? ('<p class="phonetic" style="font-size: 14px;line-height: 1;margin: 4px 0 0 0;">音标：' + n.phonetic + '</p>') : ''}
</div>`
  })

  // 拼上标题
  const allContent = `# ${title}
${m.des}

${content}
`

  const dir = path.join(__dirname, `../src/咖啡词典/${title}`)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  fs.writeFileSync(path.join(dir, 'index.md'), allContent)
})