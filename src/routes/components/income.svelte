<script lang="ts">

    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { formatNumber } from "$lib/functions";
    // import barGraphImage from "$static/bloomberg-bar-graph.png";

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
                    <th></th>
                    <th>Figures in USD millions</th>
                    <th>Current Year</th>
                    <th>+1 Year</th>
                    <th>+2 Years</th>
                    <th>+3 Years</th>
                    <th>+4 Years</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tr-bold">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td>Revenue</td>
                    {#each incomeStatement.revenue as revenue, i}
                        <td>{formatNumber(revenue)}</td>
                    {/each}
                </tr>
                <tr>
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td class="indented">- COGS</td>
                    {#each incomeStatement.cogs as cogs,i} 
                        <td>{formatNumber(cogs)}</td>
                    {/each}
                </tr>
                <tr class="tr-bold">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td>Gross Profit</td>
                    {#each incomeStatement.grossProfit as grossProfit}
                        <td>{formatNumber(grossProfit)}</td>
                    {/each}
                </tr>
                <tr>
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td class="indented">- SG&A</td>
                    {#each incomeStatement.sga as sga}
                        <td>{formatNumber(sga)}</td>
                    {/each}
                </tr>
                <tr class="tr-alt">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td class="indented">- Depreciation</td>
                    {#each incomeStatement.depreciation as depreciation}
                        <td>{formatNumber(depreciation)}</td>
                    {/each}
                </tr>
                <tr class="tr-bold">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td>Operating Income (Loss)</td>
                    {#each incomeStatement.operatingIncome as operatingIncome}
                        <td>{formatNumber(operatingIncome)}</td>
                    {/each}
                </tr>
                <tr>
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td class="indented">- Interest Expense</td>
                    {#each incomeStatement.interest as interest}
                        <td>{formatNumber(interest)}</td>
                    {/each}
                </tr>
                <tr class="tr-bold">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td>Pretax income (Loss)</td>
                    {#each incomeStatement.earningsBeforeTax as earningsBeforeTax}
                        <td>{formatNumber(earningsBeforeTax)}</td>
                    {/each}
                </tr>
                <tr>
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td class="indented">- Taxes</td>
                    {#each incomeStatement.taxes as taxes}
                        <td>{formatNumber(taxes)}</td>
                    {/each}
                </tr>
                <tr class="tr-bold">
                    <td class="icon">
                        <img src="/bloomberg-bar-graph.png" alt="icon" class="row-icon">
                    </td>
                    <td>Net Income</td>
                    {#each incomeStatement.netIncome as netIncome}
                        <td>{formatNumber(netIncome)}</td>
                    {/each}
                </tr>
            </tbody>
        </table>
    </div>
</div>