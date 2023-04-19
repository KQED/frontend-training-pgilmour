import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Header } from './components/Header/Header'
import Root from './routes/root'
import ErrorPage from './routes/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
])

function App () {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App