<script lang="ts">
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    import Theader from "./table/rows/THeader.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import Table from "./table/Table.svelte";

    let incomeStatement = getIncomeStatement();
    let assumptions = getAssumptions();

</script>

<Table title="Income Statement Assumptions">
    {#snippet header()}
        <Theader numColumns={1} />
    {/snippet}
    {#snippet rows()}
        <TRow title="Units Sold">
            <td>
                <input bind:value={assumptions.incomeStatement.unitsSold} type="number">
            </td>
        </TRow>
        <TRow title="COGS % of Revenue">
            <td>
                <input bind:value={assumptions.incomeStatement.cogsRate} type="number">
            </td>
        </TRow>
        <TRow title="SG&A % of Revenue">
            <td>
                <input bind:value={assumptions.incomeStatement.sgaRate} type="number">
            </td>
        </TRow>
        <TRow title="Tax Rate">
            <td>
                <input bind:value={assumptions.incomeStatement.taxRate} type="number">
            </td>
        </TRow>
        <!-- <TRow bind:input={assumptions.incomeStatement.unitsSold} title="Units Solds" bold={true}/>
        <TRow bind:input={assumptions.incomeStatement.pricePerUnit} title="Price Per Unit" bold={true}/>
        <TRow bind:input={assumptions.incomeStatement.cogsRate} title="COGS % of Revenue" bold={true}/>
        <TRow bind:input={assumptions.incomeStatement.sgaRate} title="SG&A % of Revenue" bold={true}/>
        <TRow bind:input={assumptions.incomeStatement.taxRate} title="Tax Rate" bold={true}/> -->
    {/snippet}
</Table>

<style>
    
</style>


<!-- <div class="table-container">
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
                    <td>{incomeStatement.revenue[0]}</td>
                </tr>
                <tr>
                    <td>COGS</td>
                    <td>{incomeStatement.cogs[0]}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div> -->
