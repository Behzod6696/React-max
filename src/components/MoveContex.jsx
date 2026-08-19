import { create } from "axios";
import { createContext, useContext, useState } from "react";

const Movecontext = createContext()

export function MoveProvaider({children}){
    const [sevimliMoves, setSevimliMoves] = useState([])

    const addSevimlilar = (move) =>{
        setSevimliMoves((prev)=>{
              const ruyxat = prev.some((item)=>item.id === move.id)

              if(ruyxat){
                return prev.filter((item) => item.id !== move.id )
              }
              return [...prev , move]     
        })
    }
     const isSevimli = (id)=>{
            return setSevimliMoves.some((move)=> move.id === id);
            
     }
     return(
        <MoveContex.Provider 
           value={{
            addSevimlilar,
            isSevimli,
            sevimliMoves
           }}
        >
            {children}
        </MoveContex.Provider>

     )
}

export function useMovieContext(){
    return useContext(Movecontext)
}