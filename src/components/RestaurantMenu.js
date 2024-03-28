import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from 'react'
const RestaurantMenu=()=>{
    const [showIndex,setShowIndex]=useState(null);
    const [arrow,setArrow]=useState("⬇️")
    let  {params}=useParams();
    console.log("params",params);
    const resInfo=useRestaurantMenu(params);
    console.log("hello");
    console.log(resInfo);
    /*
    useEffect(()=>{
          fetchMenu();
    },[])
    const fetchMenu=async ()=>{
        const data=await fetch("https://corsproxy.io/?"+API_DATA+params+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json.data);
        
        setResData(json.data);
        
    };
    */
    if(resInfo===null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info || resInfo?.cards[2]?.card?.card?.info;
    
    console.log(resInfo);
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((res)=>res?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className="text-center">

            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category,index)=><RestaurantCategory key={category?.card?.card?.title}data={category.card.card} showItems={index===showIndex?true:false} setShowItems={()=>{
                showIndex===index?setShowIndex(null):setShowIndex(index);
            }} arrowHere={arrow} arrowShow={()=>{
                showIndex===index?setArrow("⬇️"):setArrow("⬆️");
            }}/>)}
        </div>
    )
};
export default RestaurantMenu;