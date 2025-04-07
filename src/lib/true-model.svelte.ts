// financial-model.svelte.ts
// Centralized model combining all four files with optimized reactivity

// Model State - Single source of truth
export const assumptions = $state({
    // Assumptions (from assumptions.svelte.ts)
    incomeStatement: {
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
    },
    
    fixedAsset: {
      capEx: [15000, 12000, 10000, 7500, 7500],
      existingAssetUsefulLife: 10,
      newAssetUsefulLife: 10
    },
    
    balanceSheet: {
      ppeFromPreviousYear: 48990,
      arRate: 0,
      inventoryRate: 0,
      apRate: 0,
      longTermDebt: 40000,
      interestExpenseRate: 0.07
    }
  });
  
  // =========== PROJECTIONS ===========
  // From projections.svelte.ts
  
  // Income Statement Projections
  let unitsSoldProjs = $derived.by(() => {
    const { unitsSold, unitsSoldGrowth } = assumptions.incomeStatement;
    const years = 5;
    const projections = [unitsSold];
    
    for (let i = 1; i < years; i++) {
      projections[i] = projections[i-1] * (1 + unitsSoldGrowth);
    }
    
    return projections;
  });
  
  let pricePerUnitProjs = $derived.by(() => {
    const { pricePerUnit, pricePerUnitGrowth } = assumptions.incomeStatement;
    const years = 5;
    const projections = [pricePerUnit];
    
    for (let i = 1; i < years; i++) {
      projections[i] = projections[i-1] * (1 + pricePerUnitGrowth);
    }
    
    return projections;
  });
  
  let cogsRateProjs = $derived.by(() => {
    const { cogsRate, cogsRateGrowth } = assumptions.incomeStatement;
    const years = 5;
    const projections = [cogsRate];
    
    for (let i = 1; i < years; i++) {
      projections[i] = projections[i-1] * (1 + cogsRateGrowth);
    }
    
    return projections;
  });
  
  let sgaRateProjs = $derived.by(() => {
    const { sgaRate, sgaRateGrowth } = assumptions.incomeStatement;
    const years = 5;
    const projections = [sgaRate];
    
    for (let i = 1; i < years; i++) {
      projections[i] = projections[i-1] * (1 + sgaRateGrowth);
    }
    
    return projections;
  });
  
  let taxRateProjs = $derived.by(() => {
    const { taxRate, taxRateGrowth } = assumptions.incomeStatement;
    const years = 5;
    const projections = [taxRate];
    
    for (let i = 1; i < years; i++) {
      projections[i] = projections[i-1] * (1 + taxRateGrowth);
    }
    
    return projections;
  });
  
  // Balance Sheet Projections
  let longTermDebtProjs = $derived.by(() => {
    const { longTermDebt } = assumptions.balanceSheet;
    const years = 5;
    return new Array(years).fill(longTermDebt);
  });
  
  let interestExpenseRateProjs = $derived.by(() => {
    const { interestExpenseRate } = assumptions.balanceSheet;
    const years = 5;
    return new Array(years).fill(interestExpenseRate);
  });
  
  // =========== FIXED ASSETS ===========
  // From fixed-assets.svelte.ts
  
  let depreciationMatrix = $derived.by(() => {
    const { capEx, newAssetUsefulLife } = assumptions.fixedAsset;
    const years = 5;
    const result: number[][] = [];
    for (let i = 0; i < years; i++) {
      result[i] = Array(years).fill(0);
      for (let j = 0; j <= i; j++) {
        result[j][i] = -(capEx[j] / newAssetUsefulLife);
      }
    }
    return result;
  });
  
  let existingAssetDepreciation = $derived.by(() => {
    const { existingAssetUsefulLife } = assumptions.fixedAsset;
    const { ppeFromPreviousYear } = assumptions.balanceSheet;
    const years = 5;
    const depreciation = -(ppeFromPreviousYear / existingAssetUsefulLife);
    return Array(years).fill(depreciation);
  });
  
  let newAssetDepreciation = $derived.by(() => {
    const { capEx, newAssetUsefulLife } = assumptions.fixedAsset;
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
  
  let beginningPPE = $derived.by(() => {
    const { ppeFromPreviousYear } = assumptions.balanceSheet;
    const years = 5;
    const result: number[] = [];
    result[0] = ppeFromPreviousYear;
    for (let i = 1; i < years; i++) {
      result[i] = result[i-1];
    }
    return result;
  });
  
  let endingPPE = $derived.by(() => {
    const { capEx } = assumptions.fixedAsset;
    const years = 5;
    const result: number[] = [];
    for (let i = 0; i < years; i++) {
      result[i] = beginningPPE[i] + capEx[i] + totalDepreciation[i];
    }
    return result;
  });
  
  // =========== INCOME STATEMENT ===========
  // From income-statement.svelte.ts
  
  let revenue = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
      result[i] = unitsSoldProjs[i] * pricePerUnitProjs[i];
    }
    return result;
  });
  
  let cogs = $derived.by(() => {
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
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
      result[i] = -(revenue[i] * sgaRateProjs[i]);
    }
    return result;
  });
  
  let operatingIncome = $derived.by(() => {
    const years = 5;
    const result = [];
    for (let i = 0; i < years; i++) {
      result[i] = grossProfit[i] + sga[i] + totalDepreciation[i];
    }
    return result;
  });
  
  let interest = $derived.by(() => {
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
  
  // =========== EXPORTED GETTERS ===========
  // These functions provide access to the reactive state
  
  // Return projections
  export function getProjections() {
    return {
      get unitsSold() { return unitsSoldProjs; },
      get pricePerUnit() { return pricePerUnitProjs; },
      get cogsRate() { return cogsRateProjs; },
      get sgaRate() { return sgaRateProjs; },
      get taxRate() { return taxRateProjs; },
      get longTermDebt() { return longTermDebtProjs; },
      get interestExpenseRate() { return interestExpenseRateProjs; }
    };
  }
  
  // Return fixed assets
  export function getFixedAssets() {
    return {
      get depreciationMatrix() { return depreciationMatrix; },
      get existingAssetDepreciation() { return existingAssetDepreciation; },
      get newAssetDepreciation() { return newAssetDepreciation; },
      get totalDepreciation() { return totalDepreciation; },
      get beginningPPE() { return beginningPPE; },
      get endingPPE() { return endingPPE; }
    };
  }
  
  // Return income statement
  export function getIncomeStatement() {
    return {
      get revenue() { return revenue; },
      get cogs() { return cogs; },
      get grossProfit() { return grossProfit; },
      get sga() { return sga; },
      get depreciation() { return totalDepreciation; },
      get operatingIncome() { return operatingIncome; },
      get interest() { return interest; },
      get earningsBeforeTax() { return earningsBeforeTax; },
      get taxes() { return taxes; },
      get netIncome() { return netIncome; }
    };
  }
  
  // Get assumptions
  export function getAssumptions() {
    return assumptions;
  }