import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
      },[]);
    
    const fetchData = async()=>{
        const data = await fetch(MENU_URL + resId);
        let dataJson = await data.json();
        console.log(dataJson,"jss");
        setResInfo(dataJson?.data?.cards);
    }
    return resInfo;
}

export default useRestaurantMenu;