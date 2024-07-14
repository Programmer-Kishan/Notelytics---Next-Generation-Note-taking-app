import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import CookieProvider from './store/cookie-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CookieProvider>
)
