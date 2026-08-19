import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MoveProvaider({ children }) {
  const [sevimliMoves, setSevimliMoves] = useState([]);

  const addSevimlilar = (move) => {
    setSevimliMoves((prev) => {
      const ruyxat = prev.some((item) => item.id === move.id);

      if (ruyxat) {
        return prev.filter((item) => item.id !== move.id);
      }
      return [...prev, move];
    });
  };

  const isSevimli = (id) => {
    return sevimliMoves.some((move) => move.id === id);
  };

  return (
    <MovieContext.Provider
      value={{
        addSevimlilar,
        isSevimli,
        sevimliMoves
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}