<script lang="ts">
    
    import { formatNumber } from "$lib/functions";
	import { getBalanceSheet, getCashFlowStatement, getRetainedEarnings, years } from "$lib/true-model.svelte";
    import { tableAnimation } from "$lib/functions";
    
    import THeader from "$lib/components/table/rows/THeader.svelte"
    import TRow from "$lib/components/table/rows/TRow.svelte";
    import Table_ from "$lib/components/table/Table.svelte";

    import * as T from "$lib/components/ui/table"
    
    let { hovered } : { hovered:boolean } = $props();
    let balanceSheet = getBalanceSheet();
    let cashFlowStatement = getCashFlowStatement();
    let retainedEarnings = getRetainedEarnings();

</script>

<T.Root>
    <T.Caption>Balance Sheet</T.Caption>
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
            <T.Cell>+ Cash & Cash Equivalents</T.Cell>
            {#each cashFlowStatement.cashBalances.endingCashBal as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Accounts Receivable</T.Cell>
            {#each balanceSheet.accountsReceivable as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Inventory</T.Cell>
            {#each balanceSheet.inventory as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Total Current Assets</T.Cell>
            {#each balanceSheet.totalCurrAss as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Property Plant & Equipment</T.Cell>
            {#each balanceSheet.ppe as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Total Assets</T.Cell>
            {#each balanceSheet.totalAssets as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Accounts Payable</T.Cell>
            {#each balanceSheet.accountsPayable as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Revolver</T.Cell>
            {#each balanceSheet.revolver as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
                {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Total Current Liabilities</T.Cell>
            {#each balanceSheet.totalCurrLia as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Common Stock</T.Cell>
            {#each balanceSheet.commonStock as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+ Retained Earnings</T.Cell>
            {#each retainedEarnings as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Total Shareholder's Equity</T.Cell>
            {#each balanceSheet.totalShaEq as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Total Liabilities and Equity</T.Cell>
            {#each balanceSheet.totalLiaEq as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
    </T.Body>
    <T.Footer>
        <T.Row>
            <T.Cell>Balance Sheet Check</T.Cell>
            {#each [0,1,2,3,4] as i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(balanceSheet.totalAssets[i] - balanceSheet.totalLiaEq[i])}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
    </T.Footer>
</T.Root>

<!-- <Table_ title={"Balance Sheet"}>
    {#snippet header()}
        <THeader numColumns={6}/>
    {/snippet}
    {#snippet rows()}
        <TRow title="Cash & Cash Equivalents">
            {#each cashFlowStatement.cashBalances.endingCashBal as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Accounts Receivable">
            {#each balanceSheet.accountsReceivable as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Inventory">
            {#each balanceSheet.inventory as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Current Assets" bold={true}>
            {#each balanceSheet.totalCurrAss as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Propperty Plant & Equipment">
            {#each balanceSheet.ppe as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Assets" bold={true}>
            {#each balanceSheet.totalAssets as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Accounts Payable">
            {#each balanceSheet.accountsPayable as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Revolver">
            {#each balanceSheet.revolver as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Current Liabilities" bold={true}>
            {#each balanceSheet.totalCurrLia as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Common Stock">
            {#each balanceSheet.commonStock as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Retained Earnings" bold={true}>
            {#each retainedEarnings as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Shareholder's Equity" bold={true}>
            {#each balanceSheet.totalShaEq as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Liabilities and Equity">
            {#each balanceSheet.totalLiaEq as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Balance Sheet Check">
            {#each [0,1,2,3,4] as i}
                <td>{formatNumber(balanceSheet.totalAssets[i] - balanceSheet.totalLiaEq[i])}</td>
            {/each}
        </TRow>
    {/snippet}
</Table_> -->