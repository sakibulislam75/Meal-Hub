import navImg from '../../assets/food.jpg'
import'./Navbar.css'
export default function Navbar(){
    return(
        <nav style={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
            <div className='lft'>
                <img src={navImg} alt="" style={{height:'50px' ,width:'50px',borderRadius:'50%'}}/>
                <h3>Meal Hub</h3>
            </div>
            <div className='rht'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Order</p>
                <p>Blogs</p>
            </div>
        </nav>
    )
}