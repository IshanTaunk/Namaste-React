import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Page test cases",()=>{

    beforeAll(()=>{
        console.log("before all");
    })

    beforeEach(()=>{
        console.log("before each");
    })

    afterAll(()=>{
        console.log("after all");
    })

    afterEach(()=>{
        console.log("after each");
    })

    test("Check If contact component is loaded",()=>{
        render(<Contact/>);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("Check If contact component has button",()=>{
        render(<Contact/>);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    test("Check If contact component has submit text",()=>{
        render(<Contact/>);

        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })

    // test("Check If contact component has input",()=>{
    //     render(<Contact/>);

    //     const inputName = screen.getByPlaceholderText("Name");
    //     expect(inputName).toBeInTheDocument();
    // })

    // test("Should load 2 input boxes",()=>{
    //     render(<Contact/>);

    //     const inputList = screen.getAllByRole("textbox");
    //     expect(inputList.length).toBe(2);
    // })
})