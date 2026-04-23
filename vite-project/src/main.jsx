import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//custom react elements

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target="_blank">click me to visit google</a>
)
createRoot(document.getElementById('root')).render(
  
    anotherElement
  
)
