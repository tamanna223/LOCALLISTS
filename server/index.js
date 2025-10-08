import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import React from 'react'
import { renderToString } from 'react-dom/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()

  let vite
  if (!isProd) {
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' })
    app.use(vite.middlewares)
  }

  app.get('*', async (req, res, next) => {
    try {
      const url = req.originalUrl

      // Load index.html
      let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')
      if (vite) template = await vite.transformIndexHtml(url, template)

      // Load page and data on the server
      const { default: Page } = await vite.ssrLoadModule('/pages/web-designer/+Page.jsx')
      const { default: onBeforeRender } = await vite.ssrLoadModule('/pages/web-designer/+onBeforeRender.js')
      const { pageContext } = await onBeforeRender()
      const pageProps = pageContext.pageProps || {}

      const appHtml = renderToString(React.createElement(Page, pageProps))

      // Inject SSR HTML and props
      const html = template
        .replace('<div id="page-view"></div>', `<div id="page-view">${appHtml}</div>`)
        .replace('</body>', `<script>window.__PAGE_PROPS__ = ${JSON.stringify(pageProps)};<\/script>
        <script type="module" src="/renderer/entry-client.jsx"></script></body>`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  const port = process.env.PORT || 5173
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

createServer()
