import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName />} />
        <Route path='/pokedex' element={<Pokedex />}/>
        <Route path='/pokedex/:id' element={<PokedexDetail />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
