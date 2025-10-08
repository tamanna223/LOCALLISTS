import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import './global.css'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(<Page {...pageProps} />)

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Localists</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
