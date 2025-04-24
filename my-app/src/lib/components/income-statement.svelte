<script lang="ts">

    import * as T from "$lib/components/ui/table/index.js";

    import { getIncomeStatement, years } from "$lib/true-model.svelte";
    import { formatNumber, tableAnimation } from "$lib/functions";

    import THeader from "$lib/components/table/rows/THeader.svelte"
    import TRow from "$lib/components/table/rows/TRow.svelte";
    import Table_ from "$lib/components/table/Table.svelte";
    
    let { hovered } : { hovered:boolean } = $props();
    let incomeStatement = getIncomeStatement();

    
</script>

<T.Root>
    <T.Caption>Income Statement</T.Caption>
    <T.Header>
       <T.Row>
            <T.Head>FIGURES IN ($)MILLIONS</T.Head>
            {#each years as year, i}
                {#if hovered || i===0}
                    <T.Head><span in:tableAnimation={i}>{year}</span></T.Head>  
                {/if}
            {/each}
       </T.Row>
    </T.Header>
    <T.Body>
        <T.Row>
            <T.Cell>Revenue</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Cogs</T.Cell>
            {#each incomeStatement.cogs as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Gross Profit (Loss)</T.Cell>
            {#each incomeStatement.grossProfit as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- SG&A</T.Cell>
            {#each incomeStatement.sga as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Depreciation</T.Cell>
            {#each incomeStatement.depreciation as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Operating Income (Loss)</T.Cell>
            {#each incomeStatement.operatingIncome as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Interest Expense</T.Cell>
            {#each incomeStatement.interest as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Pretax Income (Loss)</T.Cell>
            {#each incomeStatement.earningsBeforeTax as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Tax Expense</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
    </T.Body>
    <T.Footer>
        <T.Row>
            <T.Cell>Net Income (Loss)</T.Cell>
            {#each incomeStatement.netIncome as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>
                {/if}
            {/each}
        </T.Row>
    </T.Footer>
</T.Root>

<style>
    :global(.table-cell) {
        width: 120px;
        min-width: 120px;
        max-width: 120px;
    }
</style>

<!-- <Table_ title="Income Statement">
    {#snippet header()}
        <THeader numColumns={5}/>
    {/snippet}
    {#snippet rows()}
        <TRow title="Revenue" bold={true}>
            {#each incomeStatement.revenue as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- COGS" indented={true}>
            {#each incomeStatement.cogs as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Gross Profit (Loss)" bold={true}>
            {#each incomeStatement.grossProfit as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- SG&A" indented={true}>
            {#each incomeStatement.sga as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- Depreciation" indented={true}>
            {#each incomeStatement.depreciation as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Operating Income (Loss)" bold={true}>
            {#each incomeStatement.operatingIncome as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- Interest" indented={true}>
            {#each incomeStatement.interest as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Pretax income (Loss)" bold={true}>
            {#each incomeStatement.earningsBeforeTax as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- Taxes" indented={true}>
            {#each incomeStatement.taxes as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Net Income (Loss)" bold={true}>
            {#each incomeStatement.netIncome as num, i}
                <td id={String(i)}>{formatNumber(num)}</td>
            {/each}
        </TRow>
        {/snippet}
</Table_> -->