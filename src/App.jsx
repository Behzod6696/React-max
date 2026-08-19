import React from 'react'
import { MoveProvaider } from './components/MovieContex'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import KinoForm from './components/KinoForm/KinoForm'


function App() {
  return (
    <div>
      <h1>salomcha</h1>
      <BrowserRouter>
        <MoveProvaider>
              <Header/>
            
        </MoveProvaider>
      </BrowserRouter>
    </div>
  )
}

export default App