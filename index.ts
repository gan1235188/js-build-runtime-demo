import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { build } from './build'

interface dynamicProperty {
  [key: string]: any
}

const app = express()
const distPath = path.resolve(__dirname, '../../dist/')
const pagesPath = path.resolve(__dirname, '../../pages/')


const server = app.listen(81)

app.use(express.static('../'))

app.get('/', (req, res) => {
  setHeader(res, HttpHeaderContentTypeValue.Html)
  res.send('hollow express')
})

app.get('/js-build-online', async (req, res) => {
  console.log(req.headers.cookie)
  const cookie = parseCookie(req.headers.cookie)
  const featureMap = JSON.parse(cookie['jsFeatureTest'] || '{}')

  await build(featureMap)

  const content = fs.readFileSync('../build/dist/test-code/index.js')
  setHeader(res, HttpHeaderContentTypeValue.Js)
  res.send(content)
})

function parseCookie(cookies: string) {
  const cookieMap: dynamicProperty = {}
  const cookieList = cookies.split(';')
  cookieList.forEach((cookie) => {
      const [name, value] = cookie.split('=')
      name && (cookieMap[name] = value)
  })

  return cookieMap
}

// app.get('/pages/:path', (req, res) => {
//   const html = fs.readFileSync(`${pagesPath}/${req.params.path}`).toString()
//   setHeader(res, HttpHeaderContentTypeValue.Html)
//   res.send(html)
// })

// app.get('/feature-test', (req, res) => {
//     const html = fs.readFileSync('./index.html')
//     setHeader(res, HttpHeaderContentTypeValue.Html)
//     res.send(html)
// })

// app.get('/dist/:path', (req, res) => {
//   setHeader(res, HttpHeaderContentTypeValue.Js)
//   const jsContent = fs.readFileSync(`${distPath}/${req.params.path}`)
//   res.send(jsContent)
// })


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

function startApp() {
  const server = app.listen(81)

  process.on('beforeExit', exit('beforeExit'))
  process.on('exit', exit('exit'))
  process.on('SIGKILL', exit('SIGKILL'))
  process.on('SIGLOST', exit('SIGLOST'))
  process.on('disconnect', exit('disconnect'))
  process.on('SIGHUP', exit('SIGHUP'))
  process.on('SIGINT', exit('SIGINT'))

  let isKilled = false
  function exit(event: string) {
    console.log(event)

    return () => {
      !isKilled && server.close()
      isKilled = true
      process.exit()
    }
  }
}