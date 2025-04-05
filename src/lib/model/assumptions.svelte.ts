export let incStAssumptions = $state({
    unitsSold: 400,
    unitsSoldGrowth: 0.05,
    
    pricePerUnit: 496,
    pricePerUnitGrowth: 0.03,
    
    cogsRate: 0.43,
    cogsRateGrowth: 0.01,
    
    sgaRate: 0.35,
    sgaRateGrowth: 0.02,
    
    taxRate: 0.21,
    taxRateGrowth: 0.00
})

export let fixAsAssumptions = $state({
    capEx: [15000, 12000, 10000, 7500, 7500],
    existingAssetUsefulLife: 10,
    newAssetUsefulLife: 10
})

export let balShAssumptions = $state({
    ppeFromPreviousYear: 48990,
    arRate: 0,
    inventoryRate: 0,
    apRate: 0,
    longTermDebt: 40000,
    interestExpenseRate: .07
})

