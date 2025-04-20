<script lang="ts">
	import Table from "./table/Table.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import THeader from "./table/rows/THeader.svelte";

    import { assumptions, getCashFlowStatement, getFixedAssets, getIncomeStatement } from "$lib/true-model.svelte";
	import { formatNumber } from "$lib/functions";

    let fixedAssets = getFixedAssets();
    let incomeStatement = getIncomeStatement();
    let cashFlowStatement = getCashFlowStatement();


</script>

<Table title="CASH FLOW STATEMENT">
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
        <!-- <TRow title="">
            {#each cashFlowStatement. as num}
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow> -->
    {/snippet}
</Table>