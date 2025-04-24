<script lang="ts">
    
    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { getAssumptions } from "$lib/true-model.svelte";

    import * as T from "$lib/components/ui/table"
    import { Input } from "$lib/components/ui/input/index"

    import THeader from "$lib/components/table/rows/THeader.svelte"
    import TRow from "$lib/components/table/rows/TRow.svelte";
    import Table_ from "$lib/components/table/Table.svelte";
    
    let assumptions = getAssumptions();
    

</script>

<T.Root>
    <T.Caption>Balance Sheet Assumptions</T.Caption>
    <T.Header>
       <T.Row>
            <T.Head></T.Head>
            <T.Head>Assumption</T.Head>
            <T.Head>Growth Rate</T.Head>
       </T.Row>
    </T.Header>
    <T.Body>
        <T.Row>
            <T.Cell>AR % of Revenue</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.balanceSheet.arRate}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>Inventory % of COGS</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.balanceSheet.inventoryRate}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>AP % of COGS</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.balanceSheet.apRate}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>Long Term Debt</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.balanceSheet.longTermDebt}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>Interest Expense Rate</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.balanceSheet.interestExpenseRate}/>
                </T.Cell>
        </T.Row>
    </T.Body>
</T.Root>

<!-- <Table_ title="Balance Sheet Assumptions">
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
</Table_> -->