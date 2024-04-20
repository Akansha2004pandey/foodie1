import  {CDN_URL}  from "../utils/contact";
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import {useSelector} from "react-redux";
const Header = () => {
    const {loggedInUser}=useContext(UserContext);
    const [btnNameReact,setBtnName]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
    console.log("Header render");
    useEffect(()=>{
        console.log("useEffect called");
    });
    return (
        <div className="flex justify-between shadow-lg mb-2 px-4">
            <div className="logo-container">
                <img className="w-24" src={CDN_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-normal hover:text-orange-700 text-lg">Online Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4 font-normal hover:text-orange-700 text-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 font-normal  hover:text-orange-700 text-lg"><Link to="/about">About Us</Link></li>
                    <li className="px-4 font-normal  hover:text-orange-700 text-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-normal  hover:text-orange-700 text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 font-normal mx-2 rounded-lg text-white bg-orange-400 text-lg"><Link to="/cart">Cart <span className="text-orange-400 px-3 py-2 rounded-full bg-orange-100">{cartItems.length}</span></Link></li>
                    <button className="Login" onClick={()=>{
                        btnNameReact==="Login"?setBtnName("Logout"):setBtnName("Login");
                    }}>{btnNameReact}</button>
                </ul>
                <li className="list-none">{loggedInUser}</li>
            </div>
        </div>
    )
};
export default Header;