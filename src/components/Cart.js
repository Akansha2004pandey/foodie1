import {useSelector} from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice";
const Cart=()=>{
   const cartItems=useSelector((store)=>store.cart.items); 
   const dispatch=useDispatch();
   console.log(cartItems);
  

   
   const handleClick=()=>{
      dispatch(clearCart());
   }
   return (
      <div className="text-center m-4 p-4">
         <h1 className="font-bold text-orange-600 text-2xl">Cart</h1>
         <div className="w-6/12 m-auto">
            <button className="text-white bg-black p-2 m-2 rounded-md" onClick={handleClick}>Clear cart</button>
            <ItemList items={cartItems}/>
            
            {cartItems.length==0 &&(
            <div>
            <h1 className="text-orange-700 font-bold text-3xl p-10">OOPS !!! cart is empty 🥲</h1>
               </div>)}

         </div>
      </div>
   );
}
export default Cart;