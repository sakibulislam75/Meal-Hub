import FoodSection from "../FoodSection/FoodSection";
import './SingleFood.css'
const SingleFood = ({all, AddToCart}) => {
    return (
        <div className="card">
            <img src={all.strMealThumb} alt="" />
            <h3 style={{textAlign:'center',paddingBottom:'8px'}}>{all.strMeal}</h3>
            <button style={{textAlign:'left',padding:'5px'}} onClick={()=>( AddToCart(all))}>ADD Cart</button>
            
        </div>
    );
};

export default SingleFood;