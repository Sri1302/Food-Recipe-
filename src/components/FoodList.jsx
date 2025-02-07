import FoodItem from "./FoodItem";

export default function FoodList({ foodData,id ,setId }) {
  return (
    <div>
      {foodData.map((item) => (
        <div>
          <FoodItem key={item.id} item={item} id={id} setId={setId} />
        </div>
      ))}
    </div>
  );
}
