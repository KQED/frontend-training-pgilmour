import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './slices/store'
import App from './App'

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)