import ItemList from "./ItemList";
import {useState} from "react"
const RestaurantCategory = ({ data ,showItems,setShowItems,arrowHere,arrowShow}) => {
    console.log(data);
    
    
    const handleClick=()=>{
        setShowItems();
        arrowShow();
    }
    return (<div className="">
        <div className="w-1/2 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>{arrowHere}</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>

    </div>)
};
export default RestaurantCategory;