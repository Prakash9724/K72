import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import Agence from './Pages/Agence'
import Home from './Pages/Home'

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/project' element={<Projects/>}/>
    
        
      </Routes>
    </div>
  )
}

export default App