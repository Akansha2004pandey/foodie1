import { LOGO_URL} from "../utils/contact";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice';
const ItemList=({items})=>{
    //console.log(items );
   const dispatch=useDispatch();
   const handleAddItem=(item)=>{
      dispatch(addItem(item));
      

   }
   return (<div>
      {items.map((item)=><div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
     
         <div className="w-9/12">
            <div className="py-2">
            <span className="">{item.card.info.name}</span>
            <span className="">- ₹{(item.card.info.price || item.card.info.defaultPrice)/100}</span>
            
            </div>
            <div>
               <span className="text-xs">{item.card.info.description}</span>
            </div>
        </div>
        <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="px-2 py-1 bg-white text-green-800 border-2 border-slate-300 shadow-lg rounded-md mx-[22px]" onClick={()=>handleAddItem(item)}>Add+</button>
          </div>
          <img src={LOGO_URL+item.card.info.imageId}/>
          
      </div>

      </div>
      )}
   </div>)
}
export default ItemList;