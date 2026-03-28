
import FoodSection from '../FoodSection/FoodSection';
import SelectedCart from '../SelectedCart/SelectedCart';
const Cart = ({ cart }) => {

    return (
        <div style={{display:'grid',gridTemplateColumns:"repeat(1,1fr)",gap:"10px"}}>
            {
                cart.map(c =><SelectedCart c={c}></SelectedCart>)
            }



        </div>
    );
};

export default Cart;