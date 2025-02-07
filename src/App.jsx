import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [id,setId] = useState("658615")

  return (
    <div>
      <Header/> 
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
        <FoodList foodData={foodData} id={id} setId={setId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail id={id} setId={setId} />
        </InnerContainer>
      </Container>
      
    </div>
  );
}
