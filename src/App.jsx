import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotFound from './components/NotFound'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName />} />
        <Route path="/notfound" element={<NotFound />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokemon/:id' element={<PokemonDetails />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
