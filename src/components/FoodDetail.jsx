import { useEffect,useState } from "react"
import styles from './fooddetail.module.css'

const apikey ="54cab8bf053d43698aa4a6344778dbd0"

export default function FoodDetail({id,setId}){
    const[food,setFood]= useState({})
    const[loading,setLoading]= useState(true)

    //get detail recipe info through id
    useEffect(()=>{
        const fetchFood = async () =>{
            const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setLoading(false)
        }
        fetchFood()
    },[id])
    return<div>
        <div className={styles.container}>
            <div className={styles.name} >
                <span>Detailed Recipe:<h5>{food.title}</h5></span>
            </div>
            <div className={styles.image}>
                <img src={food.image}/>
            </div>
            <div className={styles.block1}>
                <strong><span>Time Taken ⌚ {food.readyInMinutes}</span></strong>
                <strong> <span>Servings 👪 {food.servings} </span></strong>
                <strong><span> {food.vegetarin? "Veg 🥕": "Non-Veg 🍗"}</span></strong>
            </div>
            <div className={styles.block2}>
                <strong><span> $ Price per Servings {Math.round(food.pricePerServing/100)}</span></strong>
                <strong><span> {food.veryHealthy? "Healthy 💪🏼" :"Not-Healthy 🥴"}</span></strong>
            </div>
            <div className={styles.ingredients}>
                <h5>Ingredients:</h5>
                {loading? <p>Loading...</p>: food.extendedIngredients.map((item)=>
                <div className={styles.box}>
    
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image}/>
                <span>{item.name} - {item.amount}</span>
                </div>)}
            </div>
            <div className={styles.instructions}>
                <h4>Instructions</h4>
                {loading? <p>Loading....</p>:food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>)}
            </div>
        </div>
    </div>
}