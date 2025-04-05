// Income Statement Projections

import { incStAssumptions, balShAssumptions } from "./assumptions.svelte";

let unitsSoldProjs = $derived.by(() => {
    const { unitsSold, unitsSoldGrowth } = incStAssumptions;
    const years = 5;
    const projections = [unitsSold];
    
    for (let i = 1; i < years; i++) {
        projections[i] = projections[i-1] * (1 + unitsSoldGrowth);
    }
    
    return projections;
});

let pricePerUnitProjs = $derived.by(() => {
    const { pricePerUnit, pricePerUnitGrowth } = incStAssumptions;
    const years = 5;
    const projections = [pricePerUnit];
    
    for (let i = 1; i < years; i++) {
        projections[i] = projections[i-1] * (1 + pricePerUnitGrowth);
    }
    
    return projections;
});

let cogsRateProjs = $derived.by(() => {
    const { cogsRate, cogsRateGrowth } = incStAssumptions;
    const years = 5;
    const projections = [cogsRate];
    
    for (let i = 1; i < years; i++) {
        projections[i] = projections[i-1] * (1 + cogsRateGrowth);
    }
    
    return projections;
});

let sgaRateProjs = $derived.by(() => {
    const { sgaRate, sgaRateGrowth } = incStAssumptions;
    const years = 5;
    const projections = [sgaRate];
    
    for (let i = 1; i < years; i++) {
        projections[i] = projections[i-1] * (1 + sgaRateGrowth);
    }
    
    return projections;
});

let taxRateProjs = $derived.by(() => {
    const { taxRate, taxRateGrowth } = incStAssumptions;
    const years = 5;
    const projections = [taxRate];
    
    for (let i = 1; i < years; i++) {
        projections[i] = projections[i-1] * (1 + taxRateGrowth);
    }
    
    return projections;
});

export function getIncStProjections() {
    let incStProjections = $derived({
        unitsSoldProjs,
        pricePerUnitProjs,
        cogsRateProjs,
        sgaRateProjs,
        taxRateProjs
    });
    return incStProjections;
}

// Balance Sheet Projections

let longTermDebtProjs = $derived.by(() => {
    const { longTermDebt } = balShAssumptions;
    const years = 5;
    const projections = new Array(5).fill(longTermDebt);
    return projections;
});

let interestExpenseRateProjs = $derived.by(() => {
    const { interestExpenseRate } = balShAssumptions;
    const years = 5;
    const projections = new Array(5).fill(interestExpenseRate);
    return projections;
});

export function getBalShProjections(){
    let balShProjections = $derived({
        longTermDebtProjs,
        interestExpenseRateProjs
    });
    return balShProjections;
}