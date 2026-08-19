import React, { memo } from 'react'
import { useMovieContext } from './MovieContex'
import { Link } from 'react-router-dom'
import "./MoveCard.css"

function MoveCard({ move, onDelete }) {
  const { addSevimlilar, isSevimli } = useMovieContext()

  return (
    <div className='movecard'>
      <iframe className='iframe' src={move.trailerUrl} frameBorder="0"></iframe>
      <div className='content'>
        <h3>{move.title}</h3>
        <p className='genre'>{move.genre}</p>
        <p>⭐{move.rating}</p>
        <p>{move.year} y : {move.duration} min</p>
        <div className='buttons'>
          <Link to={`/movie/${move.id}`}>Batafsil</Link>
          <button className='btn' onClick={() => addSevimlilar(move)}>
            {isSevimli(move.id) ? "❤️" : "🤍"}
          </button>
          <button className='deletebtn' onClick={() => onDelete(move.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default memo(MoveCard)