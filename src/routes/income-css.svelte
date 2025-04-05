<script lang="ts">

    import { getIncomeStatement } from "$lib/true-model.svelte";

    let incomeStatement = getIncomeStatement();

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
        <h3>Income Statement</h3>
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
                    <td></td>
                    <td>{incomeStatement.revenue[0]}</td>
                    <td>{incomeStatement.revenue[1]}</td>
                    <td>{incomeStatement.revenue[2]}</td>
                    <td>{incomeStatement.revenue[3]}</td>
                    <td>{incomeStatement.revenue[4]}</td>
                </tr>
                <tr class="tr-alt">
                    <td>COGS</td>
                    <td></td>
                    <td>{incomeStatement.cogs[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gross Profit</td>
                    <td></td>
                    <td>{incomeStatement.grossProfit[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-divider">
                    <td colspan="7"></td>
                </tr>
                <tr>
                    <td>SG&A</td>
                    <td></td>
                    <td>{incomeStatement.sga[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-alt">
                    <td>Depreciation</td>
                    <td></td>
                    <td>{incomeStatement.depreciation[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Operating Income (EBIT)</td>
                    <td></td>
                    <td>{incomeStatement.operatingIncome[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-divider">
                    <td colspan="7"></td>
                </tr>
                <tr>
                    <td>Interest Expense</td>
                    <td></td>
                    <td>{incomeStatement.interest[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-alt">
                    <td>Earnings Before Tax</td>
                    <td></td>
                    <td>{incomeStatement.earningsBeforeTax[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td></td>
                    <td>{incomeStatement.taxes[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-bold">
                    <td>Net Income</td>
                    <td></td>
                    <td>{incomeStatement.netIncome[0]}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>