// import React from 'react'
// import ReactDOM from 'react-dom/client'
import React from 'react'
import { createRoot } from 'react-dom/client'

// import { Provider } from 'react-redux'
// import store from './store'

import { App } from './components/Header'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )