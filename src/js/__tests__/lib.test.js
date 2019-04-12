import {calculatorSales} from "../lib.js";

test('it should return bonus from sum sales', ()=> {
    const sales = [12000, 8000, 10000, 15000, 2000];
    const expected = 350;

    const result = calculatorSales(sales);

    expect(result).toBe(expected);
});
