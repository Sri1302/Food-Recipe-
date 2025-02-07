import { useEffect, useState } from "react"
import styles from './search.module.css'

const url = "https://api.spoonacular.com/recipes/complexSearch"
const apikey ="54cab8bf053d43698aa4a6344778dbd0"

export default function Search({foodData,setFoodData}){
    const[query,setQuery] = useState("pizza")
    
    //fetch data from api
    useEffect(()=>{
       const fetchData= async() =>{
        const res = await fetch(`${url}?query=${query}&apiKey=${apikey}`)
        const data = await res.json()
        setFoodData(data.results)
       }
       fetchData()
    },[query])

    return <div className={styles.container}>
        <p>Search for a Recipe:</p>
        <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
    </div>
}

// to store the recipes related to the query we need use state , it better to place the state in App.jsx so that it can accesed from anywhere.