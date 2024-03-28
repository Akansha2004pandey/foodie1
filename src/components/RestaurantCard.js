import {LOGO_URL}  from "../utils/contact";
const RestaurantCard = (props) => {
    const {resData}=props;
    return (
        <div className='my-2 mx-3 p-4 w-[250px] border-hidden rounded-md hover:shadow-slate-400 shadow-xl' style={{backgroundColor:"#f0f0f0"}}>
            <img className="rounded-md" src={LOGO_URL+resData.info.cloudinaryImageId}/>

            <h3 className="py-1 text-lg font-medium italic">{resData.info.name}</h3>
            
            <p >{resData.info.cuisines.join(', ')}</p>
            <p>{resData.info.avgRating+"⭐"}</p>
            <p>{resData.info.sla.deliveryTime} mins</p>
           
        </div>
    )
};
export const HighRating=(RestaurantCard)=>{
     return (props)=>{
        return (
        <div>
            <label className="absolute bg-slate-950 text-white p-1 rounded-md">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
        );
     }
}
export default RestaurantCard;