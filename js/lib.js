export function calculateBonus(sales){
    let bonus = 0;
    const percentOfSales = 0.05;
    const saleTenThousand = 10000;
    for (const sale of sales) {
        if (sale > saleTenThousand){
            bonus += (sale - saleTenThousand) * percentOfSales;
        }
    }
    return bonus;
}

