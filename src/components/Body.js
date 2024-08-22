import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOfferLabelResCard } from "./RestaurantCard";
import userContext from "../utils/userContext";

const Body = ()=>{
    const [list,setList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRes,setFilteredRes] = useState([]);
    const isOnline = useOnlineStatus();
    const DiscountedResCard = withOfferLabelResCard(RestaurantCard);
    const {loggedInUser,setUserName} = useContext(userContext);

    const filterTopRestaurants = ()=>{
        //setList((prevList)=>prevList.filter(res=>res.info.avgRating>=4));
        let filteredResList = list.filter(el=>el.info.avgRating>=4);
        setFilteredRes(filteredResList);
    };
    useEffect(()=>{
        fetchRestaurants();
    },[]);

    fetchRestaurants = async()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.981463874180697&lng=77.72908398406648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJson = await data.json();
    let reqcard = dataJson.data.cards.find(el=>el.card.card.id=="restaurant_grid_listing");
    // console.log(dataJson.data.cards,"res");
    if(reqcard){
        setList(reqcard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(reqcard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    }

    searchRestaurant=(event)=>{
        setSearchText(event.target.value);
        let filteredResList = list.filter(el=>el.info.name.toLowerCase().includes(searchText.toLowerCase()));
        if(filteredResList.length>0){
            setFilteredRes(filteredResList);
        }  
    }

    clickSearch=()=>{
        let filteredResList = list.filter(el=>el.info.name.toLowerCase().includes(searchText.toLowerCase()));
        if(filteredResList.length>0){
            setFilteredRes(filteredResList);
        }    
    }

    if(isOnline==false){
        return <div>You're offline. Please check your internet connection.</div>
    }

    return list.length===0?<Shimmer/>:(
    <div className="body">
        <div className="search">
            <div>
                <input type="text" className="search-box" value={searchText} onChange={searchRestaurant}></input>
                <button onClick={clickSearch}>Search</button>
            </div>
            <button className="search-btn" onClick={filterTopRestaurants}>Top rated restaurants</button>
            <div><input value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input></div>
        </div>
        <div className="restaurant-body">
            {filteredRes.map(resObj=>(
                <Link to={"/restaurant/"+resObj.info.id} key={resObj.info.id}>
                    {resObj.info?.aggregatedDiscountInfoV3?.header?<DiscountedResCard resData={resObj}/>:<RestaurantCard resData={resObj}/>}
                </Link>
            ))
                }
        </div>
    </div>
    )
}

export default Body;