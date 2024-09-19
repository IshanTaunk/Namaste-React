import { Provider } from "react-redux"
import HeaderComponent from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// test("Should the Header contain login btn",()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <HeaderComponent/>
//             </Provider>
//         </BrowserRouter>)

//     const loginBtn = screen.getByRole("button",{name:"Login"});
//     expect(loginBtn).toBeInTheDocument()
// })

// test("Should the Header contain CArt text",()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <HeaderComponent/>
//             </Provider>
//         </BrowserRouter>)

//     const cartText = screen.getByText(/Cart/);
//     expect(cartText).toBeInTheDocument()
// })

test("Should the Header contain CArt text",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent/>
            </Provider>
        </BrowserRouter>)

    const loginBtn = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button",{name:"Logout"});

     expect(logoutBtn).toBeInTheDocument()
})