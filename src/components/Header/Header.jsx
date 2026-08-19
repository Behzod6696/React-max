import React from 'react'
import { useMovieContext } from '../MovieContex'
import { Link, } from 'react-router-dom'
import "./Header.css"
function Header() {
    const {sevimliMoves} = useMovieContext()

  return (
    <div className='header'>
        <div className='container-header'>
            <Link to={"/"} className={"logo"}>
                MoveHub
            </Link>
            <div className='nav'>
                <Link to={"/"} className={({isAtive})=>{
                    isAtive ? "aktive" : "before"
                }}>Home</Link>

                <Link to={"/catolg"} className={({isAtive})=>{
                     isAtive ? "aktive" : "before"
                }}>Catolg</Link>

                <Link to={"/add"} className={({isAtive})=>{
                    isAtive ? "aktive" : "before"
                }}>add Move</Link>

                <span className='sevimli'>  ❤️ {sevimliMoves.length}</span>

            </div>
        </div>
    </div>
  )
}

export default Header