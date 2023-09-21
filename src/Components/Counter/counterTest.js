import { render, screen } from '@testing-library/react';
import Counter from "./index";


describe("testing the counter component",()=>{
    it("should count the number of button used",()=>{
        render(<Counter/>)
        const basicButton = screen.getAllByRole('button');
        expect(basicButton).toHaveValue(2)
    })
})