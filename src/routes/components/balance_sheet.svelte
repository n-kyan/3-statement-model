<script lang="ts">
    import Table from "./table/Table.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import THeader from "./table/rows/THeader.svelte";
    import { formatNumber } from "$lib/functions";

	import { getBalanceSheet, getCashFlowStatement, getRetainedEarnings } from "$lib/true-model.svelte";

    let balanceSheet = getBalanceSheet();
    let cashFlowStatement = getCashFlowStatement();
    let retainedEarnings = getRetainedEarnings();

</script>

<Table title={"Balance Sheet"}>
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
</Table>