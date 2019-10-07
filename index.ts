import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { build } from 'js-build-by-feature-map'
import * as featureTestCode from 'js-feature-test'
import * as http from 'http'

interface dynamicProperty {
  [key: string]: any
}

const app = express()
const distPath = path.resolve(__dirname, '../dist/')
const pagesPath = path.resolve(__dirname, '../pages/')


app.listen(81)

app.use(express.static('../'))

app.get('/', (req, res) => {
  setHeader(res, HttpHeaderContentTypeValue.Html)
  res.send('hollow express')
})

app.get('/js-build-online', async (req, res) => {
  try{
    const featureMap = getFeatureMapFromHeaders(req.headers)

    //TODO:防止重复build，识别feature的改变
    await build(featureMap, {
      entry: path.resolve(__dirname, './test-code.js'),
      output: {
        path: __dirname,
        filename: 'result.js'
      }
    })

    console.log('build finished')

    const content = fs.readFileSync(distPath + '/result.js')
    setHeader(res, HttpHeaderContentTypeValue.Js)
    res.send(content)
  }catch(e) {
    res.send(JSON.stringify(e))
  }
})

function getFeatureMapFromHeaders(headers: http.IncomingHttpHeaders) {
  const cookie = parseCookie(headers.cookie)
  return JSON.parse(cookie['jsFeatureTest'] || '{}')
}

function parseCookie(cookies: string) {
  const cookieMap: dynamicProperty = {}
  const cookieList = cookies.split(';')
  cookieList.forEach((cookie) => {
      const [name, value] = cookie.split('=')
      name && (cookieMap[name] = value)
  })

  return cookieMap
}

app.get('/feature-test', (req, res) => {
    let html = fs.readFileSync(pagesPath + '/feature-test.html').toString()
    const script = `<script>${featureTestCode}</script>`
    html = html.replace('</body>', `${script}</body>`)
    setHeader(res, HttpHeaderContentTypeValue.Html)
    res.send(html)
})

enum HttpHeaderKey {
  ContentType = 'Content-Type'
}

enum HttpHeaderContentTypeValue {
  Html = 'text/html; charset=utf-8',
  Js = 'application/javascript; charset=utf-8'
}

function setHeader(res: express.Response, type: HttpHeaderContentTypeValue) {
  res.setHeader(HttpHeaderKey.ContentType, type)
}
