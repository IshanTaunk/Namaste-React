import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Should search for burger as input text",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    
    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("search-input");

    const allCards = screen.getAllByTestId("resCard");
    expect(allCards.length).toBe(8);

    fireEvent.change(searchInput,{target:{value:"burger"}});
    //console.log(searchInput);
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
})