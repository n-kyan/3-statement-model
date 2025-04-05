// Income Statement

import { getBalShProjections, getIncStProjections } from "./projections.svelte";
import { getFixedAssets } from "./fixed-assets.svelte";

let balShProjections = getBalShProjections();
let incStProjections = getIncStProjections();
let fixedAssets = getFixedAssets();

let revenue = $derived.by(() => {
    const { unitsSoldProjs, pricePerUnitProjs } = incStProjections
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = unitsSoldProjs[i] * pricePerUnitProjs[i];
    }
    return result;
});

let cogs = $derived.by(() => {
    const { cogsRateProjs } = incStProjections
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = -(revenue[i] * cogsRateProjs[i]);
    }
    return result;
});

let grossProfit = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = revenue[i] + cogs[i];
    }
    return result;
});

let sga = $derived.by(() => {
    const { sgaRateProjs } = incStProjections
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = -(revenue[i] * sgaRateProjs[i]);
    }
    return result;
});

let depreciation = $derived.by(() => {
    const { totalDepreciation } = fixedAssets
    return totalDepreciation
});

let operatingIncome = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = grossProfit[i] + sga[i] + depreciation[i];
    }
    return result;
});

let interest = $derived.by(() => {
    const { longTermDebtProjs, interestExpenseRateProjs } = balShProjections
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = -(longTermDebtProjs[i] * interestExpenseRateProjs[i]);
    }
    return result;
});

let earningsBeforeTax = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = operatingIncome[i] + interest[i];
    }
    return result;
});

let taxes = $derived.by(() => {
    const { taxRateProjs } = incStProjections
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = earningsBeforeTax[i] > 0 ? -(earningsBeforeTax[i] * taxRateProjs[i]) : 0;
    }
    return result;
});

let netIncome = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = earningsBeforeTax[i] + taxes[i];
    }
    return result;
});

export function getIncomeStatement() {
    let incomeStatement = $derived({
        revenue,
        cogs,
        grossProfit,
        sga,
        depreciation,
        operatingIncome,
        interest,
        earningsBeforeTax,
        taxes,
        netIncome
    });
    return incomeStatement;
}