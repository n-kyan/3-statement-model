<script lang="ts">

    import { assumptions, getCashFlowStatement, getFixedAssets, getIncomeStatement, years } from "$lib/true-model.svelte";
    import { formatNumber, tableAnimation } from "$lib/functions";

	import THeader from "$lib/components/table/rows/THeader.svelte"
    import TRow from "$lib/components/table/rows/TRow.svelte";
    import Table from "$lib/components/table/Table.svelte";

    import * as T from "$lib/components/ui/table/index.js";

    let { hovered } : { hovered:boolean } = $props();
    let fixedAssets = getFixedAssets();
    let incomeStatement = getIncomeStatement();
    let cashFlowStatement = getCashFlowStatement();
    


</script>

<T.Root>
    <T.Caption>Cash Flow Statement</T.Caption>
    <T.Header>
       <T.Row>
            <T.Head>Net Income</T.Head>
            {#each years as year, i}
                {#if hovered || i===0}
                    <T.Head><span in:tableAnimation={i}>{year}</span></T.Head>                    
                {/if}
            {/each}
       </T.Row>
    </T.Header>
    <T.Body>
        <T.Row>
            <T.Cell>+ Depreciation</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change In AR</T.Cell>
            {#each incomeStatement.cogs as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change in Inventory</T.Cell>
            {#each incomeStatement.grossProfit as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change in AP</T.Cell>
            {#each incomeStatement.sga as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Cash Flow from Operations</T.Cell>
            {#each incomeStatement.depreciation as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Capital Expentidure</T.Cell>
            {#each incomeStatement.operatingIncome as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Cash Flow from Investing</T.Cell>
            {#each incomeStatement.interest as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change in Long Term Debt</T.Cell>
            {#each incomeStatement.earningsBeforeTax as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change in Revolver</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>+/- Change in Common Stock</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>- Dividends</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Cash Flow from Frinancing</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>BOY Cash Balance</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
        <T.Row>
            <T.Cell>Change in Cash</T.Cell>
            {#each incomeStatement.revenue as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
    </T.Body>
    <T.Footer>
        <T.Row>
            <T.Cell>EOY Cash Balance</T.Cell>
            {#each incomeStatement.netIncome as num, i}
                {#if hovered || i===0}
                    <T.Cell><span in:tableAnimation={i}>{formatNumber(num)}</span></T.Cell>                    
                {/if}
            {/each}
        </T.Row>
    </T.Footer>
</T.Root>

<!-- <Table title="CASH FLOW STATEMENT">
    {#snippet header()}
        <THeader numColumns={6}/>
    {/snippet}
    {#snippet rows()}
        <TRow title="Net Income" bold={true}>
            {#each incomeStatement.netIncome as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+ Depreciation" indented={true}>
            {#each fixedAssets.totalDepreciation as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in AR" indented={true}>
            {#each cashFlowStatement.changeAr as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in Inventory" indented={true}>
            {#each cashFlowStatement.changeInventory as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in AP" indented={true}>
            {#each cashFlowStatement.changeAP as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Cash Flow from Operations" bold={true}>
            {#each cashFlowStatement.cashFromOps as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- Capital Expenditure" indented={true}>
            {#each assumptions.fixedAsset.capEx as num}
                <td>{formatNumber(-num)}</td>
            {/each}
        </TRow>
        <TRow title="Cash Flow from Investing" bold={true}>
            {#each cashFlowStatement.cashFromInvesting as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in Long Term Debt" indented={true}>
            {#each cashFlowStatement.changeLongTermDebt as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in Revolver" indented={true}>
            {#each cashFlowStatement.changeRevolver as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change In Common Stock" indented={true}>
            {#each cashFlowStatement.changeComStock as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="- Dividends" indented={true}>
            {#each assumptions.retainedEarnings.dividends as num}
                <td>{formatNumber(-num)}</td>
            {/each}
        </TRow>
        <TRow title="Cash Flow from Financing" bold={true}>
            {#each cashFlowStatement.cashFromFinancing as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="BOY Cash Balance" bold={true}>
            {#each cashFlowStatement.cashBalances.beginningCashBal as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="+/- Change in Cash" indented={true}>
            {#each cashFlowStatement.changeCash as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="EOY Cash Balance" bold={true}>
            {#each cashFlowStatement.cashBalances.endingCashBal as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
    {/snippet}
</Table> -->