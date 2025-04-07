<script lang="ts">

    import { getIncomeStatement } from "$lib/true-model.svelte";
    import { formatNumber } from "$lib/functions";
    import Theader from "./table/rows/THeader.svelte";
    import TRow from "./table/rows/TRow.svelte";
    import Table from "./table/Table.svelte";
    import { untrack } from "svelte";


    let incomeStatement = getIncomeStatement();

    let clear = 0;

    // $effect(() => {
    //     incomeStatement.revenue;
    //     untrack>(() => clear++);
    //     console.log("clear++", clear)
    // })

    // let clear:number= $derived.by(() => {
    //     if (incomeStatement.taxes) {
    //         console.log("taxeschange 'inc'", counter)
    //         return counter++;
    //     } else {
    //         return counter;
    //     }
    // })

    let row_0:TRow;
    let row_1:TRow;
    let row_2:TRow;
    let row_3:TRow;
    let row_4:TRow;
    let row_5:TRow;
    let row_6:TRow;
    let row_7:TRow;
    let row_8:TRow;
    let row_9:TRow;

    // $effect(() => {
    //     incomeStatement.taxes
    //     console.log('highlighting cleared')
    //     row_0.clearHighlighting()
    //     row_1.clearHighlighting()
    //     row_2.clearHighlighting()
    //     row_3.clearHighlighting()
    //     row_4.clearHighlighting()
    //     row_5.clearHighlighting()
    //     row_6.clearHighlighting()
    //     row_7.clearHighlighting()
    //     row_8.clearHighlighting()
    //     row_9.clearHighlighting()
    // })
    
</script>


<Table title="Income Statement">
    {#snippet header()}
        <Theader numColumns={5}/>
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
        <!-- <TRow bind:this={row_1} title="- COGS" data={incomeStatement.cogs} clear={clear}/>
        <TRow bind:this={row_2} title="Gross Profit (Loss)" data={incomeStatement.grossProfit} bold={true} clear={clear}/>
        <TRow bind:this={row_3} title="- SG&A" data={incomeStatement.sga} clear={clear}/>
        <TRow bind:this={row_4} title="- Depreciation" data={incomeStatement.depreciation} clear={clear}/>
        <TRow bind:this={row_5} title="Operating Income (Loss)" data={incomeStatement.operatingIncome} bold={true} clear={clear}/>
        <TRow bind:this={row_6} title="- Interest Expense" data={incomeStatement.interest} clear={clear}/>
        <TRow bind:this={row_7} title="Pretax income (Loss)" data={incomeStatement.earningsBeforeTax} bold={true} clear={clear}/>
        <TRow bind:this={row_8} title="- Taxes" data={incomeStatement.taxes} clear={clear}/>
        <TRow bind:this={row_9} title="Net Income (Loss)" data={incomeStatement.netIncome} bold={true} clear={clear}/> -->
</Table>