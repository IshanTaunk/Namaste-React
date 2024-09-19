import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json";
import {withOfferLabelResCard} from "../RestaurantCard";
import DISC_MOCK_DATA from "../mocks/discountResCardMock.json"; 

// test("Should render restaurant component with props data",()=>{
//     render(<RestaurantCard resData={MOCK_DATA}/>);
    
//     const cardName = screen.getByText("KFC");

//     expect(cardName).toBeInTheDocument();
// })

test("Should render restaurant component with discount offer",()=>{
    //console.log(DISC_MOCK_DATA);
    render(<div>
        <h3 className="discount-label">{DISC_MOCK_DATA.info?.aggregatedDiscountInfoV3.header} {DISC_MOCK_DATA.info?.aggregatedDiscountInfoV3.subHeader}</h3>
        <RestaurantCard resData={DISC_MOCK_DATA}/>
    </div>);
    
    const cardName = screen.getByText("Chinese Wok");

    expect(cardName).toBeInTheDocument();
})