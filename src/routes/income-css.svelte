<script lang="ts">

    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { formatNumber } from "$lib/functions";

    let incomeStatement = getIncomeStatement();

    
</script>

<div class="table-container">
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
                    <td>{formatNumber(incomeStatement.revenue[0])}</td>
                    <td>{formatNumber(incomeStatement.revenue[1])}</td>
                    <td>{formatNumber(incomeStatement.revenue[2])}</td>
                    <td>{formatNumber(incomeStatement.revenue[3])}</td>
                    <td>{formatNumber(incomeStatement.revenue[4])}</td>
                </tr>
                <tr class="tr-alt">
                    <td>COGS</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.cogs[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gross Profit</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.grossProfit[0])}</td>
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
                    <td>{formatNumber(incomeStatement.sga[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-alt">
                    <td>Depreciation</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.depreciation[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Operating Income (EBIT)</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.operatingIncome[0])}</td>
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
                    <td>{formatNumber(incomeStatement.interest[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-alt">
                    <td>Earnings Before Tax</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.earningsBeforeTax[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Taxes</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.taxes[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="tr-bold">
                    <td>Net Income</td>
                    <td></td>
                    <td>{formatNumber(incomeStatement.netIncome[0])}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>