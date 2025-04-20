// financial-model.svelte.ts
// Centralized model combining all four files with optimized reactivity
import { sumColumns } from "./functions";

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
      ppeFromPreviousYear: 20000,
      arRate: 0,
      inventoryRate: 0,
      apRate: 0,
      longTermDebt: 40000,
      interestExpenseRate: 0.07,
      
      startingCash: 1000,
      startingAR: 800,
      startingInventory: 700,
      startingPPE: 20000,
      startingAP: 900,
      startingComStock: 15000,
      startingRetainedEarnings: 600
    },

    retainedEarnings: {
      dividends: [10000, 12500, 15000, 20000, 25000].map(num => -num)
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

  // =========== RETAINED EARNINGS ===========

  let retainedEarnings = $derived.by(() => {
    let results = [];
    const years = 5;

    results[0] = assumptions.balanceSheet.startingRetainedEarnings;
    for (let i=1; i<years; i++) {
      results[i] = results[i-1] + netIncome[i] + assumptions.retainedEarnings.dividends[i];
    }
    return results;
  })


  // =========== BALANCE SHEET ===========

  let startingTotalCurrAss = $derived(assumptions.balanceSheet.startingCash + assumptions.balanceSheet.startingAR + assumptions.balanceSheet.startingInventory)
  
  let startingTotalAss = $derived(startingTotalCurrAss + assumptions.balanceSheet.startingPPE)
  
  let startingTotalCurLia = $derived(assumptions.balanceSheet.startingAP)
  
  let startingTotalLia = $derived(startingTotalCurLia + assumptions.balanceSheet.longTermDebt)
  
  let startingShaHolEq = $derived(assumptions.balanceSheet.startingComStock + assumptions.balanceSheet.startingRetainedEarnings)
  
  let startingTotalLiaEq = $derived(startingShaHolEq + startingTotalLia);
  
  // cash from cash flow statement

  let accountsReceivable = $derived.by(() => {
    let result = []
    const years = 5

    result[0] = assumptions.balanceSheet.startingAR
    for (let i=0; i<years; i++) {
      result[i+1] = revenue[i]*assumptions.balanceSheet.arRate
    }
    return result;
  })

  let inventory = $derived.by(() => {
    let result = []
    const years = 5

    result[0] = assumptions.balanceSheet.startingInventory
    for (let i=0; i<years; i++) {
      result[i+1] = cogs[i]*assumptions.balanceSheet.inventoryRate
    }
    return result;
  })

  // had to move totalCurrAss down below the CF Statement cashflow statements to fix error of cash not being assigned
  
  let ppe = $derived.by(() => {
    let results = []
    const years = 5
    results[0] = assumptions.balanceSheet.startingPPE
    results[1] = results[0]
    
    for (let i=2; i<years; i++) {
      results[i] = results[i-1] + assumptions.fixedAsset.capEx[i] + totalDepreciation[i]
    }
    return results;
  })

  // had to move totalAss down below the CF Statement cashflow statements to fix error of totalCurrAss not being assigned

  let accountsPayable = $derived.by(() => {
    let result = []
    const years = 5

    result[0] = assumptions.balanceSheet.startingAP
    for (let i=0; i<years; i++) {
      result[i+1] = cogs[i]*assumptions.balanceSheet.apRate
    }
    return result;
  })

  let revolver = $derived([0,0,0,0,0]) // TODO:

  let totalCurrLia = $derived(sumColumns([accountsPayable])) // add revolver

  let longTermDebt = $derived(longTermDebtProjs)

  let totalLiabilities = $derived(sumColumns([totalCurrLia, longTermDebt]))

  let commonStock = $derived(Array(6).fill(assumptions.balanceSheet.startingComStock))

  // retained earnings from retained earnings schedule

  let totalShaEq = $derived(sumColumns([commonStock, retainedEarnings]))

  let totalLiaEq = $derived(sumColumns([totalShaEq, totalLiabilities]))


  // =========== CASH FLOW STATEMENT ===========

  function findChangeIn(data:number[], negate:boolean=false){
    let results = []
    const years = 5;

    for (let i=1; i<years+1; i++){
      results[i] = data[i] - data[i-1];
    }
    if (!negate){
      return results;
    } else {
      return results.map(num => -num);
    }
  }

  // Net Income from income statement

  // Depreciation as a positive number from fixed asset schedule

  let changeAR = $derived(findChangeIn(accountsReceivable, true))

  let changeInventory = $derived(findChangeIn(inventory, true))

  let changeAP = $derived(findChangeIn(accountsPayable))

  let cashFromOps = $derived(sumColumns([changeAR, changeInventory, changeAP]))

  // CapEx from fixed assets as a negative number

  let cashFromInvesting = $derived(assumptions.fixedAsset.capEx.map(num => -num))

  let changeLongTermDebt = $derived(findChangeIn(longTermDebt))

  let changeRevolver = $derived([0,0,0,0,0])

  let changeComStock = $derived(findChangeIn(commonStock))

  // Dividends from retained earnings assumptions

  let cashFromFinancing = $derived(sumColumns([changeLongTermDebt, changeRevolver, changeComStock, assumptions.retainedEarnings.dividends]));
  
  let changeCash = $derived(sumColumns([cashFromOps, cashFromInvesting, cashFromFinancing]));

  let cashBalances = $derived.by(() => {
    let beginningCashBal = [];
    let endingCashBal = [];
    const years = 5;

    beginningCashBal[0] = assumptions.balanceSheet.startingCash;

    for (let i=1; i<years+1; i++) {
      endingCashBal[i-1] = beginningCashBal[i-1] + changeCash[i]
      beginningCashBal[i] = endingCashBal[i-1]

    }
    return {beginningCashBal, endingCashBal}
  })

  // =========== BALANCE SHEET CONT. ===========

  let totalCurrAss = $derived(sumColumns([cashBalances.endingCashBal, accountsReceivable, inventory]))

  let totalAssets = $derived(sumColumns([totalCurrAss, ppe]))

  
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

  // Return Retained Earnings
  export function getRetainedEarnings() {
    return retainedEarnings;
  }

  // Return Balance Sheet
  export function getBalanceSheet() {
    return{
      get accountsReceivable() {return accountsReceivable},
      get inventory() {return inventory},
      get totalCurrAss() {return totalCurrAss},
      get ppe() {return ppe},
      get totalAssets() {return totalAssets},
      get accountsPayable() {return accountsPayable},
      get revolver() {return revolver},
      get totalCurrLia() {return totalCurrLia},
      get longTermDebt() {return longTermDebt},
      get totalLiabilities() {return totalLiabilities},
      get commonStock() {return commonStock},
      get totalShaEq() {return totalShaEq},
      get totalLiaEq() {return totalLiaEq},
    }
  }

  // Return Cash Flow Statement
  export function getCashFlowStatement() {
    return{
      get changeAr() {return changeAR},
      get changeInventory() {return changeInventory},
      get changeAP() {return changeAP},
      get cashFromOps() {return cashFromOps},
      get cashFromInvesting() {return cashFromInvesting},
      get changeLongTermDebt() {return changeLongTermDebt},
      get changeRevolver() {return changeRevolver},
      get changeComStock() {return changeComStock},
      get cashFromFinancing() {return totalLiabilities},
      get commonStock() {return commonStock},
      get changeCash() {return changeCash},
      get cashBalances() {return cashBalances},
    }
  }
  
  // Get assumptions
  export function getAssumptions() {
    return assumptions;
  }