import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../pages/web-designer/+Page.jsx'
import './global.css'

const rootEl = document.getElementById('page-view')

async function bootstrap(){
  // Load props from client since static deploy doesn't inject SSR props
  let props = {}
  try{
    const mod = await import('../pages/web-designer/+onBeforeRender.js')
    if(mod && typeof mod.default === 'function'){
      const { pageContext } = await mod.default()
      props = (pageContext && pageContext.pageProps) || {}
    }
  }catch(err){
    console.error('Failed to load page props:', err)
  }
  ReactDOM.createRoot(rootEl).render(<Page {...props} />)
}

bootstrap()
