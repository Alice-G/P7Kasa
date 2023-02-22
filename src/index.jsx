import React from 'react'
// import ReactDOM from 'react-dom' // not supported anymore?
import ReactDOM from 'react-dom/client' //    ASK which one?
// import './index.css' // DEL
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
// BrowserRouter for the web and NativeRouter for mobile // ASK how I switch for mobile views

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
)
