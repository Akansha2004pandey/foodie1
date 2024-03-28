import RestaurantCard,{HighRating} from './RestaurantCard'
import {useState,useEffect,useContext} from "react"
import Shimmer from './Shimmer'
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext.js';
const Body = () => {
    const [myList,setFilterToList]=useState([]);
    const [filterList,setFilter]=useState([]);
    const [searchText,setSearchText]=useState("");
    const PromotedRestaurant=HighRating(RestaurantCard);
    const {loggedInUser,setUserInfo}=useContext(UserContext);
    console.log(loggedInUser)
    console.log(myList);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        try {
           const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
           const json = await response.json();
           setFilterToList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           console.log(json);
        
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
   // console.log("who came first");
   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false){
    return (<div>
        <h1>Looks like you are offline !!! please check your Internet connection</h1>
    </div>
    )
   };
   
    return (myList?.length===0)?(<Shimmer/>):(<div className="body"> 
        <div className="filter">
            <div className="mx-4 my-2 p-4">
            <input type="text" className="p-1 border-2 border-orange-500 rounded-md" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="m-2 px-4 py-1 rounded-md border-hidden text-white bg-orange-400" onClick={()=>{
            
                const filtered_List=searchText===""?myList:myList.filter((res)=>{
                      
                      
                      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilter(filtered_List);

            }}>Search</button>

            <button className="my-2 px-4 py-1 rounded-md text-white bg-gray-400" onClick={()=>{
                const filteredList=filterList?.filter((res)=>{
                    
                    return res.info.avgRating>4.5;
                });
                console.log(filteredList)
                console.log("hey I am running ")
                setFilter(filteredList);
            }}>Top Rating Restaurants</button>
            
            <label className='m-1'>Username:</label>
            <input className="border border-slate-400 p-1 m-2 outline-none rounded-md" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/> 
        
        
        </div>
        </div>
        <div className="flex flex-wrap">
           {filterList?.map((restaurant)=><Link key={restaurant.info.id} to={"restaurant/"+ restaurant.info.id} >
            {restaurant.info.avgRating>4.3?<PromotedRestaurant resData={restaurant}/>:<RestaurantCard  resData={restaurant}/>}
            </Link>)
           }
        </div>
    </div>)
};
export default Body;