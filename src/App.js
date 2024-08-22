import React,{lazy,Suspense, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

//React element
//const heading = <h1 className="heading">Namasteyyy</h1>
//For rendering react element
//root.render(heading);

const root =  ReactDOM.createRoot(document.getElementById("root"));

const AppLayoutComponent = ()=>{
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        setUserName("John Doe");
    },[])
    return (
        <userContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="layout">
                <HeaderComponent/>
                <Outlet/>
            </div>
        </userContext.Provider>
    )
}

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayoutComponent/>,
        errorElement: <Error/>,
        children:[{
            path:"/",
            element: <Body/>
        },{
            path:"/restaurant/:resId",
            element: <RestaurantMenu/>
        },{
            path:"/about",
            element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
        },{
            path:"/grocery",
            element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
        },
        {
            path:"/contact",
            element: <Contact/>
        },]
    }
])

root.render(<RouterProvider router={appRouter}/>);