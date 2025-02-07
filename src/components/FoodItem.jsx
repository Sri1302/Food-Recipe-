import styles from  './fooditem.module.css'

export default function FoodItem({item,id,setId}) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.image} />
      <p className={styles.title}>{item.title}</p>
      <button onClick={()=>
       setId(item.id)
      } className={styles.button}>Veiw Recipe</button>
    </div>
  );
}
