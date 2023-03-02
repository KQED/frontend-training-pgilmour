import React from 'react'
// import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Header } from './components/Header'
import Body from './components/Body'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

function App () {
  return (
    <div className='App'>
      <Header />
      <Body />
      <RouterProvider router={router} />
    </div>
  )
}

export default App