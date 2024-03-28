import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from './utils/UserContext'
import { useState,useEffect } from 'react'

const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
    
    const [userInfo,setUserInfo]=useState();
    useEffect(()=>{
        const data={
            name:"Akansha"
        }
        setUserInfo(data.name);
    },[])
    
    return (
       <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className="app">

            <Header/>
            <Outlet/>

        </div>
        </UserContext.Provider>
    )
};
const appRouter=createBrowserRouter([
    {path:"/",
    element:<AppLayout/>,
    children:[
    {
        path:"/",
        element:<Body/>
      },
    {
     path:"/about",
     element:<About/>
    },
    {
     path:"/contact",
     element:<Contact/>
    },
    {
        path:"/grocery",
        element:(<Suspense fallback={<h1>Loading....</h1>}>
            <Grocery/>
            </Suspense>)
    },
    {
        path:"/restaurant/:params",
        element:<RestaurantMenu/>
    }

],
    errorElement:<Error/>
   }
])

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<RouterProvider router={appRouter}/>);
