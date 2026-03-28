import SingleFood from "../SingleFood/SingleFood";
import "./FoodSection.css";
import Cart from "../Cart/Cart";
import { use, useState } from "react";
import SelectedCart from "../SelectedCart/SelectedCart";
import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ fd }) => {
    const food = use(fd); //object akare ase(depend on api data formate)
    const foods = food.meals; //object r vitor array access
    const [cart, SetCart] = useState([]);
    const AddToCart = (addCart) => {
        SetCart([...cart, addCart]);
    };
    const Order = () => {
        SetCart([]);
        if (cart.length !== 0) {
           toast("Successfully Place The Order!");
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
