<script lang="ts">
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    let incomeStatement = getIncomeStatement();
    let assumptions = getAssumptions();

</script>

<div class="table-container">
    <div class="header">
        <h3>Assumptions</h3>
    </div>
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
                        <input bind:value={assumptions.incomeStatement.unitsSold} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Price per Unit</td>
                    <td></td>
                    <td>
                        <input bind:value={assumptions.incomeStatement.pricePerUnit} type="number">
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>COGS as % of Revenue</td>
                    <td></td>
                    <td><input bind:value={assumptions.incomeStatement.cogsRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>SG&A as % of Revenue</td>
                    <td></td>
                    <td><input bind:value={assumptions.incomeStatement.sgaRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Tax Rate</td>
                    <td></td>
                    <td><input bind:value={assumptions.incomeStatement.taxRate} type="number"></td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Revenue</td>
                    <!-- <td>{incomeStatement.revenue[0]}</td> -->
                </tr>
                <tr>
                    <td>COGS</td>
                    <!-- <td>{incomeStatement.cogs[0]}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    
</style>
