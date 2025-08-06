import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {  href: "https://www.w3schools.com/css/",
        target: '_blank'},
     'Click to see result'
        
)

createRoot(document.getElementById('root')).render(

   reactElement
  
)
