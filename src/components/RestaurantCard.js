import { SWIGGY_CDN_URL } from "../utils/constants";
const styleCard={
    backgroundColor: "beige"
}

const RestaurantCard = (props)=>{
    //console.log(props,"props");
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info; 
    return <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" data-testid="resCard">
        <div className="res-logo-cont">
            <img
             className="rounded-lg"
             src={SWIGGY_CDN_URL+cloudinaryImageId} />
        </div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>
}

export const withOfferLabelResCard=(RestaurantCard)=>{
    return (props)=>{
        //console.log(props);
        return (<div>
            <h3 className="absolute font-bold border-black backdrop-blur pl-4">{props.resData.info?.aggregatedDiscountInfoV3?.header} {props.resData.info?.aggregatedDiscountInfoV3.subHeader}</h3>
            <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;