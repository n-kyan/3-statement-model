import Assumptions from "../routes/assumptions.svelte";
import BalanceSheet from "../routes/balance_sheet.svelte";

export const assumptions = $state({
    // Base assumptions
        unitsSold: 400,
        unitsSoldGrowth: 0.05,
        
        pricePerUnit: 496,
        pricePerUnitGrowth: 0.03,
        
        cogsRate: 0.43,
        cogsRateGrowth: 0.01,
        
        sgaRate: 0.35,
        sgaRateGrowth: 0.02,
        
        taxRate: 0.21,
        taxRateGrowth: 0.00,

        // Fixed assets assumptions
        capEx: [15000, 12000, 10000, 7500, 7500],
        existingAssetUsefulLife: 10,
        newAssetUsefulLife: 10,

        //Balance Sheet assumotions
        ppeFromPreviousYear: 48990,
        arRate: 0,
        inventoryRate: 0,
        apRate: 0,
        longTermDebt: 40000,
        interestExpenseRate: .07
});

const projections = $derived({
    years: [2025, 2026, 2027, 2028, 2029],
    
    // Calculate derived projections
    get unitsSold() {
        const years = this.years.length;
        const result = new Array(years);
        
        for (let i = 0; i < years; i++) {
            result[i] = i === 0 
                ? assumptions.unitsSold 
                : result[i-1] * (1 + assumptions.unitsSoldGrowth);
        }
        return result;
    },
    
    get pricePerUnit() {
        const years = this.years.length;
        const result = new Array(years);
        
        for (let i = 0; i < years; i++) {
            result[i] = i === 0 
                ? assumptions.pricePerUnit 
                : result[i-1] * (1 + assumptions.pricePerUnitGrowth);
        }
        return result;
    },
    
    get cogsRate() {
        const years = this.years.length;
        const result = new Array(years);
        
        for (let i = 0; i < years; i++) {
            result[i] = i === 0 
                ? assumptions.cogsRate 
                : result[i-1] * (1 + assumptions.cogsRateGrowth);
        }
        return result;
    },
    
    get sgaRate() {
        const years = this.years.length;
        const result = new Array(years);
        
        for (let i = 0; i < years; i++) {
            result[i] = i === 0 
                ? assumptions.sgaRate 
                : result[i-1] * (1 + assumptions.sgaRateGrowth);
        }
        return result;
    },
    
    get interestExpenseRate() {
        return Array(this.years.length).fill(assumptions.interestExpenseRate);
    },
    
    get taxRate() {
        const years = this.years.length;
        const result = new Array(years);
        
        for (let i = 0; i < years; i++) {
            result[i] = i === 0 
                ? assumptions.taxRate 
                : result[i-1] * (1 + assumptions.taxRateGrowth);
        }
        return result;
    },
    
    get longTermDebt() {
        return Array(this.years.length).fill(assumptions.longTermDebt);
    }
})

const fixedAssets = $derived({
    get depreciationMatrix() {
        const { capEx, newAssetUsefulLife } = assumptions;
        const years = projections.years.length;
        
        const result: number[][] = [];
        for (let i = 0; i < years; i++) {
            result[i] = [];
            for (let j = 0; j <= i; j++) {
                result[i][j] = capEx[j] / newAssetUsefulLife;
            }
        }
        return result;
    },
    
    get existingAssetDepreciation() {
        const { ppeFromPreviousYear, existingAssetUsefulLife } = assumptions;
        const years = projections.years.length;
        const depreciation = ppeFromPreviousYear / existingAssetUsefulLife;
        
        return Array(years).fill(depreciation);
    },
    
    get newAssetDepreciation() {
        const { capEx, newAssetUsefulLife } = assumptions;
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            let sum = 0;
            for (let j = 0; j <= i; j++) {
                sum += capEx[j] / newAssetUsefulLife;
            }
            result[i] = sum;
        }
        return result;
    },
    
    get totalDepreciation() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.existingAssetDepreciation[i] + this.newAssetDepreciation[i];
        }
        return result;
    },

    get ppeFromPreviousYear() {
        const { ppeFromPreviousYear } = assumptions;
        return ppeFromPreviousYear;
    },
    
    get beginningPPE(): number[] {
        const { ppeFromPreviousYear } = assumptions;
        const years = projections.years.length;
        const result: number[] = [];
        
        result[0] = ppeFromPreviousYear;
        for (let i = 1; i < years; i++) {
            result[i] = result[i-1];
        }
        return result;
    },
    
    get endingPPE(): number[] {
        const { capEx } = assumptions;
        const years = projections.years.length;
        const result: number[] = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.beginningPPE[i] + capEx[i] - this.totalDepreciation[i];
        }
        return result;
    }
})

const incomeStatement = $derived({
    get revenue() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = projections.unitsSold[i] * projections.pricePerUnit[i];
        }
        return result;
    },
    
    get cogs() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = -(this.revenue[i] * projections.cogsRate[i]);
        }
        return result;
    },
    
    get grossProfit() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.revenue[i] + this.cogs[i];
        }
        return result;
    },
    
    get sga() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = -(this.revenue[i] * projections.sgaRate[i]);
        }
        return result;
    },
    
    get depreciation() {
        return fixedAssets.totalDepreciation;
    },
    
    get operatingIncome() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.grossProfit[i] + this.sga[i] - this.depreciation[i];
        }
        return result;
    },
    
    get interest() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = -(projections.longTermDebt[i] * projections.interestExpenseRate[i]);
        }
        return result;
    },
    
    get earningsBeforeTax() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.operatingIncome[i] + this.interest[i];
        }
        return result;
    },
    
    get taxes() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.earningsBeforeTax[i] > 0 
                ? -(this.earningsBeforeTax[i] * projections.taxRate[i]) 
                : 0;
        }
        return result;
    },
    
    get netIncome() {
        const years = projections.years.length;
        const result = [];
        
        for (let i = 0; i < years; i++) {
            result[i] = this.earningsBeforeTax[i] + this.taxes[i];
        }
        return result;
    }
});

const balanceSheet = $derived({
    // balanceSheet: {
    //     interestExpense
    // }
})

export function getProjections() {
    return projections;
}
export function getFixedAssets() {
    return fixedAssets;
}
export function getIncomeStatement() {
    return incomeStatement;
}