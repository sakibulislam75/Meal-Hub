
import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FoodSection from './Components/FoodSection/FoodSection';

//API
const food=async()=> {
  const res=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  return res.json();
}
function App() {
  const fd=food();

  
  return (
    <>
  
   <Navbar></Navbar>
   <Suspense fallback={<h2 style={{textAlign:'center',marginTop:'200px'}}>Data are loading....</h2>}>
   <FoodSection fd={fd}></FoodSection>
   </Suspense>
    </>
  )
}

export default App
