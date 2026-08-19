import React from 'react'
import { useMovieContext } from '../MovieContex'
import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
  const { sevimliMoves } = useMovieContext()

  return (
    <div className='header'>
      <div className='container-header'>
        <NavLink to={"/"} className={"logo"}>
          MoveHub
        </NavLink>
        <div className='nav'>
          <NavLink to={"/"} className={({ isActive }) => isActive ? "aktive" : "before"}>
            Home
          </NavLink>
          <NavLink to={"/catalog"} className={({ isActive }) => isActive ? "aktive" : "before"}>
            Catalog
          </NavLink>
          <NavLink to={"/add"} className={({ isActive }) => isActive ? "aktive" : "before"}>
            Add Movie
          </NavLink>
          <span className='sevimli'>❤️ {sevimliMoves.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header