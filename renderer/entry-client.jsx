import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../pages/web-designer/+Page.jsx'
import './global.css'

const rootEl = document.getElementById('page-view')
const props = window.__PAGE_PROPS__ || {}

ReactDOM.createRoot(rootEl).render(<Page {...props} />)
