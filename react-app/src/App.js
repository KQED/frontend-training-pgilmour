import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Header } from './components/Header'
import Body from './components/Body'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
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