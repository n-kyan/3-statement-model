<script lang="ts">
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    let incomeStatement = getIncomeStatement();
    let assumptions = getAssumptions();

</script>

<div class="table-container">
    <div class="header">
        <h3>Balance Sheet Assumptions</h3>
    </div>
    <table>
        <thead>
            <tr>
                <th>Balance Assumptions</th>
                <th></th>
                <th>Figure</th>
                <th>Growth Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Accounts Receivable as % of Revenue</td>
                <td></td>
                <td>
                    <input bind:value={assumptions.balanceSheet.arRate} type="number">
                </td>
                <td>%</td>
            </tr>
            <tr>
                <td>Inventory as % of COGS</td>
                <td></td>
                <td>
                    <input bind:value={assumptions.balanceSheet.inventoryRate} type="number">
                </td>
                <td>%</td>
            </tr>
            <tr>
                <td>Accounts Payable as % of COGS</td>
                <td></td>
                <td><input bind:value={assumptions.balanceSheet.apRate} type="number"></td>
                <td>%</td>
            </tr>
            <tr>
                <td>Long Term Debt</td>
                <td></td>
                <td><input bind:value={assumptions.balanceSheet.longTermDebt} type="number"></td>
                <td>%</td>
            </tr>
            <tr>
                <td>Interest Expense %</td>
                <td></td>
                <td><input bind:value={assumptions.balanceSheet.interestExpenseRate} type="number"></td>
            </tr>
            <tr>
                <td>Interest Expense</td>
                <td></td>
                <td>{(incomeStatement.interest[0]).toFixed(2)}</td>
            </tr>
        </tbody>
    </table>
</div>