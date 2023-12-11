import fs from 'fs'
import * as sass from 'sass'
import { execSync } from 'child_process'

const compressed = sass.compile('./src/index.scss')

const processedCss = compressed.css
execSync('rm -rf dist')
fs.mkdir('dist',(err)=>{
  if (err){
    console.log('err', err)
  }
})

fs.writeFile(`./dist/design-style.scss`, processedCss, 'utf-8', () => {
  try {
    console.log('scss打包成功')
  } catch (error) {
    console.log('写入内容失败', error)
  }
})
