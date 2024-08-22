import { SWIGGY_CDN_URL } from "../utils/constants";
const styleCard={
    backgroundColor: "beige"
}

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info; 
    return <div className="res-card" style={styleCard}>
        <div className="res-logo-cont">
            <img
             className="res-logo"
             src={SWIGGY_CDN_URL+cloudinaryImageId} />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>
}

export const withOfferLabelResCard=(RestaurantCard)=>{
    return (props)=>{
        console.log(props);
        return (<div>
            <h3 className="discount-label">{props.resData.info?.aggregatedDiscountInfoV3?.header} {props.resData.info?.aggregatedDiscountInfoV3.subHeader}</h3>
            <RestaurantCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;