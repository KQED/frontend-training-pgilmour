import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Header } from './components/Header/Header'
import Home from './components/Home/Home'
import HexCodePicker from './routes/HexPickerRoute/HexPickerRoute'
import Cats from './routes/Cats/Cats'


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/hex-picker' element={<HexCodePicker />} />
        <Route exact path='cats' element={<Cats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App