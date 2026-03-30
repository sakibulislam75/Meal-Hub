import { useState } from "react";
import FoodSection from "../FoodSection/FoodSection";
import './SingleFood.css'
const SingleFood = ({all, AddToCart}) => {
    const[cart,setCart]=useState(false);
    const handleCart=()=>{
        setCart(!cart);
        AddToCart(all);
    }
    return (
        <div className="card">
            <img src={all.strMealThumb} alt="" />
            <h3 style={{textAlign:'center',paddingBottom:'8px'}}>{all.strMeal}</h3>
            <button style={{textAlign:'left',padding:'5px'}} onClick={handleCart}>{cart ? 'Remove From Cart' : 'Add Cart'}</button>
            
        </div>
    );
};

export default SingleFood;