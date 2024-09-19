import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/cartItemsmock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import HeaderComponent from "../Header";
import { BrowserRouter } from "react-router-dom";
import CArt from "../Cart";

global.fetch = jest.fn(()=>Promise.resolve({json: ()=>Promise.resolve(MOCK_DATA)}));

test("Should be able to add items to cart and see the added items",async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
            <BrowserRouter>
            <HeaderComponent/>
            <RestaurantMenu/>
            <CArt/>
            </BrowserRouter>
        </Provider>));

    const accordHeader = screen.getByText("Drinks (9)");
    fireEvent.click(accordHeader);
    const menuItem = screen.getAllByTestId("menuItem");
    expect(menuItem.length).toBe(9);
    const addBtns = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtns[1]);
    const cartTab = screen.getByText("Cart (1 Items)");
    expect(cartTab).toBeInTheDocument();
    fireEvent.click(cartTab);
    const menuItemAfterClick = screen.getAllByTestId("menuItem");
    expect(menuItemAfterClick.length).toBe(10);
    const addedItem = screen.getAllByText("Coolberg Cranberry");
    expect(addedItem.length).toBe(2);
})