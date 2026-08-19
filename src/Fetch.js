import { cache, useEffect, useState } from "react";
import api from "./axios";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
          const FetchData = async () =>{
            try{
                setLoading(true)
                setError("")
                const respons = await axios.get(url)
                setData( respons.data);
                
                
            } catch(err){
                 setError("Ma'lumotlarni yuklashda xatolik yuz berdi")
            } finally{
                setLoading(false)
            }
          }
          FetchData()
    },[url])

    return{
        data,
        loading,
        error
    };
}

export default useFetch