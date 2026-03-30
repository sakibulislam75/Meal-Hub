import SingleFood from "../SingleFood/SingleFood";
import "./FoodSection.css";
import Cart from "../Cart/Cart";
import { use, useState } from "react";
import SelectedCart from "../SelectedCart/SelectedCart";
import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ fd }) => {
    const food = use(fd); //object akare ase(depend on api data formate)
    const foods = food.meals; //object r vitor array access
    const [cart, setCart] = useState([]);
    const AddToCart = (addCart) => {
        const exist=cart.find(food=>food.idMeal===addCart.idMeal);
        if(exist){
            const remaining=cart.filter(food=>food.idMeal!==addCart.idMeal);
            setCart(remaining);
        } else {
            setCart([...cart, addCart]);
        }
    };
    const Order = () => {
        setCart([]);
        if (cart.length !== 0) {
           toast.success("Successfully Place The Order!");
        }
    }

    return (
        <div className="parent">
            <div className="cardContainer">
                {foods.map((all) => (
                    <SingleFood
                        AddToCart={AddToCart}
                        key={all.idMeal}
                        all={all}
                    ></SingleFood>
                ))}
            </div>
            <div className="right">
                <Cart cart={cart}></Cart>
                <button style={{ width: '150px', padding: '7px', marginTop: '15px' }} onClick={Order}>Order</button>
            </div>
               <ToastContainer />
        </div>
    );
};

export default FoodSection;
