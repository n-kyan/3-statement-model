<script lang="ts">

    import { getIncomeStatement } from "$lib/true-model.svelte";

    let incomeStatement = getIncomeStatement();


    function formatCurrency(value:number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            // maximumFractionDigits: 0,
            // maximumFractionDigits: 0
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
    <h3>Income Statement</h3>
    <table>
        <thead>
            <tr>
                <th>Figures in USD millions</th>
                <th></th> <!-- gap -->
                <th>current year and season</th>
                <th>+1 year</th>
                <th>+1 year</th>
                <th>+1 year</th>
                <th>+1 year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Revenue</td> <!-- TODO: price * unitsSold from assumptions -->
                <td>{formatCurrency(incomeStatement.revenue[0])}</td>
            </tr>
            <tr>
                <td>COGS</td> <!-- TODO: COGS% * revenue from assumptions (negative) -->
                <td>{formatCurrency(incomeStatement.cogs[0])}</td>
            </tr>
            <tr>
                <td>**Gross Profit**</td> <!-- TODO: cogs + revenue -->
                <td>{formatCurrency(incomeStatement.grossProfit[0])}</td>
            </tr>
            <tr></tr> <!-- gap -->
            <tr>
                <td>SG&A</td> <!-- TODO: SG&A% * revenue (negative) -->
                <!-- Selling, general and administrative expenses. Can also be a fixed amount if it doesn't scale with revenue.
                 Ex: Software company who has to pay rent which is SG&A but it doesn't scale with revenue. -->
                 <td>{formatCurrency(incomeStatement.sga[0])}</td>
            </tr>
            <tr>
                <td>Depreciation</td> <!-- TODO: from supporting schedules -->
                <td>{formatCurrency(incomeStatement.depreciation[0])}</td>
            </tr>
            <tr>
                <td>**Operating Income (EBIT)**</td> <!-- TODO: sga + grossProfit + depreciation-->
                <td>{formatCurrency(incomeStatement.operatingIncome[0])}</td>
            </tr>
            <tr></tr> <!-- gap -->
            <tr>
                <td>Interest Expense</td> <!-- TODO: -->
                <td>{formatCurrency(incomeStatement.interest[0])}</td>
            </tr>
            <tr>
                <td>**Earnings Before Tax**</td> <!-- TODO: opProfit + interest -->
                <td>{formatCurrency(incomeStatement.earningsBeforeTax[0])}</td>
            </tr>
            <tr>
                <td>Taxes</td> <!-- TODO: if ebt >0 : ebt * taxRate else 0-->
                <td>{formatCurrency(incomeStatement.taxes[0])}</td>
            </tr>
            <tr>
                <td>**Net Income**</td> <!-- TODO: ebt + taxes -->
                <td>{formatCurrency(incomeStatement.netIncome[0])}</td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }
</style>