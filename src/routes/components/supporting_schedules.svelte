<script lang="ts">
    import { getAssumptions } from "$lib/true-model.svelte";
    import { getFixedAssets } from "$lib/true-model.svelte";
    import { formatNumber, sumColumns } from "$lib/functions";

    import Table from "./table/Table.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import Theader from "./table/rows/THeader.svelte";

    let assumptions = getAssumptions();
    let fixedAssets = getFixedAssets();
    
</script>

<Table title="Fixed Asset Schedule">
    {#snippet header()}
        <Theader numColumns={5}/>
    {/snippet}
    {#snippet rows()}
        <TRow title="Capital Expenditure">
            {#each assumptions.fixedAsset.capEx as capEx}
                <td>
                    <input bind:value={capEx} type="text">
                </td>
            {/each}
        </TRow>
        <TRow title="Existing Asset Useful Life">
            <td>
                <input bind:value={assumptions.fixedAsset.existingAssetUsefulLife} type="text">
            </td>
        </TRow>
        <TRow title="New Asset Useful Life">
            <td>
                <input bind:value={assumptions.fixedAsset.newAssetUsefulLife} type="text">
            </td>
        </TRow>
        <TRow title="PPE 2023 EOP">
            <td>{assumptions.balanceSheet.ppeFromPreviousYear}</td>
        </TRow>
        <TRow title="CapEx" bold={true}>
            {#each [0, 1, 2, 3, 4] as i}
            <td></td>
            {/each}
        </TRow>
        {#each assumptions.fixedAsset.capEx as capEx, i}
            <TRow title="">
                {#each [0, 1, 2, 3, 4] as j}
                    {#if j >= i}
                    <td>{capEx/assumptions.fixedAsset.newAssetUsefulLife}</td>
                    {:else}
                    <td></td>
                    {/if}
                {/each}
            </TRow>
        {/each}
        <TRow title="Existing Asset Depreciation">
            {#each [0, 1, 2, 3, 4] as i}
                <td>{-assumptions.balanceSheet.ppeFromPreviousYear/assumptions.fixedAsset.existingAssetUsefulLife}</td>
            {/each}
        </TRow>
        <TRow title="New Asset Depreciation">
            {#each sumColumns(fixedAssets.depreciationMatrix) as num} 
                <td>{formatNumber(num)}</td>
            {/each}
        </TRow>
        <TRow title="Total Depreciation" bold={true}>
            {#each sumColumns([sumColumns(fixedAssets.depreciationMatrix), Array(5).fill(-assumptions.balanceSheet.ppeFromPreviousYear/assumptions.fixedAsset.existingAssetUsefulLife)]) as num}
                <td>{num}</td>
            {/each}
        </TRow>
    {/snippet}
</Table>
