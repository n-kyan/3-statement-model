<script lang="ts">
    import { getIncomeStatement } from "$lib/model.svelte";

    const incomeStatement = getIncomeStatement();

    function formatCurrency(value:number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value)
    }
    
    function formatPercent(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(value);
    }
</script>

<div class="container">
    <div class="header">
        <h3 class="text-lg font-medium text-gray-900">Income Statement</h3>
    </div>
    <div class="overflow-x-auto">
        <table>
            <thead>
                <tr>
                    <th>Figures in USD millions</th>
                    <th></th>
                    <th>Current Year</th>
                    <th>+1 Year</th>
                    <th>+2 Years</th>
                    <th>+3 Years</th>
                    <th>+4 Years</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Revenue</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.revenue[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-alt">
                    <td>COGS</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.cogs[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr>
                    <td class="td-highlight">Gross Profit</td>
                    <td class="td-empty"></td>
                    <td class="td-highlight">{formatCurrency(incomeStatement.grossProfit[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-divider">
                    <td colspan="7"></td>
                </tr>
                <tr>
                    <td>SG&A</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.sga[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-alt">
                    <td>Depreciation</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.depreciation[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr>
                    <td class="td-highlight">Operating Income (EBIT)</td>
                    <td class="td-empty"></td>
                    <td class="td-highlight">{formatCurrency(incomeStatement.operatingIncome[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-divider">
                    <td colspan="7"></td>
                </tr>
                <tr>
                    <td>Interest Expense</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.interest[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-alt">
                    <td class="td-highlight">Earnings Before Tax</td>
                    <td class="td-empty"></td>
                    <td class="td-highlight">{formatCurrency(incomeStatement.earningsBeforeTax[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td class="td-empty"></td>
                    <td>{formatCurrency(incomeStatement.taxes[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
                <tr class="tr-alt">
                    <td class="td-bold">Net Income</td>
                    <td class="td-empty"></td>
                    <td class="td-bold">{formatCurrency(incomeStatement.netIncome[0])}</td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                    <td class="td-empty"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>