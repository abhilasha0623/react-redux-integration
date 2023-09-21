import { render, screen } from '@testing-library/react';
import Counter from "./index";


describe("testing the counter component",()=>{
    it("should render a counter with value of 1",()=>{
        render(<Counter/>)
        const basicButton = screen.getByRole('button');
        expect(basicButton).toHaveValue(1)
    })
})