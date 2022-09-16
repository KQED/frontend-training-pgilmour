import React from 'react'
// import ReactDOM from 'react-d÷om/client' // No longer needed, using an updated protocol 
import { createRoot } from 'react-dom/client'
import App from './App'
// import {  } from './components/Header' // moving this to ./App.js
// import { Provider } from 'react-redux'
// import store from './store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />) // Probably add Provider Component here.

// These lines are prep for Redux ticket
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )