<script lang="ts">
    import { assumptions, getIncomeStatement } from "$lib/model.svelte";
    const incomeStatement = getIncomeStatement();

</script>

<div class="container">
    <h2>Assumptions</h2>
    <div class="income-statement-assumptions">
        <table>
            <thead>
                <tr>
                    <th>Income Statement Assumptions</th>
                    <th></th>
                    <th>Figure</th>
                    <th>Growth Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Units Sold</td>
                    <td></td>
                    <td>
                        <input bind:value={assumptions.unitsSold} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Price per Unit</td>
                    <td></td>
                    <td>
                        <input bind:value={assumptions.pricePerUnit} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>COGS as % of Revenue</td>
                    <td></td>
                    <td><input bind:value={assumptions.cogsRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>SG&A as % of Revenue</td>
                    <td></td>
                    <td><input bind:value={assumptions.sgaRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Tax Rate</td>
                    <td></td>
                    <td><input bind:value={assumptions.taxRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Revenue</td>
                    <td>{incomeStatement.revenue[0]}</td>
                </tr>
                <tr>
                    <td>COGS</td>
                    <td>{incomeStatement.cogs[0]}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="Balance Sheet Assumptions">
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
                        <input bind:value={assumptions.arRate} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Inventory as % of COGS</td>
                    <td></td>
                    <td>
                        <input bind:value={assumptions.inventoryRate} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Accounts Payable as % of COGS</td>
                    <td></td>
                    <td><input bind:value={assumptions.apRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Long Term Debt</td>
                    <td></td>
                    <td><input bind:value={assumptions.longTermDebt} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Interest Expense %</td>
                    <td></td>
                    <td><input bind:value={assumptions.interestExpenseRate} type="number"></td>
                </tr>
                <tr>
                    <td>Interest Expense</td>
                    <td></td>
                    <td>{(incomeStatement.interest[0]).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    .container {
        flex: 1;
        min-width: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1rem;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
    }
</style>
