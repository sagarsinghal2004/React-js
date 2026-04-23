import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

//custom react elements

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


// const anotherElement = (
//   <a href="https://google.com" target="_blank">click me to visit google</a>
// )

//creating a element using react.createElement which uses react syntax
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
