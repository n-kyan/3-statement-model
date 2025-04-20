<script lang="ts">
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    import Table from "./table/Table.svelte";
    import THeader from "./table/rows/THeader.svelte";
    import TRow from "./table/rows/TRow.svelte";


    let assumptions = getAssumptions();
    

</script>


<Table title="Balance Sheet Assumptions">
    {#snippet header()}
        <THeader numColumns={1} />
    {/snippet}
    {#snippet rows()}
        <TRow title="AR % of Revenue">
            <td>
                <input bind:value={assumptions.balanceSheet.arRate} type="number">
            </td>
        </TRow>
        <TRow title="Inventory % of COGS">
            <td>
                <input bind:value={assumptions.balanceSheet.inventoryRate} type="number">
            </td>
        </TRow>
        <TRow title="AP % of COGS">
            <td>
                <input bind:value={assumptions.balanceSheet.apRate} type="number">
            </td>
        </TRow>
        <TRow title="Long Term Debt">
            <td>
                <input bind:value={assumptions.balanceSheet.longTermDebt} type="number">
            </td>
        </TRow>
        <TRow title="Interest Expense Rate">
            <td>
                <input bind:value={assumptions.balanceSheet.interestExpenseRate} type="number">
            </td>
        </TRow>
    {/snippet}
</Table>