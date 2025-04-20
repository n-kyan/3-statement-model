<script lang="ts">
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    import THeader from "./table/rows/THeader.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import Table from "./table/Table.svelte";

    let assumptions = getAssumptions();

</script>

<Table title="Income Statement Assumptions">
    {#snippet header()}
        <THeader numColumns={1} />
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
    {/snippet}
</Table>

