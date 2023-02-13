import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {GlobalReset} from "./Styles/StyleReset"
import {StyleGlobal} from "./Styles/StyleGlobal"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GlobalReset />
    <StyleGlobal />

    <App />
  </React.StrictMode>,
)
