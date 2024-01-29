import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './slices/store'
import App from './App'

const rootElement = document.getElementById('root')

if(typeof window !== 'undefined' && rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
} else {
  const SSRPlaceholder = () => (
    <div> Server Side Rendering Placeholder</div>
  )

  createRoot(<SSRPlaceholder />).render()
}
