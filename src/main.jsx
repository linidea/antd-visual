import React from 'react'
import ReactDOM from 'react-dom/client'
//
import 'normalize.css'
import '@style/index.js'
//
import App from '@view/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
