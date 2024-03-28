import {useState,useEffect} from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setStatus]=useState(true);
    useEffect(()=>{
           window.addEventListener("online",()=>{
             setStatus(true);
           })
           window.addEventListener("offline",()=>{
             setStatus(false);
           })
    },[])
    return onlineStatus;
}
export default useOnlineStatus;