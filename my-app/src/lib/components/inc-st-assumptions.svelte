<script lang="ts">
    
    import { getAssumptions, years } from "$lib/true-model.svelte";

    import THeader from "./table/rows/THeader.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import Table_ from "./table/Table.svelte";

    import * as T from "$lib/components/ui/table"
    import { Input } from "$lib/components/ui/input/index";

    let assumptions = getAssumptions();

</script>

<T.Root>
    <T.Caption>Income Statement Assumptions</T.Caption>
    <T.Header>
       <T.Row>
            <T.Head></T.Head>
            <T.Head>Assumption</T.Head>
            <T.Head>Growth Rate</T.Head>
       </T.Row>
    </T.Header>
    <T.Body>
        <T.Row>
            <T.Cell>Units Sold</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.unitsSold}/>
                </T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.unitsSoldGrowth}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>COGS % of Revenue</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.cogsRate}/>
                </T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.cogsRateGrowth}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>SG&A % of Revenue</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.sgaRate}/>
                </T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.sgaRateGrowth}/>
                </T.Cell>
        </T.Row>
        <T.Row>
            <T.Cell>Tax Rate</T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.taxRate}/>
                </T.Cell>
                <T.Cell>
                    <Input bind:value={assumptions.incomeStatement.taxRateGrowth}/>
                </T.Cell>
        </T.Row>
    </T.Body>
</T.Root>

<!-- <Table_ title="Income Statement Assumptions">
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
</Table_>
 -->
