import React from 'react';
import Cart from '../Cart/Cart';
import FoodSection from '../FoodSection/FoodSection';
const SelectedCart = ({c}) => {
    return (
     
        <div className="card" >
            <img src={c.strMealThumb} alt="" />
            <h3 style={{textAlign:'center',paddingBottom:'8px'}}>{c.strMeal}</h3>

            
        </div>
       
         
    );
};

export default SelectedCart;