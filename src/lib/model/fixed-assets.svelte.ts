// Fixed Assets

import { fixAsAssumptions, balShAssumptions } from "./assumptions.svelte";

let depreciationMatrix = $derived.by(() => {
    const { capEx, newAssetUsefulLife } = fixAsAssumptions;
    const years = 5;
    const result: number[][] = [];
    for (let i = 0; i < years; i++) {
        result[i] = [];
        for (let j = 0; j <= i; j++) {
            result[i][j] = -(capEx[j] / newAssetUsefulLife);
        }
    }
    return result;
});

let existingAssetDepreciation = $derived.by(() => {
    const { existingAssetUsefulLife } = fixAsAssumptions;
    const { ppeFromPreviousYear } = balShAssumptions;
    const years = 5;
    const depreciation = -(ppeFromPreviousYear / existingAssetUsefulLife);
    return Array(years).fill(depreciation);
});

let newAssetDepreciation = $derived.by(() => {
    const { capEx, newAssetUsefulLife } = fixAsAssumptions;
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum += capEx[j] / newAssetUsefulLife;
        }
        result[i] = -(sum);
    }
    return result;
});

let totalDepreciation = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
        result[i] = existingAssetDepreciation[i] + newAssetDepreciation[i];
    }
    return result;
});

let ppeFromPreviousYear = $state(balShAssumptions.ppeFromPreviousYear)

let beginningPPE = $derived.by(() => {
    const years = 5;
    const result: number[] = [];
    result[0] = ppeFromPreviousYear;
    for (let i = 1; i < years; i++) {
        result[i] = result[i-1];
    }
    return result;
})

let endingPPE = $derived.by(() => {
    const { capEx } = fixAsAssumptions;
    const years = 5;
    const result: number[] = [];
    for (let i = 0; i < years; i++) {
        result[i] = beginningPPE[i] + capEx[i] + totalDepreciation[i];
    }
    return result;
})

export function getFixedAssets(){
    let fixedAssets = $derived({
        depreciationMatrix,
        existingAssetDepreciation,
        newAssetDepreciation,
        totalDepreciation,
        ppeFromPreviousYear,
        beginningPPE,
        endingPPE
    });
    return fixedAssets
}