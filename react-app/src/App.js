import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header/Header.jsx'

import Cats from './components/Cats/Cats.jsx'
import HexPicker from './components/HexPicker/HexPicker.jsx'
import Home from './components/Home/Home.jsx'
import SailorForm from './components/SailorForm/SailorForm.jsx'


function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='hex-picker' element={<HexPicker />} />
        <Route exact path='cats' element={<Cats />} />
        <Route exact path='sailorform' element={<SailorForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App