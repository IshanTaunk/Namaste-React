import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);

  if(resInfo===null) return <Shimmer/>;

  const {name,cuisines,costForTwoMessage} = resInfo[2]?.card?.card?.info;
  const recommendedCard = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(el=>{return el.card.card?.title =="Recommended"});
  const {itemCards} = recommendedCard? (recommendedCard?.card?.card):{itemCards:[]};
  const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el)=>{return el.card.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
  //console.log(categories,"catt");

  return (
    <div className='text-center'>
        <h1 className='bold'>{name}</h1>
         <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
         {/* <ul>
            {itemCards.length && itemCards.map(item=>{
                return <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} Rs.</li>
            })}
         </ul> */}
         {categories.map((el,index)=>{
            return <RestaurantCategory 
                        key={el.card.card.title} 
                        category={el.card.card}
                        showItems={index===showIndex}
                        clickItem={()=>{setShowIndex(index)}}
                    />
         })}
    </div>
  )
}

export default RestaurantMenu