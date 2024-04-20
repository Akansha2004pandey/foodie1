import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
describe("contact us page test case", () => {
    test("testing the loading of contact page", () => {
        render(<Contact />);
        const heading = screen.getByText("Submit");
        expect(heading).toBeInTheDocument();
    })
    //we can write it in place of test alsoi
    //it is alias of test
    test("load two input boxes", () => {
        render(<Contact />);
        const textbox = screen.getAllByRole("textbox");
        console.log(textbox)
        expect(textbox.length).toBe(2);
    })
});
//jsx-reactelement
// here textbox contains the react element corresponding to input