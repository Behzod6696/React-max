import React from 'react'
import { MoveProvaider } from './components/MovieContex'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'




function App() {
  return (
    <div>
      <BrowserRouter>
        <MoveProvaider>
              <Header/>
           
        </MoveProvaider>
      </BrowserRouter>
    </div>
  )
}

export default App