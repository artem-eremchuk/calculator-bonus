export function calculatorSales(sales){
    let sumSales = 0;
    const saleTenThousand = 10000;
    for (const sale of sales) {
        if (sale <= saleTenThousand){
            sumSales += 0;
        }
        if (sale > saleTenThousand){
            sumSales += (sale - saleTenThousand) * 0.05;
        }
    }
    return sumSales;
}

